class Game {
  #winningNumbers;
  #bonusNumber;
  #lottos;

  constructor(winningNumbers, bonusNumber, lottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos;
  }

  play() {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
    };

    this.#lottos.forEach((lotto) => {
      const count = this.#getMatchCount(lotto);
      const bonusMatch = this.#isBonusMatch(lotto);

      this.#updateResults(results, count, bonusMatch);
    });

    return results;
  }

  #getMatchCount(lotto) {
    const lottoNumbers = lotto.getNumbers();
    return lottoNumbers.reduce(
      (count, number) =>
        this.#winningNumbers.includes(number) ? count + 1 : count,
      0,
    );
  }

  #isBonusMatch(lotto) {
    return lotto.getNumbers().includes(this.#bonusNumber);
  }

  #updateResults(results, count, bonusMatch) {
    if (count === 5 && bonusMatch) {
      results['5+']++;
    } else if (count >= 3) {
      results[count]++;
    }
  }
}

export default Game;
