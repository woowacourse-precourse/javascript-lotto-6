import Lotto from './Lotto.js';
import User from './User.js';
import { Console } from '@woowacourse/mission-utils';

class Game {
  #user;
  #lottoCount;

  constructor() {
    this.#user = new User();
    this.#lottoCount = null;
  }

  async playGame() {
    this.#lottoCount = await this.#user.calculateLottoCount();
    this.printLottoNumbers();
    this.compareWinningNumbers();
  }

  async printLottoNumbers() {
    const initialLottoNumbers = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < this.#lottoCount; i += 1) {
      const lotto = new Lotto(initialLottoNumbers);
      lotto.generateRandomNumbers();
      const lottoNumbers = lotto.getNumbers();
      Console.print(`[${lottoNumbers.join(', ')}]`);
    }
  }

  async compareWinningNumbers() {
    const winningNumbers = await this.#user.getWinningNumbers();
    const bonusNumber = await this.#user.getBonusNumber();
  }
}

export default Game;
