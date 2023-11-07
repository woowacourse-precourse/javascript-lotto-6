import { Console } from '@woowacourse/mission-utils';
import ProcessLotto from './ProcessLotto.js';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.guess = new ProcessLotto();
  }

  async play() {
    try {
      await this.buyAndPrintLotto();
      const winningNumber = await this.inputLottoNumber();
      await this.checkWinning(winningNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async buyAndPrintLotto() {
    await this.guess.buyLotto();

    Console.print(`\n${this.guess.getLottoPieces()}개를 구매했습니다.`);
    for (let i = 1; i <= this.guess.getLottoPieces(); i += 1) {
      Console.print(this.guess.generateLottoNumber());
    }
    Console.print('');
  }

  async inputLottoNumber() {
    return this.guess.inputLottoNumber();
  }

  async checkWinning(winningNumber) {
    const lotto = new Lotto(winningNumber);
    const winningBonus = await this.guess.inputBonusNumber();
    lotto.checkWin(winningBonus, this.guess.getGuessNumbers());
  }
}

export default App;
