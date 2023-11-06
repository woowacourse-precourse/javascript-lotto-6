class CompareLottoMachine {
  #winningNumber;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumber = this.#splitedNumbers(winningNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  compareLottoNumbers(lottos) {
    const matchedLottos = lottos.map((lotto) => {
      return [this.#countCommonNumbers(lotto), this.#checkBonusNumber(lotto)];
    });

    const filterd = this.#filterNumbers(matchedLottos);
    const formatted = this.#formatted(filterd);
    return formatted;
  }

  #filterNumbers(matchedLottos) {
    const result = Array.from({ length: 5 }).fill(0);

    matchedLottos.forEach(([matchedLength, hasBonus]) => {
      if (matchedLength < 3) return;
      if (matchedLength === 3) result[0] += 1;
      if (matchedLength === 4) result[1] += 1;
      if (matchedLength === 5 && !hasBonus) result[2] += 1;
      if (matchedLength === 5 && hasBonus) result[3] += 1;
      if (matchedLength === 6) result[4] += 1;
    });

    return result;
  }

  #formatted(filterd) {
    const dataBase = [5000, 50000, 1500000, 30000000, 2000000000];

    const result = dataBase.reduce((format, prize, index) => {
      format[prize] = filterd[index];
      return format;
    }, {});

    return result;
  }

  #splitedNumbers(numbers) {
    return numbers.split(',').map((number) => Number(number));
  }

  #countCommonNumbers(lotto) {
    const result = this.#winningNumber.reduce((acc, number) => {
      return lotto.includes(number) ? acc + 1 : acc;
    }, 0);

    return result;
  }

  #checkBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }
}

export default CompareLottoMachine;
