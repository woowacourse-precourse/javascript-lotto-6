import MESSAGES from "../constants/messages";
import SETTINGS from "../constants/settings";
import Lotto from "../Lotto";
import { Random } from "@woowacourse/mission-utils";

class LottoModel {
  #price;
  #count;
  #lottos = [];

  #targetNumbers = [];
  #bonusNumber;
  #result = Array(SETTINGS.targetNumber.count).fill(SETTINGS.default);
  #income;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = price;
    this.#count = parseInt(price / SETTINGS.priceUnit);
  }

  #validatePrice(price) {
    if (Number.isNaN(price)) throw new Error(MESSAGES.error.notNumber);
    if (price % SETTINGS.priceUnit) {
      throw new Error(MESSAGES.error.invalidPricUnit);
    }
  }

  getPrice() {
    return this.#price;
  }

  getCount() {
    return this.#count;
  }

  buyLottos() {
    const { minimum, maximum } = SETTINGS.targetNumber;

    for (let count = 0; count < this.#count; count++) {
      const numbers = Random.pickUniqueNumbersInRange(count, minimum, maximum);
      this.#lottos.push(new Lotto(numbers));
    }

    return [this.#price, this.#count, this.#lottos];
  }

  setTargetNumbers(numbers) {
    this.validateTargetNumbers(numbers);
    this.#targetNumbers = numbers;
  }

  validateTargetNumbers(numbers) {
    const { count, minimum, maximum } = SETTINGS.targetNumber;
    const numbersSet = new Set(numbers);

    if (numbers.length !== count) {
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    }
    if (numbers.length !== numbersSet.size) {
      throw new Error(MESSAGES.error.notDuplicateTargetNumbers);
    }
    if (numbers.some((number) => number > maximum || number < minimum)) {
      throw new Error(MESSAGES.error.invalidRange);
    }
  }

  getTargetNumbers() {
    return this.#targetNumbers;
  }

  setBonusNumber(number) {
    this.validateBonusNumbers(number);
    this.#bonusNumber = number;
  }

  validateBonusNumbers = (number) => {
    const { minimum, maximum } = SETTINGS.targetNumber;

    if (number > maximum || number < minimum) {
      throw new Error(MESSAGES.error.invalidRange);
    }
    if (this.#targetNumbers.includes(number)) {
      throw Error(MESSAGES.error.notDuplicateTargetNumbers);
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

    for (let targetNumber of this.#targetNumbers) {
      if (numbers.includes(Number(targetNumber))) correctTarget += 1;
    }
    return [correctTarget, correctBonus];
  }

  calculateResult(correctTarget, correctBonus) {
    const { count } = SETTINGS.targetNumber;
    let ranking = 0;

    if (correctTarget === count) ranking = 1;
    if (correctTarget === count - 1 && correctBonus) ranking = 2;
    if (correctTarget === count - 1 && !correctBonus) ranking = 3;
    if (correctTarget === count - 2) ranking = 4;
    if (correctTarget === count - 3) ranking = 5;

    this.addCount(ranking);
  }

  addCount(ranking) {
    this.#result[ranking] += 1;
  }

  setIncome() {
    const { first, second, third, fourth, fifth } = SETTINGS.income;

    this.#income =
      this.#result[1] * first +
      this.#result[2] * second +
      this.#result[3] * third +
      this.#result[4] * fourth +
      this.#result[5] * fifth;
  }

  getIncome() {
    return this.#income;
  }
}

export default LottoModel;
