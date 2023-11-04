class LottoGame {
  constructor(price) {
    this.price = price;
    this.count = this.calculateLottoCount(price);
    this.lottos = [];
    this.winningNumbers = [];
  }

  calculateLottoCount(price) {
    return price / 1000;
  }

  addLotto(lotto) {
    this.lottos.push(lotto);
  }

  addWinningNumbers(numberArray) {
    this.winningNumbers = numberArray;
  }
}

export default LottoGame;
