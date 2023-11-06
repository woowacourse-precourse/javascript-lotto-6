import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";


class App {
  async play() {
    const lottoNumbers = this.#generateLottoNumbers();
    const bonusNumber = this.#bonusNumber(lottoNumbers);
  }

    #isNumberUnique (number, numberHistory) {
      return !numberHistory.includes(number);
    }

    #uniqueNumber (numberHistory) {
      let number;
      do {
        number = MissionUtils.Random.pickNumberInRange(1, 45);
      } while (!this.#isNumberUnique(number, numberHistory));

      return number;
    }

    #generateLottoNumbers() {
      const numbers = [];
      while (numbers.length < 6) {
        numbers.push(this.#uniqueNumber(numbers));
      }
      return numbers.sort((a, b) => a - b);
    }

    #bonusNumber(excludedNumber) {
      let number;
      do {
        number = MissionUtils.Random.pickNumberInRange(1, 45);
      } while (excludedNumber.includes(number));
      return number;
    }
}

export default App;
