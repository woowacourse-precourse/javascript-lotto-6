class BuyLotto {
  #lottoCount;
  #money;

  constructor(money) {
    this.#validate(money);
    this.#lottoCount = money / 1000;
  }

  #validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error("[ERROR] 돈은 숫자여야 합니다.");
    }
    return true;
  }
  get getBonusNumbers() {
    return this.#bonusNumbers;
  }
}

export default BuyLotto;
