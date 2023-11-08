import Lotto from "../model/Lotto.js"
import { getBonusNumber, getUserAmount, getWinningNumber } from "../view/input.js"
import { printAttempt, printRandomNumbersArray, printResult } from "../view/output.js";
import { LOTTO } from "../constatns/number.js";
import { print, getRandomNumbersArray } from "../utils.js";

class LottoController {
  #lotto;
  #attempt;
  #randomNumbersArray;
  #bonusNumber;
  
  async lottoStart() {
    await this.#makeLotto();
    await this.#setWinningNumber();
    await this.#setBonusNumber();
    await this.#matchLotto();
  }

  async #makeLotto() {
    while (true) {
      try {
        this.#attempt = await getUserAmount() / LOTTO.PRICE;
        this.#randomNumbersArray = getRandomNumbersArray(this.#attempt);
        printAttempt(this.#attempt);
        printRandomNumbersArray(this.#randomNumbersArray);
        break;
      }
      catch (error) {
        print(error);
      }
    }
  }

  async #setWinningNumber() {
    while (true) {
      try {
        this.#lotto = new Lotto(await getWinningNumber());
        break;
      }
      catch (error) {
        print(error);
      }
    }
  }

  async #setBonusNumber() {
    while (true) {
      try {
        this.#bonusNumber = await getBonusNumber();
        break;
      }
      catch (error) {
        print(error);
      }
    }
  }


  async #matchLotto() {
    while (true) {
      try {
        const lottoResult = this.#lotto.lottoMatchStart(this.#randomNumbersArray, this.#bonusNumber);
        printResult(lottoResult, this.#attempt);
        break;
      }
      catch (error) {
        print(error);
      }
    }
  }

}
export default LottoController;