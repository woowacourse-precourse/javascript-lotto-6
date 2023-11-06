import LottoShop from "../domains/LottoShop.js";
import TargetLotto from "../domains/TargetLotto.js";
import User from "../domains/User.js";
import OutPutView from "../Views/outPutView.js";
import InputView from "../Views/InputView.js";
import { Console } from "@woowacourse/mission-utils";

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
    const userMoneyInput = await this.#inputView.getBuyMoneyInput();
    this.#user = new User(userMoneyInput);

    const lottoPrice = this.#lottoShop.getLottoPrice();
    const maxBuyCount = Math.floor(userMoneyInput / lottoPrice);

    this.#lottoShop.sellLottos(this.#user, maxBuyCount);
    this.#outPutView.printBuyLottoCount(maxBuyCount);

    const userBuyLottoList = this.#user.getLottoList();

    userBuyLottoList.forEach((lotto) =>
      this.#outPutView.printLottoNumber(lotto)
    );
    this.#outPutView.printNewLine();

    const { targetNumberList, targetBonusNumber } =
      await this.#inputView.getTargetLottoInfoInput();

    this.#targetLotto = new TargetLotto(targetNumberList, targetBonusNumber);

    this.#outPutView.printLottoResultInfoMessage();

    const lottoWinningCounts = [0, 0, 0, 0, 0];

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

    let totalWinningMoney = 0;

    userBuyLottoList.forEach((lotto) => {
      const lottoResult = this.#targetLotto.calLottoResult(lotto);
      if (lottoResult !== 0) {
        lottoWinningCounts[lottoResult - 1]++;
        totalWinningMoney += LOTTO_AWARD[lottoResult].money;
      }
    });

    this.#outPutView.printLottoResults(lottoWinningCounts);
    this.#outPutView.printLottoReturns(totalWinningMoney, userMoneyInput);
  }
}

export default LottoController;
