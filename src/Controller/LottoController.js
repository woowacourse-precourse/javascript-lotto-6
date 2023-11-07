import Money from "../domain/Money.js";
import { InputView } from "../view/InputView.js";
import { lottoSeller } from "../domain/LottoSeller.js";
import Lotto from "../Lotto.js";
import { lottoNumbersParser } from "../domain/lottoNumbersParser.js";
import LottoAnswer from "../domain/LottoAnswer.js";
import LottoBuyer from "../domain/LottoBuyer.js";
import { OutputView } from "../view/outputView.js";
import { repeatUntillComplete } from "../utils/repeatUntillComplete.js";

class LottoController {
  async init() {
    const lottos = await repeatUntillComplete(this.readMoneyAndGetLottos)();
    LottoController.printLottos(lottos);

    const lottoAnswer = await repeatUntillComplete(this.getLottoAnswerFromUser)();
    const answer = await repeatUntillComplete(this.attachBonusNumberToAnswer)(lottoAnswer);

    const result = await LottoController.getLottoResult(lottos, answer);
    LottoController.printResult(result);
  }

  async readMoneyAndGetLottos() {
    const lottoMoneyInput = await InputView.readLottoMoney();
    const money = new Money(lottoMoneyInput);
    const lottos = lottoSeller.getLottos(money.getAmount());
    return lottos;
  }

  static printLottos(lottos) {
    OutputView.printBlankLine();
    OutputView.printLottoLength(lottos);
    OutputView.printLottos(lottos);
    OutputView.printBlankLine();
  }

  async getLottoAnswerFromUser() {
    const lottoAnswerInput = await InputView.readLottoAnswer();
    const parsedLottoAnwerInput = lottoNumbersParser.parse(lottoAnswerInput);
    const lottoAnwer = new Lotto(parsedLottoAnwerInput);
    return lottoAnwer;
  }

  async attachBonusNumberToAnswer(lottoAnswer) {
    const bonusNumber = await InputView.readBonusNumber();
    const answer = new LottoAnswer(lottoAnswer, bonusNumber);
    return answer;
  }

  static async getLottoResult(lottos, answer) {
    const buyer = new LottoBuyer(lottos);
    const prizes = buyer.getMyGrades(answer);
    const profitRate = buyer.checkProfitRate(prizes);
    return { prizes, profitRate };
  }

  static printResult({ prizes, profitRate }) {
    OutputView.printBlankLine();
    OutputView.printPrizes(prizes);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;
