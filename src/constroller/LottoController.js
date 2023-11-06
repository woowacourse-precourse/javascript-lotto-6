import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { priceValidation, bonusNubmerValidation } from "../utils/Validation.js";
import UserLotto from "../model/UserLotto.js";
import LottoResult from "../model/LottoResult.js";

class LottoController {
  #answerLotto;
  #userLotto;
  #lottoResult;
  #lottoPrice;
  #lottoBonusNumber;
  #lottoNumber;

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
      await this.#getUserPrice();
      let count = this.#lottoPrice / 1000;
      this.#lottoResult = new LottoResult();
      this.#userLotto = new UserLotto(count);
      this.#printLottoBuy(count);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async #createAnswerLotto() {
    try {
      await this.#getUserLottoNumbers();
      this.#answerLotto = new Lotto(this.#lottoNumber);
      await this.#getUserBonusNumber(this.#lottoNumber);
      this.#lottoResult.setBonusNumber(this.#lottoBonusNumber);
    } catch (error) {
      Console.print(error.message);
      await this.#createAnswerLotto();
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
      this.#lottoPrice = price;
    } catch (error) {
      Console.print(error.message);
      await this.#getUserPrice();
    }
  }

  async #getUserLottoNumbers() {
    try {
      const lottoNumbers = await InputView.getLottoNumbers();
      const lottoNumber = lottoNumbers.split(",");
      this.#lottoNumber = lottoNumber;
    } catch (error) {
      Console.print(error.message);
      await this.#getUserLottoNumbers();
    }
  }
  async #getUserBonusNumber(lottoNumber) {
    try {
      const bonusNumber = await InputView.getBonusNumber();
      bonusNubmerValidation(bonusNumber, lottoNumber);
      this.#lottoBonusNumber = bonusNumber;
    } catch (error) {
      Console.print(error.message);
      await this.#getUserBonusNumber(this.#lottoNumber);
    }
  }
}

export default LottoController;
