import CombinationMachine from './CombinationMachine.js';
import Computer from './Computer.js';
import LottoSeller from './LottoSeller.js';
import User from './User.js';
import { generator } from './util/generator.js';

class LottoGame {
  #user;
  #lottoSeller;

  constructor() {
    this.#user = null;
    this.#lottoSeller = null;
  }

  setUpGameProcess() {
    const computer = new Computer(generator);
    this.#lottoSeller = new LottoSeller(computer);
  }

  purchace(lottoPrice) {
    this.#user = new User(lottoPrice);
    const lottos = this.#user.getLottos(this.#lottoSeller);

    return lottos;
  }

  resultOfWinningDetails(winnigNumbers, bonusNumber) {
    const combinationMachine = new CombinationMachine(winnigNumbers, bonusNumber);
    const result = this.#user.checkResult(combinationMachine);

    return result;
  }
}

export default LottoGame;
