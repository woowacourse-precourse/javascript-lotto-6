import { Console } from '@woowacourse/mission-utils';
import { prompt, result } from './constants/message.js';
import BuyLotto from './BuyLotto.js';
import validator from './Validator.js';
import Compare from './Compare.js';

class App {
  buyLotto = new BuyLotto();

  lotteryTicket;

  winningNumber;

  bonusNumber;

  resultLotto;

  async play() {
    const expense = await Console.readLineAsync(prompt.ASK_AMOUNT);
    const lotteryTicketCount = this.buyLotto.buyLottoCount(expense);

    Console.print(`\n${lotteryTicketCount}${result.PURCHASE}`);

    this.lotteryTicket = this.buyLotto.randomNumber(lotteryTicketCount);

    this.lotteryTicket.forEach((lottoElement) => {
      Console.print(lottoElement);
    });

    Console.print('\n');

    const numberInput = await Console.readLineAsync(prompt.ASK_NUMBER);
    this.winningInput(numberInput);

    Console.print('\n');

    const bonusInput = await Console.readLineAsync(prompt.ASK_BONUS_NUMBER);
    this.bonusNumberInput(bonusInput);

    Console.print(result.STATISTIC);
    Console.print(result.LINE);

    const compare = new Compare(
      this.lotteryTicket,
      this.winningNumber,
      this.bonusNumber,
    );

    this.resultLotto = compare.compareLotto();
  }

  winningInput(numberInput) {
    const inputArray = numberInput.split(',');
    const numberArray = inputArray.map((inputElement) => Number(inputElement));

    validator.validationNumber(numberArray);

    this.winningNumber = numberArray;
  }

  bonusNumberInput(bonusInput) {
    const number = Number(bonusInput);
    validator.validationBonusNumber(this.winningNumber, number);

    this.bonusNumber = number;
  }
}
export default App;
