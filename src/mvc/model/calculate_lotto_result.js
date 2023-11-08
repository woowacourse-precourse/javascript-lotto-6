class CalculateLottoResult {
  #randomLotto;
  #winningNum;
  #bonusNum;
  #lottoResult = {
    grade: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    },
    revenue: {
      earningsRate: 0,
    },
  };

  constructor(RANDOM_LOTTO, WINNING_NUM, BONUS_NUM) {
    this.#randomLotto = RANDOM_LOTTO;
    this.#winningNum = WINNING_NUM;
    this.#bonusNum = BONUS_NUM;
  }

  #numberOfWinning(lotto) {
    const CORRECT_NUM = lotto
      .reduce((acc, cur) => (this.#winningNum.includes(cur) ? acc + 1 : acc), 0);
    this.#determineGrade(CORRECT_NUM, lotto);
  }

  #determineGrade(CORRECT_NUM, lotto) {
    switch (CORRECT_NUM) {
      case 3: this.#lottoResult.grade.fifth += 1;
        break;
      case 4: this.#lottoResult.grade.fourth += 1;
        break;
      case 5: this.#correctBonusNum(lotto);
        break;
      case 6: this.#lottoResult.grade.first += 1;
        break;
    }
  }

  #correctBonusNum(lotto) {
    if (lotto.includes(this.#bonusNum)) {
      this.#lottoResult.grade.second += 1;
      return;
    }
    this.#lottoResult.grade.third += 1;
  }

  #calculateTotalWinningAmount() {
    const GRADE_VALUE = Object.values(this.#lottoResult.grade);
    const TOTAL_WINNING_AMOUNT = [2000000000, 30000000, 1500000, 50000, 5000]
      .reduce((acc, cur, idx) => (acc + GRADE_VALUE[idx] * cur), 0);
    return TOTAL_WINNING_AMOUNT;
  }

  #calculateEarningsRate(PURCHASE_AMOUNT, TOTAL_WINNING_AMOUNT) {
    const EARNINGS_RATE = (TOTAL_WINNING_AMOUNT / PURCHASE_AMOUNT) * 100;
    return EARNINGS_RATE.toFixed(1);
  }

  get lottoResult() {
    this.#randomLotto.forEach((lotto) => this.#numberOfWinning(lotto));
    const PURCHASE_AMOUNT = this.#randomLotto.length * 1000;
    const TOTAL_WINNING_AMOUNT = this.#calculateTotalWinningAmount();
    const EARNINGS_RATE = this.#calculateEarningsRate(PURCHASE_AMOUNT, TOTAL_WINNING_AMOUNT);
    this.#lottoResult.revenue.earningsRate = EARNINGS_RATE;
    return this.#lottoResult;
  }
}

export default CalculateLottoResult;
