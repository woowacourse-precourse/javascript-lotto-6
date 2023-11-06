import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './UserInput.js';
import Output from './ComputerOutput.js';

class Controller {
  constructor() {
    this.purchaseAmount = 0;
  }

  checkNumber() {
    const numbers = Lotto.createRandomNumbers();
    const bonusNumber = Lotto.generateBonusNumber(numbers);
    const lotto = new Lotto(numbers);
    const lottoNumbers = lotto.lottoNumbers();
    Console.print(`로또 번호: ${lottoNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
    return this.gameStart;
  }

  async gameStart() {
    const input = new Input();
    this.purchaseAmount = await input.userPurchase();
    await input.userNumber();
    await input.userBonusNumber();
    this.gameResult();
  }

  gameResult() {
    Console.print(`\n구입금액을 입력해 주세요 \n${this.purchaseAmount}`);
    Output.ticketPrint(this.purchaseAmount);
  }

}

export default Controller;