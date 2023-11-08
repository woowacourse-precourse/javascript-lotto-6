import { MissionUtils } from '@woowacourse/mission-utils';
import InputError from './InputError.js';
import { ERROR_MESSAGE } from './constants.js';

class BuyLotto {
  lottoPrice;
  dailyLimitPrice;
  numberCheck;

  constructor(lottoPrice, dailyLimitPrice, numberCheck) {
    this.LOTTO_PRICE = lottoPrice;
    this.DAILY_LIMIT_PRICE = dailyLimitPrice;
  }

  // async inputPurchaseAmount() {
  //   const purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

  //   return purchaseAmount;
  // }

  validateInputPurchaseAmount(parsedAmount) {
    if (isNaN(parsedAmount)) {
      throw new InputError(ERROR_MESSAGE.notNumber);
    } else if (parsedAmount < this.LOTTO_PRICE) {
      throw new InputError(ERROR_MESSAGE.oneThousandMore);
    } else if (parsedAmount > this.DAILY_LIMIT_PRICE) {
      throw new InputError(ERROR_MESSAGE.dailyLimitExceeded);
    } else if (parsedAmount % this.LOTTO_PRICE != 0) {
      throw new InputError(ERROR_MESSAGE.oneThousandUnit);
    }
  }

  async inputPurchaseAmount() {
    const parsedAmount = await MissionUtils.Console.readLineAsync('\n구입금액을 입력해 주세요.\n');

    try {
      this.validateInputPurchaseAmount(parsedAmount);
      return parsedAmount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.inputPurchaseAmount();
    }
  }

  async getLottoNumbers(purchaseAmount) {
    const lottoQuantity = purchaseAmount / 1000;
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
    const inputPurchaseAmount = await this.inputPurchaseAmount();
    const lottoNumbers = await this.getLottoNumbers(inputPurchaseAmount);

    return lottoNumbers;
  }
}

export default BuyLotto;
