import Lotto from './Lotto.js';
import User from './User.js';
import { Console } from '@woowacourse/mission-utils';

class Game {
  async playGame() {
    const user = new User();
    const lottoCount = await user.calculateLottoCount();

    const initialLottoNumbers = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = new Lotto(initialLottoNumbers);
      lotto.generateRandomNumbers();
      const lottoNumbers = lotto.getNumbers();
      Console.print(`[${lottoNumbers.join(', ')}]`);
    }

    const winningNumbers = await user.getWinningNumbers();
    const bonusNumber = await user.getBonusNumber();
  }
}

export default Game;
