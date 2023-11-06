import CombinationMachine from './CombinationMachine.js';
import User from './User.js';

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

  resultOfWinningDetails(winnigNumbers, bonusNumber) {
    const combinationMachine = new CombinationMachine(winnigNumbers, bonusNumber);
    const result = this.#user.checkResult(combinationMachine);

    return result;
  }
}

export default LottoGame;
