import Lotto from './Lotto.js'

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
    const lottoNumbers = new Lotto().getNumbers();
    this.lottoList.push(lottoNumbers);
  }

}

export default Customer;
