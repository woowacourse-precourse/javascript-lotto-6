import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import { generateRandomNumber } from "../utils/RandomNumber.js";
import {
  priceValidation,
  numberValidation,
  bonusNubmerValidation,
} from "../utils/Validation.js";

class LottoController {
  #lottoCount;
  #lottoNumber;
  #lottoPage = [];

  async start() {
    try {
      await this.#getUserPrice();
      this.#printLottoCount();
      this.#getLottoList();
      await this.#getUserLottoNumbers();
      await this.#getUserBonusNumber();
    } catch (error) {
      throw error;
    }
  }

  #printLottoCount() {
    OutputView.printLottoCount(this.#lottoCount);
  }

  #getLottoList() {
    Array.from({ length: this.#lottoCount }).forEach(() => {
      let lotto = new Lotto(generateRandomNumber());
      OutputView.printLotto(lotto.getLottoNumber());
      this.#lottoPage.push(lotto);
    });
  }

  async #getUserPrice() {
    const price = await InputView.getPrice();
    priceValidation(price);
    return (this.#lottoCount = price / 1000);
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
