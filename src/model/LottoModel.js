import Lotto from "../Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ErrorMessage } from "../Messages.js";

class LottoModel {
  #lottos = [];
  #lottoNumbers = [];
  #count;
  #price;
  #bonusNumber;
  #result = Array(6).fill(0);
  #income;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = price;
    this.#count = parseInt(price / 1000);
  }

  #validatePrice(price) {
    if (isNaN(price) || price % 1000 !== 0 || price < 1000) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_AMOUNT);
    }
  }

  getPrice() {
    return this.#price;
  }

  getCount() {
    return this.#count;
  }

  generateLottos() {
    for (let i = 0; i < this.#count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
    return [this.#price, this.#count, this.#lottos];
  }

  setLottoNumbers(numbers) {
    this.validateLottoNumbers(numbers);
    this.#lottoNumbers = numbers;
  }

  validateLottoNumbers(numbers) {
    if (!numbers || numbers.length !== 6) {
      throw new Error(ErrorMessage.ERROR_INVALID_LENGTH);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(ErrorMessage.ERROR_INVALID_RANGE);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ErrorMessage.ERROR_DUPLICATE_NUMBERS);
    }
    this.#lottoNumbers = numbers;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  setBonusNumber(number) {
    this.validateBonusNumbers(number);
    this.#bonusNumber = number;
  }

  validateBonusNumbers = (number) => {
    if (isNaN(number)) {
      throw new Error(ErrorMessage.INVALID_BONUS_NUMBER);
    }
    if (number < 1 || number > 45) {
      throw Error(ErrorMessage.ERROR_INVALID_RANGE);
    }
    if (this.#lottoNumbers.includes(Number(number))) {
      throw Error(ErrorMessage.ERROR_DUPLICATE_NUMBERS);
    }
  };

  checkNumbers() {
    for (let lotto of this.#lottos) {
      const numbers = lotto.getNumbers();
      const [correctTarget, correctBonus] = this.calculateCorrect(numbers);
      this.calculateResult(correctTarget, correctBonus);
    }
    this.setIncome();
    return [this.#result, this.#income];
  }

  calculateCorrect(numbers) {
    let correctTarget = 0;
    let correctBonus = numbers.includes(Number(this.#bonusNumber)) ? 1 : 0;

    for (let targetNumber of this.#lottoNumbers) {
      if (numbers.includes(Number(targetNumber))) correctTarget += 1;
    }
    return [correctTarget, correctBonus];
  }

  calculateResult(correctTarget, correctBonus) {
    let ranking = 0;

    if (correctTarget === 6) ranking = 1;
    if (correctTarget === 6 - 1 && correctBonus) ranking = 2;
    if (correctTarget === 6 - 1 && !correctBonus) ranking = 3;
    if (correctTarget === 6 - 2) ranking = 4;
    if (correctTarget === 6 - 3) ranking = 5;

    this.addCount(ranking);
  }

  addCount(ranking) {
    this.#result[ranking] += 1;
  }

  setIncome() {
    this.#income =
      this.#result[1] * 2000000000 +
      this.#result[2] * 30000000 +
      this.#result[3] * 1500000 +
      this.#result[4] * 50000 +
      this.#result[5] * 5000;
  }

  getIncome() {
    return this.#income;
  }
}

export default LottoModel;
