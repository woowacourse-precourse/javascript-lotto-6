import { inputLottoNum, consoleError } from './utils.js';
import Validation from './validation.js';
import { LOTTO_NUMBERS, ERROR_MESSAGE, INPUT_MESSAGE } from './constants.js';

class PurchaseLotto {
  constructor() {
    this.inputPrice = null;
  }

  // 초기화 값에 비동기 값을 할당하기 위한 메서드
  async initialize() {
    this.inputPrice = await inputLottoNum();
  }

  async alertPurchaseLotto() {
    if (this.inputPrice % LOTTO_NUMBERS.PAY_LOTTO_MONEY !== 0) {
      return consoleError(ERROR_MESSAGE.UNIT);
    }

    return this.countingLotto();
  }

  async countingLotto() {
    const lottoCount = this.inputPrice / LOTTO_NUMBERS.PAY_LOTTO_MONEY;
    return INPUT_MESSAGE.PURCHASED_MESSAGE(lottoCount);
  }
}

const lotto = new PurchaseLotto();

// 비동기 초기화 메서드 호출
lotto.initialize().then(() => {
  // 초기화가 완료된 후에 추가 작업을 수행
  lotto.alertPurchaseLotto().then((message) => {
    console.log(message);
  });
});
