import { Console } from '@woowacourse/mission-utils';
import { BUY_LOTTO } from './constants.js';
import inputPrice from './input/inputPrice.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import getLotteries from './lottery/getLotteries.js';


class App {
  async play() {
    this.price = await inputPrice();

    this.lotteryAmount = getAmountOfLottery(this.price);
    Console.print(`\n${this.lotteryAmount}${BUY_LOTTO}`);
    
    this.lotteries = getLotteries(this.lotteryAmount);
    Console.print(this.lotteries);
  }
}

export default App;
