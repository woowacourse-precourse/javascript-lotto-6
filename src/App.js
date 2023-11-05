import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT } from './constants/messages.js';
import Money from './Money.js';

class App {
  async play() {
    try {
      const price = await MissionUtils.Console.readLineAsync(INPUT.price);
      const money = new Money(price);
    } catch (error) {
      console.error(`${error.message}`);
      return this.play();
    }
  }
}

const app = new App();
app.play();

export default App;
