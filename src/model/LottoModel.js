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
  #result = Array(6).fill(0);
  #income;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = price;
    this.#count = parseInt(price / SETTINGS.priceUnit);
  }

  #validatePrice(price) {
    if (Number.isNaN(price)) throw new Error(MESSAGES.error.notNumber);
    if (price % SETTINGS.priceUnit)
      throw new Error(MESSAGES.error.invalidPricUnit);
  }

  getPrice() {
    return this.#price;
  }

  getCount() {
    return this.#count;
  }

  generateLottos() {
    const { minimum, maximum } = SETTINGS.targetNumber;
    for (let count = 0; count < this.#count; count++) {
      const numbers = Random.pickUniqueNumbersInRange(count, minimum, maximum);
      this.#lottos.push(new Lotto(numbers));
    }
    return { price: this.#price, count: this.#count, lottos: this.#lottos };
  }

  setTargetNumbers(targetNumbers) {
    this.validateTargetNumbers(targetNumbers);
    this.#targetNumbers = targetNumbers;
  }

  validateTargetNumbers(numbers) {
    const { count, minimum, maximum } = SETTINGS.targetNumber;
    const numbersSet = new Set(numbers);

    if (numbers.length !== count)
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    if (numbers.length !== numbersSet.size)
      throw new Error(MESSAGES.error.notDuplicateTargetNumbers);
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
    if (number > maximum || number < minimum)
      throw new Error(MESSAGES.error.invalidRange);
    if (this.#targetNumbers.includes(number))
      throw Error(MESSAGES.error.notDuplicateTargetNumbers);
  };

  getBonusNumber() {
    return this.#bonusNumber;
  }

  judgeResult() {
    for (let lotto of this.#lottos) {
      const numbers = lotto.getNumbers();
      const [correctTarget, correctBonus] = this.calculateCorrect(numbers);
      this.calculateResult(correctTarget, correctBonus);
    }
    return this.#result;
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
    if (correctTarget === count) this.addResult(1);
    if (correctTarget === count - 1 && correctBonus) this.addResult(2);
    if (correctTarget === count - 1 && !correctBonus) this.addResult(3);
    if (correctTarget === count - 2) this.addResult(4);
    if (correctTarget === count - 3) this.addResult(5);
  }

  addResult(prize) {
    this.#result[prize] += 1;
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
