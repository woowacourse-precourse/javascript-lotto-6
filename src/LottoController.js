import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './UserInput.js';

class Controller {

  gameStart() {
    const numbers = Lotto.createRandomNumbers();
    const bonusNumber = Lotto.generateBonusNumber(numbers);
    const lotto = new Lotto(numbers);
    const lottoNumbers = lotto.lottoNumbers();
    Console.print(`로또 번호: ${lottoNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
    return this.gameStart;
  }

  async userInput() {
    const input = new Input();
    await input.userPurchase();
    await input.userNumber();
    await input.userBonusNumber();
  }
}

export default Controller;