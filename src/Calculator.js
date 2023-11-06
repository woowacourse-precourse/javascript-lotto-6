const PERCENTAGE_FACTOR = 100;

class Calculator {
  constructor() {
    this.revenue = 0;
  }

  calculateRevenue(reward, amount) {
    this.revenue = (reward / amount) * PERCENTAGE_FACTOR;
  }
}

export default Calculator;
