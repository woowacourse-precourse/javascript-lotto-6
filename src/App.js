import inputPrice from './input/inputPrice.js';
import lineBreak from './common/lineBreak.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import printLotteriesAmount from './output/printLotteriesAmount.js';
import getLotteries from './lottery/getLotteries.js';
import printLotteries from './output/printLotteries.js';
import inputWinningNumbers from './input/inputWinningNumbers.js';

class App {
  async play() {
    this.price = await inputPrice();
    lineBreak();

    this.lotteryAmount = getAmountOfLottery(this.price);
    printLotteriesAmount(this.lotteryAmount);

    this.lotteries = getLotteries(this.lotteryAmount);
    printLotteries(this.lotteries);
    lineBreak();

    this.winningNumbers = await inputWinningNumbers();
    lineBreak();
  }
}

export default App;
