import { inputLottoNum, consoleError } from './utils.js';
import { LOTTO_NUMBERS, ERROR_MESSAGE, INPUT_MESSAGE } from './constants.js';

class PurchaseLotto {
  constructor() {
    this.inputPrice = null;
    this.lottoCount = 0;
  }

  // 비동기로 처리해야 할 inputPrice 값을 다시 초기화 하기 위한 함수.
  async initialize() {
    this.inputPrice = await inputLottoNum();
    this.lottoCount = this.inputPrice / LOTTO_NUMBERS.PAY_LOTTO_MONEY;
  }

  async alertPurchaseLotto() {
    if (this.inputPrice % LOTTO_NUMBERS.PAY_LOTTO_MONEY !== 0) {
      return consoleError(ERROR_MESSAGE.UNIT);
    }
    this.countingLotto(this.lottoCount);
  }

  countingLotto(lottoCount) {
    return INPUT_MESSAGE.PURCHASED_MESSAGE(lottoCount);
  }
}

const lotto = new PurchaseLotto();

// 비동기 초기화 메서드 호출
lotto.initialize().then(async () => {
  // 초기화가 완료된 후에 추가 작업을 수행
  console.log(lotto.lottoCount); // 따로 값이 빠지는 지 확인 콘솔.
  const message = await lotto.alertPurchaseLotto();
  console.log(message); // 반환된 메세지 출력하기 위한 콘솔.
});

export default PurchaseLotto;
