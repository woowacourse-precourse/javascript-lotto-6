class LottoPublisher {
  #moneyAmount;

  setMoneyAmount(moneyAmount) {
    this.validate(moneyAmount);
    this.#moneyAmount = moneyAmount;
  }

  validate(moneyAmount) {
    if (moneyAmount % 1000 !== 0) {
      throw new Error('안돼임마');
    }
  }
}

export default LottoPublisher;
