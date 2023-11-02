import { Console, Random } from '@woowacourse/mission-utils';
import * as utils from './LottoUtils.js';
class App {
  async play() {
    await utils.inputAmount();
    await utils.inputWinningNumbers();
    await utils.inputBonusNumber();
    Console.print(utils.getRandomNumbers());
  }
}

export default App;
