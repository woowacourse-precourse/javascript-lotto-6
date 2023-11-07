import LottoConstants from '../constants/LottoConstants.js';

class TotalPrice {
  constructor() {
    this.totalPrice = 0;
  }

  calculateTotalPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.totalPrice += arr[i] * LottoConstants.PRICE_AMOUNT[i];
    }
  }

  calculateReturnRate(price) {
    const returnRate = (100 * (this.totalPrice / price)).toFixed(1);
    return returnRate;
  }
}

export default TotalPrice;
