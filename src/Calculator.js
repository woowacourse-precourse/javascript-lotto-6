class Calculator {
  constructor(reward, amount) {
    this.reward = reward;
    this.amount = amount;
    this.revenue = 0.0;
    this.calculateRevenue();
  }

  calculateRevenue() {
    this.revenue = (this.reward / this.amount) * 100;
  }
}

export default Calculator;
