import { ConsoleInput } from "./ConsoleInput.js";

class LottoPlay {
  async startGame() {}

  async inputLottoPrice() {
    const lottoPrice = await ConsoleInput.inputLottoPrice();
  }
}
export default LottoPlay;
