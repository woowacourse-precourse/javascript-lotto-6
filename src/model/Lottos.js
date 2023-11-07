import lottoNumberGenerator from "../utils/RandomNumberGenerator.js";
import Lotto from "./Lotto.js";

class Lottos {
  #count;
  #lottos = [];

  constructor(tickets) {
    this.#count = tickets;
    for (let i = 0; i < tickets; i++) {
      this.#lottos.push(
        new Lotto(lottoNumberGenerator.generate()).getTicketNumbers()
      );
    }
  }

  getCount() {
    return this.#count;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
