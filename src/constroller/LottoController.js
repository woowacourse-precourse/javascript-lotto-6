import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import { generateRandomNumber } from "../utils/RandomNumber.js";
import {
  priceValidation,
  numberValidation,
  bonusNubmerValidation,
} from "../utils/Validation.js";
import AnswerLotto from "../model/AnswerLotto.js";

class LottoController {
  #answerLotto;
  #lottoPage = [];

  async start() {
    try {
      await this.#createLotto();
      await this.#createAnswerLotto();
    } catch (error) {
      throw error;
    }
  }

  async #createLotto() {
    const price = await this.#getUserPrice();
    const count = price / 1000;
    this.#printLottoCount(count);
    this.#getLottoList(count);
  }

  async #createAnswerLotto() {
    const lottoNumber = await this.#getUserLottoNumbers();
    const bonusNumber = await this.#getUserBonusNumber(lottoNumber);

    this.#answerLotto = new AnswerLotto(lottoNumber, bonusNumber);
  }
  #printLottoCount(count) {
    OutputView.printLottoCount(count);
  }

  #getLottoList(count) {
    Array.from({ length: count }).forEach(() => {
      let lotto = new Lotto(generateRandomNumber());
      OutputView.printLotto(lotto.getLottoNumber());
      this.#lottoPage.push(lotto);
    });
  }

  async #getUserPrice() {
    const price = await InputView.getPrice();
    priceValidation(price);
    return price;
  }

  async #getUserLottoNumbers() {
    const lottoNumbers = await InputView.getLottoNumbers();
    const lottoNumber = lottoNumbers.split(",");
    numberValidation(lottoNumber);
    return lottoNumber;
  }
  async #getUserBonusNumber(lottoNumber) {
    const bonusNumber = await InputView.getBonusNumber();
    bonusNubmerValidation(bonusNumber, lottoNumber);
    return bonusNumber;
  }
}

export default LottoController;
