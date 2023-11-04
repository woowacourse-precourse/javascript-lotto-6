class LottoManager {
  constructor() {
    this.user = null;
    this.lottoCount = 0;
  }

  setUser(user) {
    this.user = user;
  }

  calculateLottoCount(money) {
    this.lottoCount = money / 1000;
  }
}

export default LottoManager;
