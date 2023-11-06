import Lotto from './Lotto.js';
import { PurchaseLotto } from './PurchaseLotto.js';
import { randomNum } from './utils.js';

class LottoList {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.purchaseLotto = new PurchaseLotto();
  }

  makeLotto(lottoNumbers) {
    const lotto = new Lotto(lottoNumbers);

    this.#lottos.push(lotto);
  }

  async lottoCount() {
    await this.purchaseLotto.initialize(); // 비동기 초기화를 기다린 후에
    return this.purchaseLotto.getLottoCount(); // 로또 개수를 반환.
  }

  async createLotto() {
    const count = await this.lottoCount();
    for (let i = 0; i < count; i++) {
      let lottoNumbers = randomNum(); // 로또 번호를 생성하는 함수 호출
      lottoNumbers = lottoNumbers.sort((numA, numB) => numA - numB);
      this.makeLotto(lottoNumbers); // 수정된 부분
    }
    // Set을 사용하지 않고, 바로 #lottos 배열에 저장
    return this.#lottos.map((lotto) => lotto.getNumbers()); // Lotto 객체의 번호를 반환
  }

  async viewLottoList() {
    const theLottoList = await this.createLotto();

    return theLottoList.map((item) => `[${item.join(', ')}]`).join(`\n`);
  }
}

export default LottoList;
