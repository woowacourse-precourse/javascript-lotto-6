import Generator from './Generator.js';

class User {
  constructor(purchaseAmout) {
    this.purchaseAmout = purchaseAmout;
    this.purchaseNumber = purchaseAmout / 1000;
    this.userNumbersList = Generator.randomNumbersGenerator(
      this.purchaseNumber
    );

    this.results = {
      threeEqual: 0,
      fourEqual: 0,
      fiveEqual: 0,
      fiveEqualAndBonus: 0,
      sixEqual: 0,
    };
    this.profits = 0;
    this.yeild;
  }

  setResult(lottoCount, isBonus) {
    switch (lottoCount) {
      case 3:
        return (this.results['threeEqual'] += 1);
      case 4:
        return (this.results['fourEqual'] += 1);
      case 5:
        return isBonus
          ? (this.results['fiveEqualAndBonus'] += 1)
          : (this.results['fiveEqual'] += 1);
      case 6:
        return (this.results['sixEqual'] += 1);
    }
  }

  setProfit(lottoCount, isBonus) {
    const profit = Generator.profitGenerator(lottoCount, isBonus);

    this.profits += profit;
  }

  setYeild() {
    this.yeild = ((this.profits / this.purchaseAmout) * 100).toFixed(1);
  }
}

export default User;
