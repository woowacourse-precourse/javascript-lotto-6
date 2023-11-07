import { printArray } from "./Print";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  countMatchNumber(numbers) {
    return (12 - new Set([...targetNumbers, ...numbers]).size)
  }
  checkIsBonusCorrect(bonusNumber) {
    return this.#numbers.includes(bonusNumber) ? true : false
  }

  checkIsWinLottery(numbers, bonusNumber) {
    const isBonusCorrect = false;
    const matchNumber = this.countMatchNumber(numbers) === 5;
    (matchNumber === 5) && (isBonusCorrect = this.checkIsBonusCorrect(bonusNumber));
    return [matchNumber, isBonusCorrect]
  }
  printOwnNumber() {
    printArray(this.#numbers)
    return this
  }
}

export default Lotto;
