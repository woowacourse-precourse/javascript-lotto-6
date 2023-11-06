import { MissionUtils } from '@woowacourse/mission-utils';
import { THOUSAND } from './constants/data.js';
import { INPUT, LINE_BREAK, OUTPUT } from './constants/messages.js';
import Lotto from './Lotto.js';
import Money from './Money.js';

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
      MissionUtils.Console.print(lotto.sort((num1, num2) => num1 - num2));
    });
  }
}

const app = new App();
app.play();

export default App;
