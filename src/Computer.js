class Computer {
  #winnerNumbers;
  #bonusNumber;
  #prizeResult;

  constructor(winnnersNumbers, bonusNumber) {
    this.#winnerNumbers = winnnersNumbers;
    this.#bonusNumber = bonusNumber;
    this.#prizeResult = {
      [FIRST]: 0,
      [SECOND]: 0,
      [THIRD]: 0,
      [FOURTH]: 0,
      [FIFTH]: 0,
    };
  }

  getPrizeResult(lottos) {
    const mathResult = lottos.map((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const mathNumbers = this.#winnerNumbers.filter((number) => lottoNumbers.includes(number));
      const mathNumber = mathNumbers.length;
      const isMatchBonus = lottoNumbers.includes(this.#bonusNumber);

      return { mathNumber, isMatchBonus };
    });

    return mathResult;
  }
}

export default Computer;
