
class LottoGame {
  constructor(price) {
    this.price = price;
    this.count = this.calculateLottoCount(price);
  }

  calculateLottoCount(price) {
    return price / 1000;
  }
  
}

export default LottoGame