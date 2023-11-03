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
  #lottoCount;
  #answerLotto;
  #lottoPage = [];

  async start() {
    try {
      await this.#getUserPrice();
      this.#printLottoCount();
      this.#getLottoList();
      await this.#createAnswerLotto();
    } catch (error) {
      throw error;
    }
  }
  async #createAnswerLotto() {
    const lottoNumber = await this.#getUserLottoNumbers();
    const bonusNumber = await this.#getUserBonusNumber(lottoNumber);

    this.#answerLotto = new AnswerLotto(lottoNumber, bonusNumber);
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
    return lottoNumber;
  }
  async #getUserBonusNumber(lottoNumber) {
    const bonusNumber = await InputView.getBonusNumber();
    bonusNubmerValidation(bonusNumber, lottoNumber);
    return bonusNumber;
  }
}

export default LottoController;
