import { Console } from '@woowacourse/mission-utils';

class WinningStatistics {
  #winningThree = 0;
  #winningFour = 0;
  #winningFive = 0;
  #winningFiveBonus = 0;
  #winningSix = 0;
  #totalYield = 0;

  constructor(
    amount,
    purchaseLottoList,
    lottoWinningNumbers,
    bonusWinningNumber
  ) {
    this.purchaseLottoList = purchaseLottoList;
    this.lottoWinningNumbers = lottoWinningNumbers;
    this.bonusWinningNumber = bonusWinningNumber;
    this.amount = amount;
  }

  countWinningNumbers(lotto) {
    let count = 0;

    this.lottoWinningNumbers.forEach((winningNumber) => {
      if (lotto.includes(Number(winningNumber))) {
        count++;
      }
    });

    return count;
  }

  #countWinningThree(count) {
    if (count === 3) {
      return this.#winningThree++;
    }
  }

  #countWinningFour(count) {
    if (count === 4) {
      return this.#winningFour++;
    }
  }

  #countWinningFiveOrBonus(count, isBonus) {
    if (count === 5 && isBonus) {
      return this.#winningFiveBonus++;
    }

    if (count === 5 && !isBonus) {
      return this.#winningFive;
    }
  }

  #countWinningSix(count) {
    if (count === 6) {
      return this.#winningSix++;
    }
  }

  #isBonusNumber(lottoList) {
    return lottoList.includes(this.bonusWinningNumber);
  }

  totalCount() {
    for (let i = 0; i < this.purchaseLottoList.length; i++) {
      const WINNING_NUMBER_COUNT = this.countWinningNumbers(
        this.purchaseLottoList[i]
      );

      this.#countWinningThree(WINNING_NUMBER_COUNT);
      this.#countWinningFour(WINNING_NUMBER_COUNT);
      this.#countWinningFiveOrBonus(WINNING_NUMBER_COUNT, this.#isBonusNumber);
      this.#countWinningSix(WINNING_NUMBER_COUNT);
    }
  }

  calculate() {
    const TOTAL_WINNING_AMOUNT =
      this.#winningThree * 5000 +
      this.#winningFour * 50000 +
      this.#winningFive * 1500000 +
      this.#winningFiveBonus * 30000000 +
      this.#winningSix * 2000000000;

    const TOTAL_YIELD = Number(
      ((TOTAL_WINNING_AMOUNT / this.amount) * 100).toFixed(2)
    );

    this.#totalYield = TOTAL_YIELD;
  }

}

export default WinningStatistics;
