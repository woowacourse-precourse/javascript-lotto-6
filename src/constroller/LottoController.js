import InputView from "../view/InputView.js";
import {
  priceValidation,
  numberValidation,
  bonusNubmerValidation,
} from "../utils/Validation.js";

class LottoController {
  #price;
  #lottoNumber;

  async start() {
    try {
      await this.#getUserPrice();
      await this.#getUserLottoNumbers();
      await this.#getUserBonusNumber();
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
  async #getUserBonusNumber() {
    const bonuseNubmer = await InputView.getBonusNumber();
    bonusNubmerValidation(bonuseNubmer, this.#lottoNumber);
  }
}

export default LottoController;
