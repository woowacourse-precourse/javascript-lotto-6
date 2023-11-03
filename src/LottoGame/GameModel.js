export default class GameModel {
  constructor() {
    this.LOTTO_COUNT = 0;
  }

  lottoCount(buyingMoney) {
    const lottoCount = Math.floor(buyingMoney / 1000);
    this.LOTTO_COUNT = lottoCount;
    return lottoCount;
  }
}
