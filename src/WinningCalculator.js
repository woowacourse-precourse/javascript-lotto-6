import Utils from './Utils.js';

const NUMBER_NAME = {
  winning: '당첨',
  bonus: '보너스',
};

const BONUS_OPTIONS = {
  matchCount: 5,
};

const MATCH_RANKING = new Map([
  [3, '5등'],
  [4, '4등'],
  [5, '3등'],
  [NUMBER_NAME.bonus, '2등'],
  [6, '1등'],
]);

const RANKING = new Map([
  ['5등', `3개 일치`],
  ['4등', `4개 일치`],
  ['3등', `5개 일치`],
  ['2등', `5개 일치, 보너스 볼 일치`],
  ['1등', `6개 일치`],
]);

const WINNING_PRIZE = new Map([
  ['5등', 5000],
  ['4등', 50000],
  ['3등', 1500000],
  ['2등', 30000000],
  ['1등', 2000000000],
]);

const PRINT_STRING = {
  resultHeader: '당첨 통계\n---',
  prizeUnit: '원',
  matchCountUnit: '개',
};

class WinningCalculator {
  #totalWinningNumbers;

  #issuedLottoNumbers;

  constructor(totalWinningNumbers, issuedLottoNumbers) {
    this.#totalWinningNumbers = totalWinningNumbers;
    this.#issuedLottoNumbers = issuedLottoNumbers;
    this.winnerList = new Map();
    this.#analyzeWinner();
  }

  #analyzeWinner() {
    const winningNumbers = this.#totalWinningNumbers.get(NUMBER_NAME.winning);
    const bonusNumber = this.#totalWinningNumbers.get(NUMBER_NAME.bonus);

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
    const matchedCount = integratedNumbers.length - nonDuplicated.size;

    return matchedCount;
  }

  isMatchBonusNumber(bonusNumber, targetNumbers) {
    return targetNumbers.includes(bonusNumber);
  }

  // 끝
  #compileWinner(matchCount) {
    const rank = MATCH_RANKING.get(matchCount);
    this.winnerList.set(rank, 1 + (this.winnerList.get(rank) ?? 0));
  }

  #compileBonusWinner(matchCount, isWinningBonus) {
    const rank = MATCH_RANKING.get(matchCount);
    const bonusRank = MATCH_RANKING.get(NUMBER_NAME.bonus);

    if (matchCount === BONUS_OPTIONS.matchCount && isWinningBonus) {
      this.winnerList.set(rank, this.winnerList.get(rank) - 1);
      this.winnerList.set(bonusRank, 1 + (this.winnerList.get(bonusRank) ?? 0));
    }
  }

  informResult() {
    Utils.informUser(PRINT_STRING.resultHeader);

    RANKING.forEach((standard, rank) => {
      const prize = WINNING_PRIZE.get(rank);
      const matchCount = this.winnerList.get(rank) ?? 0;

      Utils.informUser(
        `${standard} (${prize.toLocaleString()}${
          PRINT_STRING.prizeUnit
        }) - ${matchCount}${PRINT_STRING.matchCountUnit}`,
      );
    });
  }
}

export default WinningCalculator;
