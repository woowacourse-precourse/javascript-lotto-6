import InputView from "../view/InputView.js";
import { priceValidation, numberValidation } from "../utils/Validation.js";

class LottoController {
  #price;
  #lottoNumber;

  async start() {
    try {
      await this.#getUserPrice();
      await this.#getUserLottoNumbers();
    } catch (error) {
      throw error;
    }
  }

  async #getUserPrice() {
    const price = await InputView.getPrice();
    priceValidation(price);
    return (this.#price = price);
  }

  async #getUserLottoNumbers() {
    const lottoNumbers = await InputView.getLottoNumbers();
    const lottoNumber = lottoNumbers.split(",");
    numberValidation(lottoNumber);
    return (this.#lottoNumber = lottoNumber);
  }
}

export default LottoController;
