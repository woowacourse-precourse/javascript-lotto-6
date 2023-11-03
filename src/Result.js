class Result {
  constructor(lottos, userLotto, bonus) {
    this.result = [];
    this.calculateResult(lottos, userLotto, bonus);
  }

  calculateResult(lottos, userLotto, bonus) {
    lottos.forEach((lotto) => {
      const count = this.calculateEachLotto(lotto, userLotto);
      const isBonus = this.calculateBonus(lotto, bonus);
      this.saveEachResult(count, isBonus);
    });
  }

  calculateEachLotto(lotto, userLotto) {
    let count = 0;

    lotto.forEach((value) => {
      if (userLotto.includes(value)) {
        count += 1;
      }
    });

    return count;
  }

  calculateBonus(lotto, bonus) {
    return lotto.includes(bonus);
  }

  saveEachResult(count, isBonus) {
    const data = {
      count,
      isBonus,
    };

    this.result.push(data);
  }
}

export default Result;
