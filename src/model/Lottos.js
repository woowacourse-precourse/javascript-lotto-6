import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { ERROR, SIGN, VALUE } from '../constants/constants.js';

class Lottos {
  #lottos;

  constructor(input) {
    this.#lottos = [];
    this.#validate(input);
    this.createLottos(input);
  }

  #validate(input) {
    const purchasePrice = parseInt(input);
    if (isNaN(input)) {
      throw new Error(ERROR.invalidNumber);
    }
    if (input === SIGN.blank) {
      throw new Error(ERROR.invalidNumber);
    }
    if (purchasePrice % VALUE.lottoUnit !== 0) {
      throw new Error(ERROR.invalidUnit);
    }
    if (purchasePrice <= 0){
      throw new Error(ERROR.invalidNumber);
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
