import Computer from './Computer.js';
import LottoSeller from './LottoSeller.js';
import User from './User.js';
import { generator } from './util/generator.js';

class LottoGame {
  #user;
  #computer;

  constructor() {
    this.#user = null;
    this.#computer = null;
  }

  setUpGame() {
    this.#computer = new Computer(generator);
    this.#user = new User(new LottoSeller(this.#computer));
  }

  purchace(lottoPrice) {
    const lottos = this.#user.purchaceLottos(lottoPrice);
    return lottos;
  }
}

export default LottoGame;
