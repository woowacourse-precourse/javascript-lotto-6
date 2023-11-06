import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT, LINE_BREAK, OUTPUT } from './constants/messages.js';
import { THOUSAND } from './constants/data.js';
import Money from './Money.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    await this.inputPrice();
  }

  async inputPrice() {
    try {
      const price = await MissionUtils.Console.readLineAsync(`${INPUT.price}${LINE_BREAK}`);
      const money = new Money(price);

      return this.outputCount(money);
    } catch (error) {
      console.error(`${error.message}`);
      // return Promise.reject(error);
      return this.play();
    }
  }

  outputCount(money) {
    const count = money.getPrice() / THOUSAND;
    MissionUtils.Console.print(`${LINE_BREAK}${count}${OUTPUT.count}${LINE_BREAK}`);

    // return this.makeLottos(count);
  }

  // async makeLottos(count) {
  //   const allLottos = [];

  //   while (count > 0) {
  //     const lotto = new Lotto();
  //     allLottos.push(lotto);

  //     count = count - 1;
  //   }
  // }
}

const app = new App();
app.play();

export default App;
