const PERCENTAGE_FACTOR = 100;
const DECIMAL_POINT = 1;

class Calculator {
  constructor() {
    this.revenue = "";
  }

  calculateRevenue(reward, amount) {
    const value = (reward / amount) * PERCENTAGE_FACTOR;
    this.revenue = value.toFixed(DECIMAL_POINT);
  }
}

export default Calculator;
