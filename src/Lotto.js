import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
    this.winningNumber = [];
    this.WINNINGS = [5000, 50000, 1500000, 2000000000, 30000000];
    this.TEXT = [
      `3개 일치 (${this.WINNINGS[0].toLocaleString()}원)`,
      `4개 일치 (${this.WINNINGS[1].toLocaleString()}원)`,
      `5개 일치 (${this.WINNINGS[2].toLocaleString()}원)`,
      `6개 일치 (${this.WINNINGS[3].toLocaleString()}원)`,
      `5개 일치, 보너스 볼 일치 (${this.WINNINGS[4].toLocaleString()}원)`,
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

  setWinningNumber(winningNumberArray) {
    this.winningNumber = this.#validate(winningNumberArray);
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
      this.hasMathedCountConditionalSentence(matchedCount, hasBonus);
    }
  }

  hasMathedCountConditionalSentence(matchedCount, hasBonus) {
    if (matchedCount === 5 && hasBonus) {
      this.hasBonusConditionalSentence(matchedCount);
      return;
    }
    this.matchingCounts.set(
      matchedCount,
      (this.matchingCounts.get(matchedCount) || 0) + 1
    );
  }

  hasBonusConditionalSentence(matchedCount) {
    this.matchingCounts.set(
      "bonus",
      (this.matchingCounts.get(matchedCount) || 0) + 1
    );
    return;
  }

  calculateMatchingStatistics() {
    const result = [];

    for (const [grade, count] of this.matchingCounts) {
      let index = !this.TEXT[grade - 3] ? 4 : grade - 3;

      result.push(`${this.TEXT[index]} - ${count}개`);
    }
    return result.sort();
  }

  calculateTotalPrice() {
    const totalPrice = [...this.matchingCounts.values()].reduce(
      (acc, cur, idx) => acc + cur * this.WINNINGS[idx],
      0
    );
    return totalPrice;
  }

  calculateMatchingRate(purchasePrice) {
    const totalPrice = this.calculateTotalPrice();
    const profit = totalPrice - purchasePrice;
    const profitRate = (profit / purchasePrice) * 100;
    const roundedProfitRate = profitRate.toFixed(1);

    MissionUtils.Console.print(`총 수익률은 ${roundedProfitRate}%입니다.`);
  }

  displayNumbers() {
    const lotto = this.getSortedNumbers();

    const lottoString = `[${lotto.join(", ")}]`;
    return lottoString;
  }
}

export default Lotto;
