import { Console } from '@woowacourse/mission-utils';
import { prompt, result } from './constants/message.js';
import BuyLotto from './BuyLotto.js';
import validator from './Validator.js';
import Compare from './Compare.js';
import PlayerInput from './PlayerInput.js';
import Output from './Output.js';

class App {
  playerInput = new PlayerInput();

  buyLotto = new BuyLotto();

  output = new Output();

  expense;

  lotteryTicket;

  winningNumber;

  bonusNumber;

  compare;

  resultLotto;

  lottoRateOfReturn;

  async play() {
    this.expense = await Console.readLineAsync(prompt.ASK_AMOUNT);

    this.makeLotto();
    this.printLotto();

    const numberInput = await Console.readLineAsync(prompt.ASK_NUMBER);
    this.winningInput(numberInput);

    const bonusInput = await Console.readLineAsync(prompt.ASK_BONUS_NUMBER);
    this.bonusNumberInput(bonusInput);

    this.compareLotto();
    this.winningResultPrint();

    this.lottoRateOfReturn = this.compare.RateOfReturn(
      this.resultLotto,
      this.expense,
    );

    this.output.resultRorPrint(
      result.RATE_OF_RETURN,
      this.lottoRateOfReturn,
      result.PERCENT,
    );
  }

  makeLotto() {
    this.expense = Number(this.expense);
    validator.validationExpense(this.expense);

    const lotteryTicketCount = this.buyLotto.buyLottoCount(this.expense);

    this.output.buyLottoPrint(lotteryTicketCount, result.PURCHASE);

    this.lotteryTicket = this.buyLotto.issuedLotto(lotteryTicketCount);
  }

  printLotto() {
    this.lotteryTicket.forEach((lottoElement) => {
      const formatLottoElement = lottoElement.join(', ');
      this.output.print(`[${formatLottoElement}]`);
    });
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

  compareLotto() {
    this.compare = new Compare(
      this.lotteryTicket,
      this.winningNumber,
      this.bonusNumber,
    );

    this.resultLotto = this.compare.compareNumber();
  }

  winningResultPrint() {
    this.output.print(result.STATISTIC);
    this.output.print(result.LINE);

    this.output.resultLottoPrint(
      result.WINNING.THREE_MATCHES,
      this.resultLotto.fivePlace.sameCount,
      result.COUNT,
    );

    this.output.resultLottoPrint(
      result.WINNING.FOUR_MATCHES,
      this.resultLotto.fourthPlace.sameCount,
      result.COUNT,
    );

    this.output.resultLottoPrint(
      result.WINNING.FIVE_MATCHES,
      this.resultLotto.thirdPlace.sameCount,
      result.COUNT,
    );

    this.output.resultLottoPrint(
      result.WINNING.FIVE_AND_BONUS_MATCHES,
      this.resultLotto.secondPlace.sameCount,
      result.COUNT,
    );

    this.output.resultLottoPrint(
      result.WINNING.SIX_MATCHES,
      this.resultLotto.firstPlace.sameCount,
      result.COUNT,
    );
  }
}
export default App;
