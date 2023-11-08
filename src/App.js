import inputPrice from './input/inputPrice.js';
import getAmountOfLottery from './lottery/getAmountOfLottery.js';
import printLotteriesAmount from './output/printLotteriesAmount.js';
import getLotteries from './lottery/getLotteries.js';
import printLotteries from './output/printLotteries.js';
import inputWinningNumbers from './input/inputWinningNumbers.js';
import inputBonusNumber from './input/inputBonusNumber.js';
import countSameNumbers from './game/countSameNumbers.js';
import countWinningLotteries from './game/countWinningLotteries.js';
import getReturnRate from './game/getReturnRate.js';
import printResult from './output/printResult.js';

class App {
  async play() {
    const PRICE = await inputPrice();

    const LOTTERY_AMOUNT = getAmountOfLottery(PRICE);
    printLotteriesAmount(LOTTERY_AMOUNT);

    const LOTTERIES = getLotteries(LOTTERY_AMOUNT);
    printLotteries(LOTTERIES);

    const WINNING_NUMBERS = await inputWinningNumbers();

    const BONUS_NUMBER = await inputBonusNumber(WINNING_NUMBERS);
    WINNING_NUMBERS.push(BONUS_NUMBER);

    const SAME_NUMBER_LIST = countSameNumbers(LOTTERIES, WINNING_NUMBERS);
    const WINNING_LOTTERY_LIST = countWinningLotteries(SAME_NUMBER_LIST);
    const RETURN_RATE = getReturnRate(WINNING_LOTTERY_LIST, PRICE);
    printResult(WINNING_LOTTERY_LIST, RETURN_RATE);
  }
}

export default App;
