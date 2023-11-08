import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const FIRST_PRIZE_COUNT_NUMBER = 6;
const SECOND_PRIZE_COUNT_NUMBER = -1;
const THIRD_PRIZE_COUNT_NUMBER = 5;
const FOURTH_PRIZE_COUNT_NUMBER = 4;
const FIFTH_PRIZE_COUNT_NUMBER = 3;

class App {
  constructor(myNumbers) {
    this.myNumbers = myNumbers || [];
  }

  async play() {
    await this.inputAmount();
    const [numbers, bonus] = await this.inputWinningNumber();
    await this.printLottoResult(numbers, bonus);
  }

  async inputAmount() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      if (!this.validPurchase(Number(amount)))
        throw new Error('[ERROR] invalid input amount.');
      this.printMyLotto(Number(amount) / 1000);
    } catch (error) {
      Console.print('[ERROR] invalid input amount.');
      return this.inputAmount();
    }
  }

  validPurchase(amount) {
    if (isNaN(amount)) return false;
    if (amount % 1000 !== 0) return false;

    return true;
  }

  printMyLotto(volume) {
    Console.print('\n' + volume + '개를 구매했습니다.');
    this.createAndPrintRandomLotto(volume);
  }

  createAndPrintRandomLotto(volume) {
    while (volume--) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      const ascLotto = lotto.sort((n1, n2) => n1 - n2).join(', ');

      this.myNumbers.push(lotto);
      Console.print('[' + ascLotto + ']');
    }
  }

  async inputMainNumber() {
    try {
      const inputMainNumber = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );
      const winning = inputMainNumber.split(',').map(Number);
      const winningLotto = new Lotto(winning);

      return [winningLotto, winning];
    } catch (error) {
      Console.print('[ERROR]' + error);
      return this.inputMainNumber();
    }
  }

  async inputSubNumber(winningLotto) {
    try {
      const inputSubNumber = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );
      const bonus = Number(inputSubNumber);
      if (isNaN(bonus)) throw new Error('[ERROR] invalid input bonus.');
      if (bonus < 1 || bonus > 45)
        throw new Error('[ERROR] lotto number must be between 1 and 45.');
      winningLotto.checkBonusNumber(bonus);
    } catch (error) {
      Console.print('[ERROR]' + error);
      return this.inputSubNumber(winningLotto);
    }
  }

  async inputWinningNumber() {
    const [winningLotto, winning] = await this.inputMainNumber();
    const bonus = await this.inputSubNumber(winningLotto);

    return [winning, bonus];
  }

  async printLottoResult(numbers, bonus) {
    const result = { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0 };
    let sum = 0;
    this.myNumbers.forEach((lotto) => {
      const count = this.countCurrentNumber(lotto, numbers, bonus);
      sum += this.savePrizeResult(result, count);
    });
    Console.print('\n당첨 통계\n---');
    Console.print('3개 일치 (5,000원) - ' + result['5등'] + '개');
    Console.print('4개 일치 (50,000원) - ' + result['4등'] + '개');
    Console.print('5개 일치 (1,500,000원) - ' + result['3등'] + '개');
    Console.print(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + result['2등'] + '개'
    );
    Console.print('6개 일치 (2,000,000,000원) - ' + result['1등'] + '개');
    const rateOfReturn = ((sum / (this.myNumbers.length * 1000)) * 100).toFixed(
      1
    );
    Console.print('총 수익률은 ' + rateOfReturn + '%입니다.');
  }

  countCurrentNumber(mine, winning, bonus) {
    const currentNumber = mine.filter((number) => winning.includes(number));
    if (currentNumber.length === 5 && mine.includes(bonus))
      return SECOND_PRIZE_COUNT_NUMBER;
    return currentNumber.length;
  }

  savePrizeResult(result, count) {
    switch (count) {
      case FIRST_PRIZE_COUNT_NUMBER:
        result['1등']++;
        return 2000000000;
      case SECOND_PRIZE_COUNT_NUMBER:
        result['2등']++;
        return 30000000;
      case THIRD_PRIZE_COUNT_NUMBER:
        result['3등']++;
        return 1500000;
      case FOURTH_PRIZE_COUNT_NUMBER:
        result['4등']++;
        return 50000;
      case FIFTH_PRIZE_COUNT_NUMBER:
        result['5등']++;
        return 5000;
      default:
        return 0;
    }
  }
}

export default App;
