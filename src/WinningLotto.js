class WinningLotto {
  #rank = [];

  constructor(numbers, bonusNumbers, lottos, lottoCount) {
    this.compareAllLottoNumbers(numbers, bonusNumbers, lottos, lottoCount);
  }

  get getRank() {
    return this.#rank;
  }

  compareAllLottoNumbers(numbers, bonusNumbers, lottos, lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const sameNumberCount = this.compare(numbers, lottos[i]);
      const rank = this.ranking(bonusNumbers, lottos[i], sameNumberCount);
      this.#rank.push(rank);
    }
  }

  compare(numbers, lotto) {
    let sameNumberCount = 0;
    numbers.forEach((number) => {
      if (lotto.includes(Number(number))) {
        sameNumberCount++;
      }
    });
    return sameNumberCount;
  }

  ranking(bonusNumbers, lotto, sameNumberCount) {
    switch (sameNumberCount) {
      case 6:
        return 1;
      case 5:
        if (lotto.includes(bonusNumbers)) {
          return 2;
        }
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
    }
  }
}

export default WinningLotto;
