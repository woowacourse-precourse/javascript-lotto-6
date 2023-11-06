import { MissionUtils } from '@woowacourse/mission-utils';
import { THOUSAND } from './constants/data.js';
import { INPUT, LINE_BREAK, OUTPUT } from './constants/messages.js';
import Bonus from './Bonus.js';
import Lotto from './Lotto.js';
import Money from './Money.js';

class App {
  async play() {
    await this.inputPrice();
    const winningNumbers = await this.inputWinnings();
    await this.inputBonus(winningNumbers);
  }

  async inputPrice() {
    try {
      const price = await MissionUtils.Console.readLineAsync(`${INPUT.price}${LINE_BREAK}`);
      const money = new Money(price);
      return this.outputCount(money);
    } catch (error) {
      console.error(`${error.message}`);
      // return Promise.reject(error);
      return this.inputPrice();
    }
  }

  outputCount(money) {
    const count = money.getPrice() / THOUSAND;
    MissionUtils.Console.print(`${LINE_BREAK}${count}${OUTPUT.count}`);

    return this.makeLottos(count);
  }

  makeLottos(count) {
    const lottos = [];

    while (count > 0) {
      const lotto = new Lotto();
      lottos.push(lotto.getNumbers());

      count = count - 1;
    }

    return this.outputLottos(lottos);
  }

  outputLottos(lottos) {
    lottos.forEach(lotto => {
      MissionUtils.Console.print(lotto.sort((prev, curr) => prev - curr));
    });
  }

  async inputWinnings() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync(`${LINE_BREAK}${INPUT.winning_numbers}${LINE_BREAK}`);
      const winningLotto = new Lotto(winningNumbers.split(','));
      
      return winningLotto.getNumbers();
    } catch (error) {
      console.error(`${error.message}`);
      return this.inputWinnings();
    }
  }

  async inputBonus(winningNumbers) {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(`${LINE_BREAK}${INPUT.bonus_number}${LINE_BREAK}`);
      const bonusLotto = new Bonus(bonusNumber, winningNumbers);

      return bonusLotto.getNumber();
    } catch (error) {
      console.error(`${error.message}`);
      return this.inputBonus();
    }
  }

  outputResult() {
    
  }
}

const app = new App();
app.play();

export default App;
