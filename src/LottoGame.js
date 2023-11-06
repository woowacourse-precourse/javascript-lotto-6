import User from './User.js';
import CompareLottoMachine from './CompareLottoMachine.js';

class LottoGame {
  #user;
  #lottoMachine;

  constructor(lottoMachine) {
    this.#user = null;
    this.#lottoMachine = lottoMachine;
  }

  purchace(lottoPrice) {
    const lottos = this.#lottoMachine.generateLotto(lottoPrice);
    this.#user = new User(lottoPrice, lottos);

    return lottos;
  }

  compareLottoResult(winnigNumbers, bonusNumber) {
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumber);
    const result = this.#user.compareResult(compareLottoMachine);

    return result;
  }
}

export default LottoGame;
