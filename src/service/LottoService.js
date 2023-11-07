import { LOTTO_RESULT } from '../constants/lotto.js';

class LottoService {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #getCountIncludesWinningNumbers(numbers) {
    return numbers.filter((number) => this.#winningNumbers.includes(String(number))).length;
  }

  #hasBonusNumber(numbers) {
    return numbers.find((number) => this.#bonusNumber === String(number));
  }

  #isSecond(numbers) {
    return !!this.#hasBonusNumber(numbers);
  }

  createLottoResult(lottos) {
    const { fifth, fourth, second, first } = LOTTO_RESULT;
    const [firstRank, secondRank, thirdRank, fourthRank, fifthRank] = Object.keys(LOTTO_RESULT);

    return lottos.map((lotto) => {
      const includesCount = this.#getCountIncludesWinningNumbers(lotto);

      if (fifth.includesCount === includesCount) return fifthRank;

      if (fourth.includesCount === includesCount) return fourthRank;

      if (second.includesCount === includesCount) {
        const isSecond = this.#isSecond(lotto);

        if (isSecond) return secondRank;

        return thirdRank;
      }

      if (first.includesCount === includesCount) return firstRank;
    });
  }
}

export default LottoService;
