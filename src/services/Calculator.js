const PERCENTAGE_FACTOR = 100;

class Calculator {
  constructor() {
    this.revenue = "";
  }

  calculateRevenue(reward, amount) {
    const value = (reward / amount) * PERCENTAGE_FACTOR;
    this.revenue = value.toFixed(1);
  }
}

export default Calculator;
