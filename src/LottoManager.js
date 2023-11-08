import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import LottoResult from './LottoResult';

class LottoManager {
  #money;
  #count;
  #userLottoArray;
  #userLottoBonusNumber;
  #lottoArray;
  #result;

  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#userLottoArray = [];
    this.#userLottoBonusNumber = 0;
    this.#lottoArray = [];
    this.#result = null;
  }

  generateLottoNumber() {
    const lottoNumberArray = Random.pickUniqueNumbersInRange(1, 45, 6);

    return lottoNumberArray;
  }
}

export default LottoManager;
