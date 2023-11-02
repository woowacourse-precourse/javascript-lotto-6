import MESSAGES from "../constants/messages";
import SETTINGS from "../constants/settings";
import Lotto from "./Lotto";
import { Random } from "@woowacourse/mission-utils";

class LottoModel {
  constructor() {
    this.totalPrice = null;
    this.totalCount = null;
    this.targetNumbers = [];
    this.lottos = [];
    this.bonusNumber = null;
    this.result = [0, 0, 0, 0, 0, 0];
    this.income = null;
  }

  setPriceInfo(totalPrice) {
    this.validateTotalPrice(totalPrice);
    this.totalPrice = totalPrice;
    this.totalCount = parseInt(totalPrice / SETTINGS.priceUnit);
  }

  validateTotalPrice(price) {
    if (Number.isNaN(price)) {
      throw new Error(MESSAGES.error.notNumber);
    }
    if (price % SETTINGS.priceUnit) {
      throw new Error(MESSAGES.error.invalidPriceUnit);
    }
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
    const numbersSet = new Set(numbers);
    if (numbers.length !== SETTINGS.targetNumber.count)
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    if (numbers.length !== numbersSet.size)
      throw new Error(MESSAGES.error.notDuplicateTargetNumbers);
    if (numbers.some((number) => Number.isNaN(number)))
      throw new Error(MESSAGES.error.notNumber);
  }

  getTargetNumbers() {
    return this.targetNumbers;
  }

  setLottos() {
    for (let count = 0; count < this.totalCount; count++) {
      const numbers = Random.pickUniqueNumbersInRange(
        SETTINGS.targetNumber.minimum,
        SETTINGS.targetNumber.maximum,
        SETTINGS.targetNumber.count
      );
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
    }
  }

  getLottos() {
    return this.lottos;
  }

  getLottosData = () => {
    const lottosData = this.lottos.map(
      (lotto) => `[${lotto.getNumbers().join(", ")}]`
    );
    return lottosData;
  };

  setBonusNumber(bonusNumber) {
    this.validateBonusNumbers(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validateBonusNumbers = (number) => {
    if (Number.isNaN(number)) throw new Error(MESSAGES.error.notNumber);
  };

  getBonusNumber() {
    return this.bonusNumber;
  }

  judgeResult() {
    for (let lotto of this.lottos) {
      const numbers = lotto.getNumbers();
      const [correctTarget, correctBonus] = this.calculateCorrect(numbers);
      this.makeResult(correctTarget, correctBonus);
    }
  }

  calculateCorrect(numbers) {
    let corretTarget = 0;
    let corretBonus = 0;
    for (let targetNumber of this.targetNumbers) {
      if (numbers.includes(Number(targetNumber))) corretTarget += 1;
    }
    if (numbers.includes(Number(this.bonusNumber))) corretBonus += 1;
    return [corretTarget, corretBonus];
  }

  makeResult(correctTarget, correctBonus) {
    if (correctTarget == SETTINGS.targetNumber.count) this.result[1] += 1;
    if (correctTarget == SETTINGS.targetNumber.count - 1 && correctBonus)
      this.result[2] += 1;
    if (correctTarget == SETTINGS.targetNumber.count - 1 && !correctBonus)
      this.result[3] += 1;
    if (correctTarget == SETTINGS.targetNumber.count - 2) this.result[4] += 1;
    if (correctTarget == SETTINGS.targetNumber.count - 3) this.result[5] += 1;
  }

  getResult() {
    return this.result;
  }

  calculateIncome() {
    this.income =
      this.result[5] * SETTINGS.income.fifth +
      this.result[4] * SETTINGS.income.fourth +
      this.result[3] * SETTINGS.income.third +
      this.result[2] * SETTINGS.income.second +
      this.result[1] * SETTINGS.income.first;
  }

  getIncomeData() {
    return ((this.income / this.totalPrice) * 100).toLocaleString("ko-KR", {
      minimumFractionDigits: SETTINGS.digit,
      maximumFractionDigits: SETTINGS.digit,
    });
  }
}

export default LottoModel;
