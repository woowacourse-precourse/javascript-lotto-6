import LottoNumberGenerator from "./LottoNumberGenerator.js";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #PRICE_PER_TICKET = 1000;

  purchase(price) {
    this.#validatePrice(price);
    const quantity = Math.floor(price / this.#PRICE_PER_TICKET);
    const tickets = [];
    for (let i = 0; i < quantity; i++) {
      tickets[i] = new Lotto(LottoNumberGenerator.generate());
    }
    return tickets;
  }

  #validatePrice(price) {
    if(price % this.#PRICE_PER_TICKET !== 0) {
        throw new Error("[ERROR] 로또는 " + this.#PRICE_PER_TICKET + "원 단위로만 구입할 수 있습니다.");
    }
  }
}

export default LottoGenerator;
