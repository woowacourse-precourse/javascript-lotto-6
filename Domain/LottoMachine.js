import Lotto from './Lotto.js';
import Random from '';

class LottoMachine {
  #random;

  constructor(Random) {
    this.#random = Random;
  }

  buyLotto(money) {
    // 유효성 검사 추가
    const buyCount = Math.floor(money / 1000);

    const lottoList = [];
    for (let i = 0; i < buyCount; i++) {
      lottoList.push(new Lotto(this.#random.getRandomLotto()));
    }

    return lottoList;
  }
}
export default LottoMachine;
