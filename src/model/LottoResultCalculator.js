import { LOTTO_RANK } from '../constants/LottoOption.js';
import { DIVIDER } from '../constants/Symbol.js';

export default class LottoResultCalculator {
  #prizeTable = [0, 0, 0, 0, 0];

  #prizeTotal = 0;

  #winningNumbers;

  #winningBonusNumber;

  constructor(winningNumbers, winningBonusNumber) {
    this.#winningNumbers = winningNumbers.split(DIVIDER.comma).map(Number);
    this.#winningBonusNumber = Number(winningBonusNumber);
  }

  calculateResults(lottoNumbers) {
    lottoNumbers.forEach((lotto) => {
      const match = lotto.compare(
        this.#winningNumbers,
        this.#winningBonusNumber
      );

      if (match.mainNumber === LOTTO_RANK.second.mainNumber) {
        return this.#calculateSecondOrThirdPrize(match);
      }

      return this.#calculatePrize(match);
    });

    return { prizeAmount: this.#prizeTable, prizeTotal: this.#prizeTotal };
  }

  #calculatePrize(match) {
    Object.values(LOTTO_RANK).forEach((rank, idx) => {
      if (rank.mainNumber === match.mainNumber) {
        this.#prizeTable[idx] += 1;
        this.#prizeTotal += rank.prizeValue;
      }
    });
  }

  #calculateSecondOrThirdPrize(match) {
    Object.values(LOTTO_RANK).forEach((rank, idx) => {
      if (
        match.mainNumber === rank.mainNumber &&
        match.bonusNumber === rank.bonusNumber
      ) {
        this.#prizeTable[idx] += 1;
        this.#prizeTotal += rank.prizeValue;
      }
    });
  }
}
