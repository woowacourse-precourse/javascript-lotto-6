import Money from "../../domain/Money.js";
import { InputView } from "../View/InputView.js";

class LottoController {
  async init() {
    const input = await InputView.readLottoMoney();
    const money = new Money(input);
  }
}

export default LottoController;
