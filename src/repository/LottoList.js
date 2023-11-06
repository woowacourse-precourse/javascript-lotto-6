import { MissionUtils } from '@woowacourse/mission-utils';
import {
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH,
} from '../utils/constants.js';
import Lotto from './Lotto.js';

class LottoList {
  #list;

  constructor(lottoCnt) {
    this.#createLottoList(lottoCnt);
  }

  #createLottoList(lottoCnt) {
    this.#list = Array.from({ length: lottoCnt }).map(() => {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_LOTTO_NUMBER,
        MAX_LOTTO_NUMBER,
        LOTTO_LENGTH
      );
      return new Lotto(lottoNumbers).getLotto();
    });
    this.#printLottoCnt(lottoCnt);
    this.#printLottoList();
  }

  #printLottoCnt(lottoCnt) {
    MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
  }

  #printLottoList() {
    this.#list.forEach((item) => {
      MissionUtils.Console.print(item);
    });
  }

  getLottoList() {
    return this.#list;
  }
}

export default LottoList;
