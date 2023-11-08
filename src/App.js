import IssuedLotteryTicket from './IssuedLotteryTicket.js';
import Validator from './Validator.js';
import PlayerInput from './PlayerInput.js';
import Output from './Output.js';
import Lotto from './Lotto.js';
import Compare from './Compare.js';
import { result } from './constants/message.js';

class App {
  expense;

  lotteryTicket;

  winningNumber;

  bonusNumber;

  compare;

  resultLotto;

  lottoRateOfReturn;

  constructor() {
    this.playerInput = new PlayerInput();
    this.issuedLotteryTicket = new IssuedLotteryTicket();
  }

  async play() {
    await this.inputAmount();
    await this.inputWinning();
    await this.inputBonus();
    this.compareLotto();
    this.rateOfReturn();
  }

  async inputAmount() {
    this.expense = await this.playerInput.amountInput();
    this.expense = Number(this.expense);

    try {
      Validator.validationExpense(this.expense);

      this.lotteryTicket = this.issuedLotteryTicket.makeLotto(this.expense);
      this.printLotto();
    } catch (e) {
      Output.print(e.message);
      await this.inputAmount();
    }
  }

  printLotto() {
    this.lotteryTicket.forEach((lottoElement) => {
      const formatLottoElement = lottoElement.join(', ');
      Output.print(`[${formatLottoElement}]`);
    });
  }

  async inputWinning() {
    const numberInput = await this.playerInput.winningNumberInput();

    try {
      const inputArray = numberInput
        .split(',')
        .map((inputElement) => Number(inputElement));

      this.winningNumber = new Lotto(inputArray).getNumber();
    } catch (e) {
      Output.print(e.message);
      await this.inputWinning();
    }
  }

  async inputBonus() {
    const bonusInput = await this.playerInput.bonusNumberInput();
    const number = Number(bonusInput);
    try {
      Validator.validationBonusNumber(this.winningNumber, number);

      this.bonusNumber = number;
    } catch (e) {
      Output.print(e.message);
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
    this.winningResultPrint();
  }

  winningResultPrint() {
    Output.print(result.STATISTIC);
    Output.print(result.LINE);

    Output.resultLottoPrint(
      result.WINNING.THREE_MATCHES,
      this.resultLotto.fifthPlace.sameCount,
      result.COUNT,
    );

    Output.resultLottoPrint(
      result.WINNING.FOUR_MATCHES,
      this.resultLotto.fourthPlace.sameCount,
      result.COUNT,
    );

    Output.resultLottoPrint(
      result.WINNING.FIVE_MATCHES,
      this.resultLotto.thirdPlace.sameCount,
      result.COUNT,
    );

    Output.resultLottoPrint(
      result.WINNING.FIVE_AND_BONUS_MATCHES,
      this.resultLotto.secondPlace.sameCount,
      result.COUNT,
    );

    Output.resultLottoPrint(
      result.WINNING.SIX_MATCHES,
      this.resultLotto.firstPlace.sameCount,
      result.COUNT,
    );
  }

  rateOfReturn() {
    this.lottoRateOfReturn = this.compare.RateOfReturn(
      this.resultLotto,
      this.expense,
    );

    Output.resultRorPrint(
      result.RATE_OF_RETURN,
      this.lottoRateOfReturn,
      result.PERCENT,
    );
  }
}
export default App;
