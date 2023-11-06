import Generator from './Generator.js';

class User {
  constructor(purchaseAmout) {
    this.purchaseAmout = purchaseAmout / 1000;
    this.userNumbers = Generator.randomNumbersGenerator(this.purchaseAmout);

    this.results = {
      '3Equal': 0,
      '4Equal': 0,
      '5Equal': 0,
      '5EqualAndBonus': 0,
      '6Equal': 0,
    };
    this.profits = 0;
    this.yeild;
  }

  setResult(lottoCount, isBonus) {
    switch (lottoCount) {
      case 3:
        return (this.results['3Equal'] += 1);
      case 4:
        return (this.results['4Equal'] += 1);
      case 5:
        return isBonus
          ? (this.results['5EqualAndBonus'] += 1)
          : (this.results['5Equal'] += 1);
      case 6:
        return (this.results['6Equal'] += 1);
    }
  }

  setProfit(lottoCount, isBonus) {
    const profit = Generator.profitGenerator(lottoCount, isBonus);

    this.profits += profit;
  }
}

export default User;
