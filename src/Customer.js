class Customer {
  #payment;
  lottoList = [];

  constructor(payment) {
    this.#payment = payment;
    for (let i = 0; i < this.calculateTotalLottoTickets(); i++) {
      this.buyLottoTickets();
    }
  }

  calculateTotalLottoTickets() {
    return this.#payment / 1000;
  }

  buyLottoTickets() {
    this.lottoList.push(new Lotto());
  }

}

export default Customer;
