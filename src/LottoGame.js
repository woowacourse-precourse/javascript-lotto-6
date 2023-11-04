
class LottoGame {
  constructor(price) {
    this.price = price;
    this.count = this.calculateLottoCount(price);
    this.lottos = [];
  }

  calculateLottoCount(price) {
    return price / 1000;
  }
  
  addLotto(lotto){
   this.lottos.push(lotto);
  }
}

export default LottoGame