import { inputLottoNum, parchasedLotto, consoleError } from './utils.js';
import { LOTTO_NUMBERS, ERROR_MESSAGE, INPUT_MESSAGE } from './constants.js';

class PurchaseLotto {
  constructor() {
    this.inputPrice = null;
    this.lottoCount = 0;
    this.initialized = false;
  }

  // 비동기로 처리해야 할 inputPrice 값을 다시 초기화 하기 위한 함수.
  async initialize() {
    if (!this.initialized) {
      this.inputPrice = await inputLottoNum();
      this.lottoCount = Math.floor(
        this.inputPrice / LOTTO_NUMBERS.PAY_LOTTO_MONEY,
      );
      this.initialized = true;
    }
  }

  getLottoCount() {
    return this.lottoCount;
  }

  async alertPurchaseLotto() {
    if (this.inputPrice % LOTTO_NUMBERS.PAY_LOTTO_MONEY !== 0) {
      return ERROR_MESSAGE.UNIT;
    }
    return this.countingLotto(this.lottoCount);
  }

  countingLotto(lottoCount) {
    return parchasedLotto(lottoCount);
  }
}

export { PurchaseLotto };
