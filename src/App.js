import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { createLotto, getNumbersOfLotto } from './LottoUtils.js';

const lottoInstance = createLotto([1, 2, 3, 4, 5, 6]);

const numbers = getNumbersOfLotto(lottoInstance);
console.log(numbers);

function getLottoNumbers(lotto) {
  return lotto._numbers;
}

class App {
  constructor() {
    this.amount = 0;
  }

  async play() {
    this.amount = await this.#getAmount();
    MissionUtils.Console.print (`${this.amount}`);
    this.#generateLottos();
    const lottoNumbers = new Lotto (this.#randomNumbers());
    const bonusNumber = this.#bonusNumber(lottoNumbers.getNumbers());
  }
  
  async #getAmount() {
    let isValid = false;
    let amount = 0;

    while (!isValid) {
      MissionUtils.Console.print("구입금액을 입력해 주세요.");
      amount = await MissionUtils.Console.readLineAsync();
      isValid = this.#validateAmount(amount);
      if (isValid) {
        MissionUtils.Console.print (`${this.amount}`);
      }
    }

    return Number(amount);
  }

  #validateAmount (amount) {
    if (isNaN(amount) || amount <= 0) {
      MissionUtils.Console.print("[ERROR] 유효한 금액을 입력해주세요.");
      return false;
    }
    return true;
  }

  #generateLottos () {
    const lottoCount = Math.floor(this.amount / 1000);
    const lottos = [];

    for (let i=0; i < lottoCount; i++) {
      lottos.push (createLotto(this.#randomNumbers()));
    }

    lottos.forEach (lotto => MissionUtils.Console.print(getNumbersOfLotto(lotto)));

    MissionUtils.Console.print(`${numberOfLottos}개를 구매했습니다.`);
  }
  
    #randomNumbers() {
      const numbers = [];
      while (numbers.length < 6) {
        numbers.push (this.#uniqueNumber(numbers));
      }
      return numbers.sort ((a, b) => a - b);
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

    #bonusNumber(excludedNumber) {
      let number;
      do {
        number = MissionUtils.Random.pickNumberInRange(1, 45);
      } while (excludedNumber.includes(number));
      return number;
    }
}

export default App;
