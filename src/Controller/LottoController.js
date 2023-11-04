import Money from "../domain/Money.js";
import { InputView } from "../view/InputView.js";
import { lottoSeller } from "../domain/LottoSeller.js";

class LottoController {
  async init() {
    const input = await InputView.readLottoMoney();
    const money = new Money(input);
    const lottos = lottoSeller.getLottos(money.getAmount());
  }
}

export default LottoController;
