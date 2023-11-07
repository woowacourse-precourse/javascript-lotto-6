import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const range = (length) => Array.from({ length }, (_, i) => i);
const issueLotto = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return new Lotto(lottoNumbers);
};

class Computer{
  #price;

  constructor(price = 1000) {
    this.#price = price;
  }

  sell(amount) {
    const count = Math.floor(amount / this.#price);
    return range(count).map(issueLotto);
  }
}

export default Computer;