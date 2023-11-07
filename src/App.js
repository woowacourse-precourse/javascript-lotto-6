import { buycount } from './input/buycount.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  // prettier-ignore
  async play() {
    const buyinput = await buycount(Console.readLineAsync('구입금액을 입력해 주세요.'));
    const input2 = await buycount(Console.readLineAsync('구입금액을 입력해 주세요.'));
    const input3 = await buycount(Console.readLineAsync('구입금액을 입력해 주세요.'));
  }
}

export default App;
