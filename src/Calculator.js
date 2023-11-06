const PERCENTAGE_FACTOR = 100;

class Calculator {
  constructor(reward, amount) {
    this.reward = reward;
    this.amount = amount;
    this.revenue = this.calculateRevenue();
  }

  calculateRevenue() {
    return (this.reward / this.amount) * PERCENTAGE_FACTOR;
  }
}

export default Calculator;
