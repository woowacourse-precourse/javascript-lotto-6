import inputPrice from './input/inputPrice.js';
import lineBreak from './common/lineBreak.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import printLotteriesAmount from './output/printLotteriesAmount.js';
import getLotteries from './lottery/getLotteries.js';
import printLotteries from './output/printLotteries.js';
import inputWinningNumbers from './input/inputWinningNumbers.js';
import inputBonusNumber from './input/inputBonusNumber.js';
import countSameNumbers from './game/countSameNumbers.js';
import countWinningLotteries from './game/countWinningLotteries.js';

class App {
  async play() {
    const PRICE = await inputPrice();
    lineBreak();

    const LOTTERY_AMOUNT = getAmountOfLottery(PRICE);
    printLotteriesAmount(LOTTERY_AMOUNT);

    const LOTTERIES = getLotteries(LOTTERY_AMOUNT);
    printLotteries(LOTTERIES);
    lineBreak();

    const WINNING_NUMBERS = await inputWinningNumbers();
    lineBreak();

    const BONUS_NUMBER = await inputBonusNumber(WINNING_NUMBERS);
    WINNING_NUMBERS.push(BONUS_NUMBER);
    lineBreak();

    const SAME_NUMBER_LIST = countSameNumbers(LOTTERIES, WINNING_NUMBERS);
    const WINNING_LOTTERY_LIST = countWinningLotteries(SAME_NUMBER_LIST);
    console.log(WINNING_LOTTERY_LIST);
  }
}

export default App;
