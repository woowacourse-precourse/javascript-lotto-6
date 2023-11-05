import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Input from './Input';

const LOTTO_PRICE = 1000;

class App {
  #winning;
  #bonus;
  #payment;

  constructor() {
    this.lottos = [];
  }

  generateLottos(amount) {
    for (let i = 0; i < amount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
      this.lottos[i].print();
    }
  }

  async play() {
    this.#payment = await Input.payment();
    const amount = this.#payment / LOTTO_PRICE;
    Console.print(`\n${amount}개를 구매했습니다.`);

    this.generateLottos(amount);

    this.#winning = await Input.winning();
    this.#bonus = await Input.bonusNumber(this.#winning);
  }
}

export default App;
