import Money from "../domain/Money.js";
import { InputView } from "../view/InputView.js";
import { lottoSeller } from "../domain/LottoSeller.js";
import Lotto from "../Lotto.js";
import { lottoNumbersParser } from "../domain/lottoNumbersParser.js";
import LottoAnswer from "../domain/LottoAnswer.js";

class LottoController {
  async init() {
    const lottoMoneyInput = await InputView.readLottoMoney();
    const money = new Money(lottoMoneyInput);
    const lottos = lottoSeller.getLottos(money.getAmount());

    const lottoAnswerInput = await InputView.readLottoAnswer();
    const parsedLottoAnwerInput = lottoNumbersParser.parse(lottoAnswerInput);
    const lottoAnwer = new Lotto(parsedLottoAnwerInput);

    const bonusNumber = await InputView.readBonusNumber();
    const answer = new LottoAnswer(lottoAnwer, bonusNumber);
  }
}

export default LottoController;
