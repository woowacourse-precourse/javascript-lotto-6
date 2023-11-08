import LottoTicket from '../Model/LottoTicket.js';

class Comparator {
  #lottoTicket;
  #numOfWinningNumMatches;
  constructor() {
    this.#lottoTicket = LottoTicket.getInstance();
    this.#numOfWinningNumMatches = new Map();
  }

  get numOfWinningNumMatches() {
    return new Map(this.#numOfWinningNumMatches);
  }

  matchWinNumbersWithTicket() {
    const { ticket } = this.#lottoTicket;
    ticket.forEach((lotto) => {
      const matchesCount = this.countMatches(lotto.numbers);

      this.increaseMatchesCount(matchesCount);
      this.increaseBonusCount(matchesCount, lotto.numbers);
    });
    return this.#numOfWinningNumMatches;
  }

  countMatches(lotto) {
    const { winNums } = this.#lottoTicket;
    return winNums.filter((number) => lotto.includes(number)).length;
  }

  increaseMatchesCount(matchesCount) {
    this.#numOfWinningNumMatches.set(
      matchesCount,
      (this.#numOfWinningNumMatches.get(matchesCount) || 0) + 1,
    );
  }

  increaseBonusCount(matchesCount, lottoNums) {
    if (this.isBonusNumCase(matchesCount, lottoNums)) {
      this.#numOfWinningNumMatches.set(
        'bonus',
        (this.#numOfWinningNumMatches.get('bonus') || 0) + 1,
      );
    }
  }

  isBonusNumCase(matchesCount, lottoNum) {
    const { bonusNum } = this.#lottoTicket;
    return matchesCount === 5 && lottoNum.includes(bonusNum);
  }
}

export default Comparator;
