import MESSAGES from "../constants/messages";
import SETTINGS from "../constants/settings";
import Lotto from "../Lotto";
import { Random } from "@woowacourse/mission-utils";

class LottoModel {
  constructor() {
    this.totalPrice = null;
    this.totalCount = null;
    this.targetNumbers = [];
    this.lottos = [];
    this.bonusNumber = null;
    this.result = Array(6).fill(0);
    this.income = null;
  }

  setPriceInfo(totalPrice) {
    this.validateTotalPrice(totalPrice);
    this.totalPrice = totalPrice;
    this.totalCount = parseInt(totalPrice / SETTINGS.priceUnit);
  }

  validateTotalPrice(price) {
    if (Number.isNaN(price)) throw new Error(MESSAGES.error.notNumber);
    if (price % SETTINGS.priceUnit)
      throw new Error(MESSAGES.error.invalidPricUnit);
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getTotalCount() {
    return this.totalCount;
  }

  setTargetNumbers(targetNumbers) {
    this.validateTargetNumbers(targetNumbers);
    this.targetNumbers = targetNumbers;
  }

  validateTargetNumbers(numbers) {
    const { count, minimum, maximum } = SETTINGS.targetNumber;
    const numbersSet = new Set(numbers);

    if (numbers.length !== count)
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    if (numbers.length !== numbersSet.size)
      throw new Error(MESSAGES.error.notDuplicateTargetNumbers);
    if (
      numbers.some((number) =>
        this.isInvalidNumberRange(number, minimum, maximum)
      )
    ) {
      throw new Error(MESSAGES.error.invalidRange);
    }
  }

  isInvalidNumberRange(number, minimum, maximum) {
    return number > maximum || number < minimum;
  }

  getTargetNumbers() {
    return this.targetNumbers;
  }

  setLottos() {
    const { minimum, maximum } = SETTINGS.targetNumber;
    for (let count = 0; count < this.totalCount; count++) {
      const numbers = Random.pickUniqueNumbersInRange(count, minimum, maximum);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
    }
  }

  getLottos() {
    return this.lottos;
  }

  getLottosData = () => {
    return this.lottos.map((lotto) => `[${lotto.getNumbers().join(", ")}]`);
  };

  setBonusNumber(bonusNumber) {
    this.validateBonusNumbers(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validateBonusNumbers = (number) => {
    const { minimum, maximum } = SETTINGS.targetNumber;
    if (this.isInvalidNumberRange(number, minimum, maximum)) {
      throw new Error(MESSAGES.error.invalidRange);
    }
    if (this.getTargetNumbers().includes(number))
      throw Error(MESSAGES.error.notDuplicateTargetNumbers);
  };

  getBonusNumber() {
    return this.bonusNumber;
  }

  judgeResult() {
    for (let lotto of this.lottos) {
      const numbers = lotto.getNumbers();
      const [correctTarget, correctBonus] = this.calculateCorrect(numbers);
      this.calculateResult(correctTarget, correctBonus);
    }
  }

  calculateCorrect(numbers) {
    let correctTarget = 0;
    let correctBonus = numbers.includes(Number(this.bonusNumber)) ? 1 : 0;
    for (let targetNumber of this.targetNumbers) {
      if (numbers.includes(Number(targetNumber))) correctTarget += 1;
    }
    return [correctTarget, correctBonus];
  }

  calculateResult(correctTarget, correctBonus) {
    const { count } = SETTINGS.targetNumber;

    if (correctTarget === count) this.result[1] += 1;
    if (correctTarget === count - 1 && correctBonus) this.result[2] += 1;
    if (correctTarget === count - 1 && !correctBonus) this.result[3] += 1;
    if (correctTarget === count - 2) this.result[4] += 1;
    if (correctTarget === count - 3) this.result[5] += 1;
  }

  getResult() {
    return this.result;
  }

  setIncome() {
    const { first, second, third, fourth, fifth } = SETTINGS.income;
    this.income =
      this.result[1] * first +
      this.result[2] * second +
      this.result[3] * third +
      this.result[4] * fourth +
      this.result[5] * fifth;
  }

  getIncome() {
    return this.income;
  }

  getIncomeData() {
    return ((this.income / this.totalPrice) * 100).toLocaleString();
  }
}

export default LottoModel;
