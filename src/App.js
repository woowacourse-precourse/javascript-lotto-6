import { Console } from '@woowacourse/mission-utils';
import GuessLotto from './GuessLotto.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    try {
      const guess = new GuessLotto();
      await guess.buyLotto();

      Console.print(`\n${guess.lottoPieces}개를 구매했습니다.`);

      for (let i = 1; i <= guess.lottoPieces; i += 1) {
        Console.print(guess.generateLottoNumber());
      }
      Console.print('');

      const winningNumber = await guess.inputLottoNumber();

      const lotto = new Lotto(winningNumber);

      const winningBonus = await guess.inputBonusNumber();

      lotto.checkWin(winningBonus, guess.lottoNumbers);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
