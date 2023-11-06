import { Console } from '@woowacourse/mission-utils';
import { BUY_LOTTO } from './constants.js';
import inputPrice from './input/inputPrice.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import getLotteries from './lottery/getLotteries.js';
import printLotteries from './output/printLotteries.js';

class App {
  async play() {
    this.price = await inputPrice();

    this.lotteryAmount = getAmountOfLottery(this.price);
    Console.print(`\n${this.lotteryAmount}${BUY_LOTTO}`);

    this.lotteries = getLotteries(this.lotteryAmount);
    printLotteries(this.lotteries);
  }
}

export default App;
