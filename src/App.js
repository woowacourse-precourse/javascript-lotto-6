import BuyLotto from './BuyLotto.js';
import validator from './Validator.js';
import Compare from './Compare.js';
import PlayerInput from './PlayerInput.js';
import Output from './Output.js';
import { result } from './constants/message.js';
import error from './constants/error.js';

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
    await this.inputAmount();

    this.makeLotto();
    this.printLotto();

    await this.inputWinning();

    await this.inputBonus();

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

  async inputAmount() {
    this.expense = await this.playerInput.amountInput();
    this.expense = Number(this.expense);

    try {
      validator.validationExpense(this.expense);
    } catch (e) {
      this.output.print(`${error.ERROR} ${e.message}`);
      await this.inputAmount();
    }
  }

  makeLotto() {
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

  async inputWinning() {
    const numberInput = await this.playerInput.winningNumberInput();
    try {
      const inputArray = numberInput.split(',');
      const numberArray = inputArray.map((inputElement) =>
        Number(inputElement),
      );

      validator.validationNumber(numberArray);

      this.winningNumber = numberArray;
    } catch (e) {
      this.output.print(`${error.ERROR} ${e.message}`);
      await this.inputWinning();
    }
  }

  async inputBonus() {
    const bonusInput = await this.playerInput.bonusNumberInput();
    const number = Number(bonusInput);
    try {
      validator.validationBonusNumber(this.winningNumber, number);

      this.bonusNumber = number;
    } catch (e) {
      this.output.print(`${error.ERROR} ${e.message}`);
      await this.inputBonus();
    }
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
