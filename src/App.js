import { Console } from '@woowacourse/mission-utils';
import GuessLotto from './GuessLotto.js';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.guess = new GuessLotto();
  }

  async play() {
    try {
      this.buyAndPrintLotto();
      const winningNumber = await this.guess.inputLottoNumber();
      await this.checkWinning(winningNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async buyAndPrintLotto() {
    await this.guess.buyLotto();

    Console.print(`${this.guess.getLottoPieces()}개를 구매했습니다.`);
    for (let i = 1; i <= this.guess.getLottoPieces(); i += 1) {
      Console.print(this.guess.generateLottoNumber());
    }
    Console.print('');
  }

  async checkWinning(winningNumber) {
    const lotto = new Lotto(winningNumber);
    const winningBonus = await this.guess.inputBonusNumber();
    lotto.checkWin(winningBonus, this.guess.getGuessNumbers());
  }
}

export default App;
