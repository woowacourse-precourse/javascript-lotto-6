class CompareLottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = this.#splitedNumbers(winningNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  compareLottoNumbers(lottos) {
    const matchedLottos = lottos.map((lotto) => {
      return [this.#countMatchedNumbers(lotto), this.#isBonusNumber(lotto)];
    });

    const result = this.#formatMatchedNumbers(this.#filterMatchedNumbers(matchedLottos));
    return result;
  }

  #filterMatchedNumbers(matchedLottos) {
    const result = Array.from({ length: 5 }).fill(0);
    matchedLottos.forEach(([matchedCount, hasBonus]) => {
      if (matchedCount < 3) return;
      if (matchedCount === 3) result[0] += 1;
      if (matchedCount === 4) result[1] += 1;
      if (matchedCount === 5 && !hasBonus) result[2] += 1;
      if (matchedCount === 5 && hasBonus) result[3] += 1;
      if (matchedCount === 6) result[4] += 1;
    });

    return result;
  }

  #formatMatchedNumbers(filterdMatchedNumbers) {
    const prizeList = [5000, 50000, 1500000, 30000000, 2000000000];
    const matchCriteriaList = [3, 4, 5, 5, 6];
    const result = prizeList.map((prize, index) => ({
      prize,
      matchCriteria: matchCriteriaList[index],
      matchedNumber: filterdMatchedNumbers[index],
    }));

    return result;
  }

  #splitedNumbers(numbers) {
    return numbers.split(',').map((number) => Number(number));
  }

  #countMatchedNumbers(lotto) {
    const result = this.#winningNumbers.reduce((totalMatchedCount, winningNumber) => {
      return lotto.includes(winningNumber) ? totalMatchedCount + 1 : totalMatchedCount;
    }, 0);

    return result;
  }

  #isBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }
}

export default CompareLottoMachine;
