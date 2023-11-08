import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGenerator {
  constructor() {
    this.LottoNumbers = [];
  }

  generateRandomNumbers() {
    this.LottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.LottoNumbers;
  }

  purchaseLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(this.generateRandomNumbers());
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b); // 정렬 추가
      lottos.push(lotto);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    }
    return lottos;
  }
}
export default LottoGenerator;
