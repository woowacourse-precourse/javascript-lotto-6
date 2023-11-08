import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const prize = [5000, 50000, 1500000, 30000000, 2000000000];

class Background {
  #numbers;
  #bonus;

  constructor() {
    this.#numbers = [];
    this.#bonus = 0;
  }

  // getters & setters
  getNumbers() {
    return this.#numbers;
  }

  setNumbers(numbers) {
    this.#numbers = numbers;
  }

  getBonus() {
    return this.#bonus;
  }

  setBonus(bonus) {
    this.#bonus = bonus;
  }

  // queries
  issueLottos(bet) {
    let money = bet;
    const lottos = [];

    while (1000 <= money) {
      money -= 1000;

      const lotto = this.#makeLotto();
      lottos.push(lotto);
    }

    return [money, lottos];
  }

  calcStatistics(lottos) {
    const matchCounter = [0, 0, 0, 0, 0];
    let rate = 0;
    let bet = lottos.length * 1000;

    for (const lotto of lottos) {
      const lottoNumbers = lotto.getNumbers();
      this.#updateMatchCounter(matchCounter, lottoNumbers);
    }

    for (let i = 0; i < 5; i += 1) {
      rate += prize[i] * matchCounter[i];
    }
    rate = ((100 * rate) / bet).toFixed(1);

    return [matchCounter, rate];
  }

  // utility
  #makeLotto() {
    let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto([...numbers]);
  }

  #calcMatches(numbers) {
    let result = 0;
    const win = this.getNumbers();

    for (const number of numbers) {
      if (win.includes(number)) {
        result += 1;
      }
    }

    return result;
  }

  #updateMatchCounter(matchCounter, lottoNumbers) {
    let matches = this.#calcMatches(lottoNumbers);

    if (matches === 3 || matches === 4) {
      matchCounter[matches - 3] += 1;
    }

    if (matches === 6) {
      matchCounter[4] += 1;
    }

    if (matches === 5) {
      let bonusIndex = lottoNumbers.includes(this.getBonus()) ? 3 : 2;
      result[bonusIndex] += 1;
    }
  }
}

export default Background;
