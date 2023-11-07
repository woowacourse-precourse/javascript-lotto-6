import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './UserInput.js';
import Output from './ComputerOutput.js';

class Controller {
  constructor() {
    this.purchaseAmount = 0;
    this.lottoNumbers = [];
    this.lottoBonusNumber = [];
    this.lottoTickets = [];

  }

  // checkNumber() {
  //   const numbers = Lotto.createRandomNumbers();
  //   const bonusNumber = Lotto.generateBonusNumber(numbers);
  //   const lotto = new Lotto(numbers);
  //   const lottoNumbers = lotto.lottoNumbers();
  //   Console.print(`로또 번호: ${lottoNumbers}`);
  //   Console.print(`보너스 번호: ${bonusNumber}`);
  //   return this.gameStart;
  // }

  async gameStart() {
    const input = new Input();
    this.purchaseAmount = await input.userPurchase();
    this.lottoNumbers = await input.userNumber();
    this.lottoBonusNumber = await input.userBonusNumber();
    this.lottoTickets = Output.ticketPrint(this.purchaseAmount);
    // console.log((this.lottoTickets).length);
    this.gameResult();
  }

  gameResult() {
    Console.print(`\n구입금액을 입력해 주세요.\n${this.purchaseAmount}`);
    Console.print(`\n당첨 번호를 입력해 주세요.\n${this.lottoNumbers}`);
    Console.print(`\n보너스 번호를 입력해 주세요.\n${this.lottoBonusNumber}`);

    const matchingCounts = Output.compareTickets(this.lottoTickets, this.lottoNumbers, this.lottoBonusNumber);
    console.log(matchingCounts);

    Console.print('\n당첨 통계');
    Console.print('---');

    const totalPrize = Output.calculatePrizes(matchingCounts);
    Output.calculateEarnings(totalPrize, this.purchaseAmount);

  }

}

export default Controller;