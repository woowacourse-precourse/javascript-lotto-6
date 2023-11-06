import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { ERROR, VALUE } from '../constants/constants.js';

class Lottos {
  #lottos;

  constructor(input) {
    this.#lottos = [];
    this.#validation(input);
    this.createLottos(input);
  }

  #validation(input) {
    const purchasePrice = parseInt(input);
    if (isNaN(input)) {
      throw new Error(ERROR.invalidNumber);
    }
    if (input === '') {
      throw new Error(ERROR.invalidNumber);
    }
    if (purchasePrice % VALUE.lottoUnit !== 0) {
      throw new Error(ERROR.invalidUnit);
    }
  }

  createLottos(input) {
    let issueNum = parseInt(input) / VALUE.lottoUnit;

    while (issueNum) {
      const numbers = this.generateNumbers();
      numbers.sort((a, b) => a - b);
      this.#lottos.push(new Lotto(numbers));
      issueNum -= 1;
    }
  }

  getLottosRanking(winningNumbers, bonusNumber) {
    const rankingObj = {};
    this.#lottos.forEach((lotto) => {
      const ranking = lotto.determineRanking(winningNumbers, bonusNumber);
      if (!rankingObj[ranking]) {
        rankingObj[ranking] = 0;
      }
      rankingObj[ranking] += 1;
    });
    return rankingObj;
  }

  getLottos() {
    return this.#lottos;
  }

  generateNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      VALUE.minLottoNumber,
      VALUE.maxLottoNumber,
      VALUE.lottoNumberCount,
    );
    return randomNumbers;
  }
}

export default Lottos;
