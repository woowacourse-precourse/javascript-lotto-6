import LottoTicket from '../Model/LottoTicket';

const lottoTicket = LottoTicket.getInstance();

function isBonusNumCase(matchesCount, lottoNum) {
  const { bonusNum } = lottoTicket;
  return matchesCount === 5 && lottoNum.includes(bonusNum);
}

class Comparator {
  constructor() {
    this.numOfWinningNumMatches = new Map();
  }

  matchWinNumbersWithTicket() {
    const { ticket } = lottoTicket;
    ticket.forEach((lotto) => {
      const matchesCount = this.countMatches(lotto.numbers);

      this.increaseMatchesCount(matchesCount);
      this.increaseBonusCount(matchesCount, lotto.numbers);
    });
    return this.numOfWinningNumMatches;
  }

  countMatches(lotto) {
    const { winNums } = lottoTicket;
    return winNums.filter((number) => lotto.includes(number)).length;
  }

  increaseMatchesCount(matchesCount) {
    this.numOfWinningNumMatches.set(
      matchesCount,
      (this.numOfWinningNumMatches.get(matchesCount) || 0) + 1,
    );
  }

  increaseBonusCount(matchesCount, lottoNums) {
    if (isBonusNumCase(matchesCount, lottoNums)) {
      this.numOfWinningNumMatches.set(
        'bonus',
        (this.numOfWinningNumMatches.get('bonus') || 0) + 1,
      );
    }
  }
}

export default Comparator;
