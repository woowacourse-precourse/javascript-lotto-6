import { Console } from '@woowacourse/mission-utils';
import inputPrice from './input/inputPrice.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';

class App {
  async play() {
    this.price = await inputPrice();
    this.lotteryAmount = getAmountOfLottery(this.price);
    Console.print(this.lotteryAmount);
  }
}

export default App;
