import LottoShop from "../domains/LottoShop.js";
import TargetLotto from "../domains/TargetLotto.js";
import User from "../domains/User.js";
import OutPutView from "../views/outPutView.js";
import InputView from "../views/InputView.js";

// TODO 상수 분리

const LOTTO_AWARD = {
  1: {
    money: 2000000000,
    message: "6개 일치",
  },
  2: {
    money: 30000000,
    message: "5개 일치, 보너스 볼 일치",
  },
  3: {
    money: 1500000,
    message: "5개 일치",
  },
  4: {
    money: 50000,
    message: "4개 일치",
  },
  5: {
    money: 5000,
    message: "3개 일치",
  },
};

class LottoController {
  #lottoShop;
  #targetLotto;
  #user;
  #outPutView;
  #inputView;

  constructor() {
    this.#lottoShop = new LottoShop();
    this.#outPutView = new OutPutView();
    this.#inputView = new InputView();
  }

  async start() {
    await this.#initializeUser();
    this.#purchaseLottos();
    await this.#initializeTargetLotto();
    this.#calculateAndDisplayResults();
  }

  async #initializeUser() {
    const userMoneyInput = await this.#inputView.getBuyMoneyInput();
    this.#user = new User(userMoneyInput);
    this.#outPutView.printNewLine();
  }

  #purchaseLottos() {
    const lottoPrice = this.#lottoShop.getLottoPrice();
    const maxBuyCount = this.#user.getMoney() / lottoPrice;

    this.#lottoShop.sellLottos(this.#user, maxBuyCount);

    this.#outPutView.printBuyLottoCount(maxBuyCount);
    this.#outPutView.printLottoNumbers(this.#user.getLottoList());
    this.#outPutView.printNewLine();
  }

  async #initializeTargetLotto() {
    const { targetNumberList, targetBonusNumber } =
      await this.#inputView.getTargetLottoInfoInput();

    this.#targetLotto = new TargetLotto(targetNumberList, targetBonusNumber);

    this.#outPutView.printLottoResultInfoMessage();
  }

  #calculateAndDisplayResults() {
    const lottoWinningCounts = this.#calculateLottoResultCount();
    const totalProfit = this.#calculateTotalProfit(lottoWinningCounts);
    const totalUsedMoney =
      this.#user.getLottoList().length * this.#lottoShop.getLottoPrice();
    this.#outPutView.printLottoResults(lottoWinningCounts);
    this.#outPutView.printLottoReturns(totalProfit, totalUsedMoney);
  }

  #calculateLottoResultCount() {
    const lottoWinningCounts = [0, 0, 0, 0, 0];
    this.#user.getLottoList().forEach((lotto) => {
      const lottoResult = this.#targetLotto.calLottoResult(lotto);
      if (lottoResult !== 0) {
        lottoWinningCounts[lottoResult - 1]++;
      }
    });
    return lottoWinningCounts;
  }

  #calculateTotalProfit(lottoWinningCounts) {
    return lottoWinningCounts.reduce((acc, count, index) => {
      return acc + count * LOTTO_AWARD[index + 1].money;
    }, 0);
  }
}

export default LottoController;
