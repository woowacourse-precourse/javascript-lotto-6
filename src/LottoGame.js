import Computer from './Computer.js';
import LottoSeller from './LottoSeller.js';
import User from './User.js';
import { generator } from './util/generator.js';

class LottoGame {
  #user;
  #seller;

  constructor() {
    this.#user = null;
    this.#seller = null;
  }

  setUpGame() {
    const computer = new Computer(generator);
    this.#seller = new LottoSeller(computer);
  }

  purchace(lottoPrice) {
    this.#user = new User(this.#seller, lottoPrice);
    const lottos = this.#user.purchaceLottos();

    return lottos;
  }
}

export default LottoGame;
