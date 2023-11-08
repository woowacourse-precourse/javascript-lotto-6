import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_PRICE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBER_COUNT,
  PRINT_MESSAGE,
  REQUEST_MESSAGE,
  VALIDATION_ERRORS_MESSAGE,
  WINNING_LIST,
  regexNumber,
} from './Constants.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const money = await this.getMoney();
    const lottoCount = money / LOTTO_PRICE;
    const lottos = Lotto.generateLotto(lottoCount);
    this.printLotto(lottos, lottoCount);
    const winningNumbers = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const winningRank = this.winningRankResult(
      lottos,
      winningNumbers,
      bonusNumber,
    );
    const winningProfit = Lotto.calculateProfit(money, winningRank);
    this.printResult(winningRank, winningProfit);
  }

  // 로또 구입 금액 입력
  async getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(REQUEST_MESSAGE.PUT_MONEY);
        return this.isValidMoney(money) && money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  isValidMoney(money) {
    const moneyNumber = Number(money);
    if (!money) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (!regexNumber.test(money))
      throw new Error(VALIDATION_ERRORS_MESSAGE.MONEY_NOT_NUMBER);
    if (moneyNumber < LOTTO_PRICE)
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    if (moneyNumber % LOTTO_PRICE !== 0) {
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    }

    return true;
  }

  // 발행한 로또 출력
  printLotto(lottos, lottoCount) {
    const message = PRINT_MESSAGE(lottoCount);
    Console.print(message.lottoQuantity);

    lottos.forEach((lotto) => {
      const formattedLotto = `[${lotto.join(', ')}]`;
      Console.print(formattedLotto);
    });
  }

  // 당첨 번호 입력
  async getWinningNumber() {
    while (true) {
      try {
        const numbers = await Console.readLineAsync(
          REQUEST_MESSAGE.PUT_WINNING_NUMBER,
        );
        const winningNumbers = numbers.split(',');
        const lotto = new Lotto(winningNumbers);
        return lotto.lottoNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 보너스 번호를 입력
  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const number = await Console.readLineAsync(
          REQUEST_MESSAGE.PUT_BONUS_NUMBER,
        );
        return this.isValidBonusNumber(number, winningNumbers) && number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  isValidBonusNumber(number, winningNumbers) {
    if (isNaN(number))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_NUMBER);
    if (!number) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (number.split(',').length > LOTTO_NUMBER_COUNT.BONUS)
      throw new Error(VALIDATION_ERRORS_MESSAGE.ENTER_ONE_BONUS_NUMBER);
    if (number < LOTTO_NUMBER_RANGE.MIN || number > LOTTO_NUMBER_RANGE.MAX)
      throw new Error(VALIDATION_ERRORS_MESSAGE.OVER_THE_RANGE);
    if (winningNumbers.includes(number))
      throw new Error(VALIDATION_ERRORS_MESSAGE.CONTAIN_SAME_NUMBER);

    return true;
  }

  // 구매한 로또 번호와 당첨 번호를 비교
  winningRankResult(lottos, winningNumbers, bonusNumber) {
    const winningRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    Lotto.compareLottoNumber(winningRank, lottos, winningNumbers, bonusNumber);
    return winningRank;
  }

  // 당첨 내역 및 수익률 출력
  printResult(winningRank, winningProfit) {
    const message = PRINT_MESSAGE(winningProfit);

    Console.print(WINNING_LIST(winningRank));
    Console.print(message.profitRate);
  }
}

export default App;
