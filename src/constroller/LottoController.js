import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import { generateRandomNumber } from "../utils/RandomNumber.js";
import { priceValidation, bonusNubmerValidation } from "../utils/Validation.js";
import UserLotto from "../model/UserLotto.js";
import LottoResult from "../model/LottoResult.js";

class LottoController {
  #answerLotto;
  #userLotto;
  #lottoResult;
  #lottoPrice;
  #lottoPage = [];

  async start() {
    try {
      await this.#createLotto();
      await this.#createAnswerLotto();
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
      this.#lottoResult = new LottoResult();
      this.#userLotto = new UserLotto(count);
      this.#printLottoBuy(count);
    } catch (error) {
      throw error;
    }
  }

  async #createAnswerLotto() {
    try {
      this.#answerLotto = new Lotto(await this.#getUserLottoNumbers());
      this.#lottoResult.setBonusNumber(
        await this.#getUserBonusNumber(this.#answerLotto.getLottoNumber())
      );
    } catch (error) {
      throw error;
    }
  }

  #setLottoResult() {
    const userNumbers = this.#userLotto.getLottoNumber();
    userNumbers.forEach((userNumber) => {
      this.#lottoResult.setRank(userNumber, this.#answerLotto.getLottoNumber());
    });
  }

  #printLottoBuy(count) {
    OutputView.printLottoPaperCount(count);
    OutputView.printLotto(this.#userLotto.getLottoNumber());
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
