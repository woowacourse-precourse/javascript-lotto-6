import WinningLotto from './WinningLotto.js';

class WinningMachine {
  #prizeStructure = {
    match3: 0,
    match4: 0,
    match5: 0,
    match5Bonus: 0,
    match6: 0,
  };

  generateWinningLotto({ numbers, bonusNumber }) {
    return new WinningLotto({ numbers, bonusNumber });
  }

  calculateStatistics({ lotto, winningLotto }) {
    const lottoNumber = lotto.getNumbers();
    const winningNumber = winningLotto.getNumbers();

    const hasBonus = lotto.isInclude(winningLotto.getBonusNumber());
    const matchCount = this.#evaluateMatch({ lottoNumber, winningNumber });
    this.#updatePrizeStructure(matchCount, hasBonus);
  }

  #evaluateMatch({ lottoNumber, winningNumber }) {
    return lottoNumber.filter((number) => winningNumber.includes(number))
      .length;
  }

  #updatePrizeStructure(matchCount, hasBonus) {
    if (matchCount === 5 && hasBonus) {
      this.#prizeStructure.match5Bonus += 1;
      return;
    }

    const matchKey = `match${matchCount}`;
    if (Object.prototype.hasOwnProperty.call(this.#prizeStructure, matchKey)) {
      this.#prizeStructure[matchKey] += 1;
    }
  }

  getPrizeStructure() {
    return { ...this.#prizeStructure };
  }
}

export default WinningMachine;
