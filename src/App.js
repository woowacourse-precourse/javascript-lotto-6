import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Input from './Input';

const LOTTO_PRICE = 1000;
const LOTTO_PRIZE = new Map([
  [5, 5000],
  [4, 50000],
  [3, 1500000],
  [2, 30000000],
  [1, 2000000000],
]);

class App {
  #winning;
  #bonus;
  #payment;
  #totalPrize;
  #rankedLotto;

  constructor() {
    this.lottos = [];
    this.#totalPrize = 0;
    this.#rankedLotto = new Map([
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
    ]);
  }

  generateLottos(amount) {
    for (let i = 0; i < amount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
      this.lottos[i].print();
    }
  }

  setRank(matched, matchedBonus) {
    if (matched < 3) return;

    let rank = 8 - matched;
    if (rank === 3 && matchedBonus) {
      rank = 2;
    }

    this.#rankedLotto.set(rank, this.#rankedLotto.get(rank) + 1);
    this.#totalPrize += LOTTO_PRIZE.get(rank);
  }

  calculateResult() {
    this.lottos.forEach((lotto) => {
      const matched = lotto.countMatched(this.#winning);
      const matchedBonus = lotto.includes(this.#bonus);
      this.setRank(matched, matchedBonus);
    });
  }

  async play() {
    this.#payment = await Input.payment();
    const amount = this.#payment / LOTTO_PRICE;
    Console.print(`\n${amount}개를 구매했습니다.`);

    this.generateLottos(amount);

    this.#winning = await Input.winning();
    this.#bonus = await Input.bonusNumber(this.#winning);

    this.calculateResult();
  }
}

export default App;
