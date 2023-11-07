class ReturnRate {
  constructor(prize, payment) {
    this.prize = prize;
    this.payment = payment;
  }

  returnRate() {
    const rate = (this.prize / this.payment) * 100;
    return rate;
  }

  rounding() {
    const rate = this.returnRate();
    return parseFloat(rate.toFixed(2));
  }

  getReturnRateString() {
    const rateString = `${this.rounding()}%`;
    return rateString;
  }
}

export default ReturnRate;
