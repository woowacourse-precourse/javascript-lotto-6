import Lotto from "../Lotto.js";
import Money from "../domain/Money.js";
import LottoSeller from "../domain/LottoSeller.js";
import LottoNumbersParser from "../domain/LottoNumbersParser.js";
import LottoAnswer from "../domain/LottoAnswer.js";
import LottoResultCalculator from "../domain/LottoResultCalculator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { repeatUntillComplete } from "../utils/repeatUntillComplete.js";

const LottoController = {
  async init() {
    const lottos = await repeatUntillComplete(this.readMoneyAndGetLottos)();
    this.printLottos(lottos);

    const answerLotto = await repeatUntillComplete(this.getAnswerLottoFromUser)();
    const answer = await repeatUntillComplete(this.readBonusNumberForLottoAnswer)(answerLotto);

    const result = await this.getLottoResult(lottos, answer);
    this.printResult(result);
  },

  async readMoneyAndGetLottos() {
    const moneyInput = await InputView.readMoney();
    const money = new Money(moneyInput);
    const lottos = LottoSeller.getLottos(money.getAmount());

    return lottos;
  },

  printLottos(lottos) {
    OutputView.printBlankLine();
    OutputView.printLottoCount(lottos);
    OutputView.printLottos(lottos);
    OutputView.printBlankLine();
  },

  async getAnswerLottoFromUser() {
    const lottoAnswerInput = await InputView.readLottoAnswer();
    const parsedLottoAnwerInput = LottoNumbersParser.parse(lottoAnswerInput);
    const answerLotto = new Lotto(parsedLottoAnwerInput);

    return answerLotto;
  },

  async readBonusNumberForLottoAnswer(answerLotto) {
    const bonusNumber = await InputView.readBonusNumber();
    const lottoAnswer = new LottoAnswer(answerLotto, bonusNumber);

    return lottoAnswer;
  },

  async getLottoResult(lottos, answer) {
    const checker = new LottoResultCalculator(lottos);
    const prizes = checker.calculatePrizes(answer);
    const profitRate = checker.calculateProfitRate(prizes);

    return { prizes, profitRate };
  },

  printResult({ prizes, profitRate }) {
    OutputView.printBlankLine();
    OutputView.printPrizes(prizes);
    OutputView.printProfitRate(profitRate);
  },
};

export default LottoController;
