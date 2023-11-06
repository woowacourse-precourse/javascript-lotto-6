class Count {
  #lottos;
  #winningNumbers;
  #bonusNumbers;

  constructor(lottos, winningNumbers, bonusNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumbers = bonusNumbers;
    this.quantityList = { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 };
    this.numberList = ['3개 일치', '4개 일치', '5개 일치', '5개 일치, 보너스 불 일치', '6개 일치'];
    this.rewardList = ['5등', '4등', '3등', '2등', '1등'];
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
    if (count.winning === 3) this.quantityList.THREE += 1;
    if (count.winning === 4) this.quantityList.FOUR += 1;
    if (count.winning === 5) {
      if (count.bonus === 1) this.quantityList.FIVE_BONUS += 1;
      else this.quantityList.FIVE += 1;
    }
    if (count.winning === 6) this.quantityList.SIX += 1;
  }
}

export default Count;
