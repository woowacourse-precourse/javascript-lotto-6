import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSTANT_VALUE, ERROR_MESSAGE } from './constants.js';
import InputError from './InputError.js';

class BuyLotto {
  lottoPrice;
  dailyLimitPrice;
  numberCheck;

  constructor(lottoPrice, dailyLimitPrice, numberCheck) {
    this.LOTTO_PRICE = lottoPrice;
    this.DAILY_LIMIT_PRICE = dailyLimitPrice;
    this.NUMBER_CHECK = numberCheck;
  }

  async inputPurchaseAmount() {
    const purchaseAmout = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return purchaseAmout;
  }

  async validateInputPurchaseAmount(purchaseAmout) {
    if (!this.NUMBER_CHECK.test(purchaseAmout)) {
      throw new InputError(ERROR_MESSAGE.notNumber);
    } else if (purchaseAmout < this.LOTTO_PRICE) {
      throw new InputError(ERROR_MESSAGE.oneThousandMore);
    } else if (purchaseAmout > this.DAILY_LIMIT_PRICE) {
      throw new InputError(ERROR_MESSAGE.dailyLimitExceeded);
    } else if (purchaseAmout % this.LOTTO_PRICE != 0) {
      throw new InputError(ERROR_MESSAGE.oneThousandUnit);
    }
  }

  async getLottoNumbers(purchaseAmout) {
    const lottoQuantity = purchaseAmout / 1000;
    const lottoNumberArray = [];

    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    for (let i = 0; i < lottoQuantity; i++) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      randomNumber.sort((a, b) => a - b);
      lottoNumberArray.push(randomNumber);

      MissionUtils.Console.print(`[${randomNumber.join(', ')}]`);
    }

    return lottoNumberArray;
  }

  async start() {
    const purchaseAmount = await this.inputPurchaseAmount();
    await this.validateInputPurchaseAmount(purchaseAmount);
    const lottoNumbers = await this.getLottoNumbers(purchaseAmount);

    return lottoNumbers;
  }
}

export default BuyLotto;
