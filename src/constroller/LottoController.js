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
import LottoResult from "../model/LottoResult.js";

class LottoController {
  #answerLotto;
  #lottoResult;
  #lottoPrice;
  #lottoPage = [];

  async start() {
    try {
      await this.#createLotto();
      await this.#createAnswerLotto();
      this.#lottoResult = new LottoResult();
      this.#setLottoResult();
      OutputView.printLottoResult(this.#lottoResult.getLottoRank());

      this.#lottoResult.setLottoPrize();
      OutputView.printLottoRate(
        this.#lottoPrice,
        this.#lottoResult.getLottoPrize()
      );
    } catch (error) {
      throw error;
    }
  }

  async #createLotto() {
    try {
      this.#lottoPrice = await this.#getUserPrice();
      const count = this.#lottoPrice / 1000;
      this.#printLottoCount(count);
      this.#getLottoList(count);
    } catch (error) {
      throw error;
    }
  }

  async #createAnswerLotto() {
    try {
      const lottoNumber = await this.#getUserLottoNumbers();
      const bonusNumber = await this.#getUserBonusNumber(lottoNumber);

      this.#answerLotto = new AnswerLotto(lottoNumber, bonusNumber);
    } catch (error) {
      throw error;
    }
  }

  #setLottoResult() {
    this.#lottoPage.forEach((page) => {
      this.#lottoResult.setRank(
        page.getLottoNumber(),
        this.#answerLotto.getLottoNumber(),
        this.#answerLotto.getBonusNumber()
      );
    });
  }

  #printLottoCount(count) {
    OutputView.printLottoPaperCount(count);
  }

  #getLottoList(count) {
    Array.from({ length: count }).forEach(() => {
      let lotto = new Lotto(generateRandomNumber());
      OutputView.printLotto(lotto.getLottoNumber());
      this.#lottoPage.push(lotto);
    });
  }

  async #getUserPrice() {
    try {
      const price = await InputView.getPrice();
      priceValidation(price);
      return price;
    } catch (error) {
      throw error;
    }
  }

  async #getUserLottoNumbers() {
    try {
      const lottoNumbers = await InputView.getLottoNumbers();
      const lottoNumber = lottoNumbers.split(",");
      numberValidation(lottoNumber);
      return lottoNumber;
    } catch (error) {
      throw error;
    }
  }
  async #getUserBonusNumber(lottoNumber) {
    try {
      const bonusNumber = await InputView.getBonusNumber();
      bonusNubmerValidation(bonusNumber, lottoNumber);
      return bonusNumber;
    } catch (error) {
      throw error;
    }
  }
}

export default LottoController;
