import { Console } from '@woowacourse/mission-utils';
import inputPrice from './input/inputPrice.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import { BUY_LOTTO } from './constants.js';

class App {
  async play() {
    this.price = await inputPrice();
    this.lotteryAmount = getAmountOfLottery(this.price);
    Console.print(`\n${this.lotteryAmount}${BUY_LOTTO}`);
  }
}

export default App;
