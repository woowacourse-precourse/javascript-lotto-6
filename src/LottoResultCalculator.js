import { MATCH } from './constant/index.js';

class LottoResultCalculator {
  #winningNumbers;
  #bonusNumber;
  #matchResult;

  constructor({ winningNumbers, bonusNumber }) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#matchResult = [];
  }

  checkLottoResult(lottoTickets) {
    this.#matchResult = this.#matchLottoBalls(lottoTickets);

    return {
      first: this.#getResultCount(MATCH.COUNT.SIX),
      second: this.#getResultCount(MATCH.COUNT.FIVE, MATCH.INCLUDE_BONUS),
      third: this.#getResultCount(MATCH.COUNT.FIVE, MATCH.EXCLUDE_BONUS),
      fourth: this.#getResultCount(MATCH.COUNT.FOUR),
      fifth: this.#getResultCount(MATCH.COUNT.THREE),
    };
  }

  #getResultCount(count, flag) {
    if (count === MATCH.COUNT.FIVE) {
      return this.#matchResult.filter(
        ({ sameCount, hasBonus }) => sameCount === count && hasBonus === flag
      ).length;
    }

    return this.#matchResult.filter(({ sameCount }) => sameCount === count)
      .length;
  }

  #matchLottoBalls(lottoTickets) {
    return lottoTickets.map(lottoTicket => ({
      lottoTicket,
      sameCount: this.#countSameNumber(lottoTicket),
      hasBonus: this.#hasBonusNumber(lottoTicket),
    }));
  }

  #countSameNumber(lottoTicket) {
    return lottoTicket
      .getNumbers()
      .reduce(
        (result, number) =>
          this.#winningNumbers.includes(number) ? result + 1 : result,
        0
      );
  }

  #hasBonusNumber(lottoTicket) {
    return lottoTicket.getNumbers().includes(this.#bonusNumber);
  }
}

export default LottoResultCalculator;
