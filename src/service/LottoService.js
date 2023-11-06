import { LOTTO, LOTTO_RANK } from '../constants/lotto.js';

class LottoService {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  compareLottoNumbers(numbers) {
    const compareLotto = numbers.filter((number) => this.#winningNumbers.includes(number));
    return {
      isWinning: compareLotto.length >= LOTTO.minMatchCount,
      matchCount: compareLotto.length,
    };
  }

  isSecondRank(numbers) {
    const isContainBonusNumber = numbers.find((number) => this.#bonusNumber === number);
    return isContainBonusNumber;
  }

  getRank(matchCount, isSecondRank) {
    switch (matchCount) {
      case 3:
        return LOTTO_RANK.fifth;
      case 4:
        return LOTTO_RANK.fourth;
      case 5:
        if (isSecondRank) return LOTTO_RANK.second;
        return LOTTO_RANK.third;
      case 6:
        return LOTTO_RANK.first;
      default:
        return LOTTO_RANK.none;
    }
  }
}

export default LottoService;
