import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
    this.winningNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    this.isAllNumbersInRange(numbers);

    return numbers;
  }

  isAllNumbersInRange(numbers) {
    const isAllNumbersInRange = numbers.every(
      (number) => number >= 1 && number <= 45
    );

    if (!isAllNumbersInRange)
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");

    return numbers;
  }

  isDuplicateNumber(bonusNumber) {
    const hasNumber = this.winningNumber.some(
      (number) => number === bonusNumber
    );

    if (hasNumber)
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");

    return bonusNumber;
  }

  setWinningNumber() {
    this.winningNumber = this.#validate(this.#numbers);
  }

  setBonusNumber(bonusNumber) {
    this.bonusNumber = this.isDuplicateNumber(bonusNumber);
  }

  getSortedNumbers() {
    const sortedNumbers = this.#numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  displayNumbers() {
    const lotto = this.getSortedNumbers();

    const lottoString = `[${lotto.join(", ")}]`;
    MissionUtils.Console.print(`${lottoString}`);
  }
}

export default Lotto;
