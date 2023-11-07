import Utils from './Utils.js';

const RANKING = new Map([
  [5, '3개 일치'],
  [4, '4개 일치'],
  [3, '5개 일치'],
  [2, '5개 일치, 보너스 볼 일치'],
  [1, '6개 일치'],
]);

const MATCH_RANKING = new Map([
  [5, 3],
  [4, 4],
  [3, 5],
  [2, '보너스'],
  [1, 6],
]);

const WINNING_PRIZE = new Map([
  [5, 5000],
  [4, 50000],
  [3, 1500000],
  [2, 30000000],
  [1, 2000000000],
]);

const PRINT_STRING = {
  resultHeader: '당첨 통계\n---',
  prizeUnit: '원',
  matchNumberUnit: '개',
};

class WinningCalculator {
  #totalWinningNumbers;

  #issuedLottoNumbers;

  constructor(totalWinningNumbers, issuedLottoNumbers) {
    this.#totalWinningNumbers = totalWinningNumbers;
    this.#issuedLottoNumbers = issuedLottoNumbers;
    this.winnerList = new Map();
  }

  #analyzeWinner() {
    const winningNumbers = this.#totalWinningNumbers.get('당첨 번호');
    const bonusNumber = this.#totalWinningNumbers.get('보너스 번호');

    this.#issuedLottoNumbers.forEach((lotto) => {
      const matchCount = this.calculateMatchNumbers(winningNumbers, lotto);
      const isWinningBonus = this.isMatchBonusNumber(bonusNumber, lotto);

      this.#compileWinner(matchCount);
      this.#compileBonusWinner(matchCount, isWinningBonus);
    });
  }

  calculateMatchNumbers(numbers, targetNumbers) {
    const integratedNumbers = numbers.concat(targetNumbers);
    const nonDuplicated = new Set(integratedNumbers);
    const matchedCount = integratedNumbers.length - nonDuplicated.size();

    return matchedCount;
  }

  isMatchBonusNumber(bonusNumber, targetNumbers) {
    return targetNumbers.includes(bonusNumber);
  }

  #compileWinner(matchCount) {
    this.winnerList.set(matchCount, 1 + (this.winnerList.get(matchCount) ?? 0));
  }

  #compileBonusWinner(matchCount, isWinningBonus) {
    if (matchCount === 5 && isWinningBonus === true) {
      this.winnerList.set(matchCount, this.winnerList.get(matchCount) - 1);
      this.winnerList.set('보너스', 1 + (this.winnerList.get('보너스') ?? 0));
    }
  }

  informResult() {
    Utils.informUser(PRINT_STRING.resultHeader);

    RANKING.forEach((standard, rank) => {
      const prize = WINNING_PRIZE.get(rank);
      const matchCount = MATCH_RANKING.get(rank);
      const matchNumber = this.winnerList.get(matchCount);

      Utils.informUser(
        `${standard} (${prize.toLocaleString()}${
          PRINT_STRING.prizeUnit
        }) - ${matchNumber}${PRINT_STRING.matchNumberUnit}`,
      );
    });
  }
}

export default WinningCalculator;
