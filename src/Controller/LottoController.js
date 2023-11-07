import Money from "../domain/Money.js";
import { InputView } from "../view/InputView.js";
import { lottoSeller } from "../domain/LottoSeller.js";
import Lotto from "../Lotto.js";
import { lottoNumbersParser } from "../domain/lottoNumbersParser.js";
import LottoAnswer from "../domain/LottoAnswer.js";
import LottoResultChecker from "../domain/LottoResultChecker.js";
import { OutputView } from "../view/outputView.js";
import { repeatUntillComplete } from "../utils/repeatUntillComplete.js";

class LottoController {
  async init() {
    const lottos = await repeatUntillComplete(this.readMoneyAndGetLottos)();
    LottoController.printLottos(lottos);

    const answerLotto = await repeatUntillComplete(this.getAnswerLottoFromUser)();
    const answer = await repeatUntillComplete(this.attachBonusNumberToLottoAnswer)(answerLotto);

    const result = await LottoController.getLottoResult(lottos, answer);
    LottoController.printResult(result);
  }

  async readMoneyAndGetLottos() {
    const moneyInput = await InputView.readMoney();
    const money = new Money(moneyInput);
    const lottos = lottoSeller.getLottos(money.getAmount());
    return lottos;
  }

  static printLottos(lottos) {
    OutputView.printBlankLine();
    OutputView.printLottoLength(lottos);
    OutputView.printLottos(lottos);
    OutputView.printBlankLine();
  }

  async getAnswerLottoFromUser() {
    const lottoAnswerInput = await InputView.readLottoAnswer();
    const parsedLottoAnwerInput = lottoNumbersParser.parse(lottoAnswerInput);
    const lottoAnwer = new Lotto(parsedLottoAnwerInput);
    return lottoAnwer;
  }

  async attachBonusNumberToLottoAnswer(answerLotto) {
    const bonusNumber = await InputView.readBonusNumber();
    const answer = new LottoAnswer(answerLotto, bonusNumber);
    return answer;
  }

  static async getLottoResult(lottos, answer) {
    const checker = new LottoResultChecker(lottos);
    const prizes = checker.calculatePrizes(answer);
    const profitRate = checker.checkProfitRate(prizes);
    return { prizes, profitRate };
  }

  static printResult({ prizes, profitRate }) {
    OutputView.printBlankLine();
    OutputView.printPrizes(prizes);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;
