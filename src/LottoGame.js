import CombinationMachine from './CombinationMachine.js';
import LottoMachine from './LottoMachine.js';
import LottoSeller from './LottoSeller.js';
import User from './User.js';

class LottoGame {
  #user;
  #lottoSeller;

  constructor() {
    this.#user = null;
    this.#lottoSeller = null;
  }

  setUpGameProcess() {
    const lottoMacine = new LottoMachine();
    this.#lottoSeller = new LottoSeller(lottoMacine);
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
