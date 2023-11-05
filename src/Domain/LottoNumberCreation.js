import LOTTO from '../constants/lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoNumberCreation {
  // TODO: 1. 로또 생성 관련 기능 분리 :
  // 로또 번호 생성
  static generateRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.number.min,
      LOTTO.number.max,
      LOTTO.number.limit,
    ).sort((a, b) => a - b);
  }

  // 넘겨 받은 갯수만큼 로또 티켓 리스트 생성
  static generateLottoTickets(num) {
    return Array.from({ length: num }, () => this.generateRandomLottoNumber());
  }
}

export default LottoNumberCreation;
