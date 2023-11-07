import LottoShop from "../domains/LottoShop.js";
import TargetLotto from "../domains/TargetLotto.js";
import User from "../domains/User.js";
import CalCulatorLottoResult from "../domains/CalculatorLottoResult.js";
import OutPutView from "../views/outPutView.js";
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
    const calCulatorLottoResult = new CalCulatorLottoResult(
      this.#user,
      this.#targetLotto
    );

    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();
    const totalProfit =
      calCulatorLottoResult.getTotalProfit(lottoWinningCounts);

    const totalUsedMoney =
      this.#user.getLottoList().length * this.#lottoShop.getLottoPrice();
    this.#outPutView.printLottoResults(lottoWinningCounts);
    this.#outPutView.printLottoReturns(totalProfit, totalUsedMoney);
  }
}

export default LottoController;
