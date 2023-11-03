import InputView from "../view/InputView.js";
import { priceValidation } from "../utils/Validation.js";

class LottoController {
  async start() {
    try {
      await this.#getUserPrice();
    } catch (error) {
      throw error;
    }
  }

  async #getUserPrice() {
    const price = await InputView.getPrice();
    priceValidation(price);
  }
}

export default LottoController;
