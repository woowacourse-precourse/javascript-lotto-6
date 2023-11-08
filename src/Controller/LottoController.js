import { Console } from '@woowacourse/mission-utils';
import Input from '../View/UserInput.js';
import Output from '../View/ComputerOutput.js';

class Controller {
  constructor() {
    this.purchaseAmount = 0;
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

    Console.print('\n당첨 통계');
    Console.print('---');

    const totalPrize = Output.calculatePrizes(matchingCounts);
    Output.calculateEarnings(totalPrize, this.purchaseAmount);
  }
}

export default Controller;