class Count {
  #lottos;
  #winningNumbers;
  #bonusNumbers;

  constructor(lottos, winningNumbers, bonusNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumbers = bonusNumbers;
    this.matchList = { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 };
    this.matchMessageList = [
      '3개 일치',
      '4개 일치',
      '5개 일치',
      '5개 일치, 보너스 볼 일치',
      '6개 일치',
    ];
    this.rewardList = [5000, 50000, 1500000, 30000000, 2000000000];
    this.totalReward = 0;
    this.compare();
  }

  compare() {
    this.#lottos.forEach((piece) => {
      let count = { winning: 0, bonus: 0 };
      piece.forEach((number) => {
        this.countWinning(number, count);
        this.countBonus(number, count);
      });

      this.countTotal(count);
    });
  }

  countWinning(number, count) {
    if (this.#winningNumbers.includes(number)) {
      count.winning += 1;
    }
  }

  countBonus(number, count) {
    if (number === this.#bonusNumbers) {
      count.bonus += 1;
    }
  }

  countTotal(count) {
    if (count.winning === 3) this.matchList.THREE += 1;
    if (count.winning === 4) this.matchList.FOUR += 1;
    if (count.winning === 5) {
      if (count.bonus === 1) this.matchList.FIVE_BONUS += 1;
      else this.matchList.FIVE += 1;
    }
    if (count.winning === 6) this.matchList.SIX += 1;
  }
}

export default Count;
