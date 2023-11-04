import OutputView from '../view/OutputView.js';
import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class LottoGenerator {
  #lottoAmount;

  startGenerate(amount) {
    this.#lottoAmount = amount;
    OutputView.printLottoAmount(this.#lottoAmount);
    this.generateEachLotto();
  }

  generateEachLotto() {
    let numbers = new Array(this.#lottoAmount);
    Array.from({ length: this.#lottoAmount }, () => {
      numbers.push(this.randomNumberGenerator());
    });
    Console.print(numbers);
  }

  randomNumberGenerator() {
    return this.sort(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  sort(randomNumbers) {
    return randomNumbers.sort((a, b) => a - b);
  }
}

export default LottoGenerator;
