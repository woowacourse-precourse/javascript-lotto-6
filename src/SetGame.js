import { LOTTO_RULE } from './Constants.js';
import Lotto from './Lotto.js';
import Utils from './Utils.js';
import { Validation } from './Validation/Validation.js';

class SetGame {
  #lottos;
  #buyNumber;
  #buyAmount;

  constructor(buyAmount) {
    this.#lottos = [];
    this.#validate(buyAmount);
    this.#buyAmount = buyAmount;
    this.#buyNumber - buyAmount / LOTTO_RULE.UNIT;
    this.#issueLotto();
  }
  // 구매금액 검증
  #validate(numbers) {
    Validation.validateBuyInput(numbers);
  }
  // 로또 발행하여 배열로 저장
  #issueLotto() {
    for (let i = 0; i < this.#buyAmount; i++) {
      const lotto = new Lotto(Utils.generateRandomNumbers());
      this.#lottos.push(lotto);
    }
  }

  // 당첨번호 배열로 저장
  getLottoNumbers() {
    const lottoList = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      lottoList.push(this.#lottos[i].getNumbers());
    }
    return lottoList;
  }
}

export default SetGame;
