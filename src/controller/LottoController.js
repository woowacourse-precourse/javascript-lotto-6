import LottoShop from "../domains/LottoShop.js";
import TargetLotto from "../domains/TargetLotto.js";
import User from "../domains/User.js";
import CalculatorLottoResult from "../domains/CalculatorLottoResult.js";
import OutPutView from "../views/OutPutView.js";
import InputView from "../views/InputView.js";

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
    const { lottoWinningCounts, profitRate } = this.#calculateLottoResults();
    this.#disPlayLottoResults(lottoWinningCounts, profitRate);
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

  #calculateLottoResults() {
    const calculatorLottoResult = new CalculatorLottoResult(
      this.#user,
      this.#targetLotto
    );
    const lottoWinningCounts = calculatorLottoResult.getLottoWinningCount();
    const totalProfit =
      calculatorLottoResult.getTotalProfit(lottoWinningCounts);
    const profitRate = calculatorLottoResult.getTotalProfitRate(totalProfit);

    return { lottoWinningCounts, profitRate };
  }

  #disPlayLottoResults(lottoWinningCounts, profitRate) {
    this.#outPutView.printLottoResults(lottoWinningCounts);
    this.#outPutView.printLottoReturns(profitRate);
  }
}

export default LottoController;
