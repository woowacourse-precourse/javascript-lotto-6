import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
    this.winningNumber = [];
    this.TEXT = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "6개 일치 (2,000,000,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
    ];
    this.matchingCounts = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      ["bonus", 0],
    ]);
  }

  #validate(numbers) {
    // TODO: 예외처리
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    this.checkAllNumbersInRange(numbers);

    return numbers;
  }

  checkAllNumbersInRange(numbers) {
    const isAllNumbersInRange = numbers.every(
      (number) => number >= 1 && number <= 45
    );

    if (!isAllNumbersInRange)
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");

    return numbers;
  }

  checkDuplicateNumber(bonusNumber) {
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
    this.bonusNumber = this.checkDuplicateNumber(bonusNumber);
  }

  getSortedNumbers() {
    const sortedNumbers = this.#numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  updateMatchingCount(numbers) {
    const matchingNumbers = numbers.filter((number) =>
      this.winningNumber.includes(number.toString())
    );
    const matchedCount = matchingNumbers.length;
    const hasBonus = numbers.some((number) => number === +this.bonusNumber);

    if (matchedCount >= 3 && matchedCount <= 6) {
      if (matchedCount === 5 && hasBonus) {
        this.matchingCounts.set(
          "bonus",
          (this.matchingCounts.get(matchedCount) || 0) + 1
        );
      } else
        this.matchingCounts.set(
          matchedCount,
          (this.matchingCounts.get(matchedCount) || 0) + 1
        );
    }
  }

  calculateMatchingStatistics() {
    const result = [];
    MissionUtils.Console.print("\n당첨 통계\n---");

    for (const [grade, count] of this.matchingCounts) {
      let index = !this.TEXT[grade - 3] ? 4 : grade - 3;

      result.push(`${this.TEXT[index]} - ${count}개`);
    }
    return result.sort();
  }

  displayNumbers() {
    const lotto = this.getSortedNumbers();

    const lottoString = `[${lotto.join(", ")}]`;
    return lottoString;
  }
}

export default Lotto;
