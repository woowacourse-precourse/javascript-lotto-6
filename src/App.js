import { buycount } from './Input/buycount.js';
import { Console } from '@woowacourse/mission-utils';
import { lottoprint } from './output/Lottoprint.js';

class App {
  // prettier-ignore
  async play() {
    const buyinput = await buycount();
    Console.print(`${buyinput}개를 구매했습니다`)
    lottoprint(buyinput)
    // const input2 = await buycount(Console.readLineAsync('구입금액을 입력해 주세요.'));
    // const input3 = await buycount(Console.readLineAsync('구입금액을 입력해 주세요.'));
  }
}

export default App;
