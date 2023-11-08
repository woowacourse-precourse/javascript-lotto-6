import { Console } from '@woowacourse/mission-utils';
import Input from '../View/UserInput.js';
import Output from '../View/ComputerOutput.js';
import { LOTTO_NUMBER, OUTPUT_MESSAGE } from '../Utils/constants.js';

class Controller {
  constructor() {
    this.purchaseAmount = LOTTO_NUMBER.INITNUM;
    this.lottoNumbers = [];
    this.lottoBonusNumber = [];
    this.lottoTickets = [];
  }

  async gameStart() {
    const input = new Input();
    this.purchaseAmount = await input.userPurchase();
    this.lottoTickets = Output.ticketPrint(this.purchaseAmount);
    this.lottoNumbers = await input.userNumber();
    this.lottoBonusNumber = await input.userBonusNumber();
    this.gameResult();
  }

  gameResult() {
    const matchingCounts = Output.compareTickets(this.lottoTickets, this.lottoNumbers, this.lottoBonusNumber);

    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    Console.print(OUTPUT_MESSAGE.WINNING_LINE);

    const totalPrize = Output.calculatePrizes(matchingCounts);
    Output.calculateEarnings(totalPrize, this.purchaseAmount);
  }
}

export default Controller;