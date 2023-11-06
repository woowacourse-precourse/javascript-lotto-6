import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Controller {

  gameStart() {
    const numbers = Lotto.createRandomNumbers();
    const bonusNumber = Lotto.generateBonusNumber(numbers);
    const lotto = new Lotto(numbers, bonusNumber);
    const lottoNumber = lotto.getNumbers();
    Console.print(`로또 번호: ${lottoNumber}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
    return this.gameStart;
  }
}

export default Controller;