import { MissionUtils } from '@woowacourse/mission-utils';

class BuyLotto {
  LOTTO_PRICE;
  DAILY_LIMIT_PRICE;
  NUMBER_CHECK;

  constructor(LOTTO_PRICE, DAILY_LIMIT_PRICE, NUMBER_CHECK) {
    this.LOTTO_PRICE = LOTTO_PRICE;
    this.DAILY_LIMIT_PRICE = DAILY_LIMIT_PRICE;
    this.NUMBER_CHECK = NUMBER_CHECK;
  }

  async inputPurchaseAmount() {
    const purchaseAmout = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return purchaseAmout;
  }

  async validateInputPurchaseAmount(purchaseAmout) {
    if (!this.NUMBER_CHECK.test(purchaseAmout)) {
      throw new Error('[ERROR] 잘못된 입력입니다. 숫자만 입력해주세요.');
    } else if (purchaseAmout < this.LOTTO_PRICE) {
      throw new Error('[ERROR] 최소 1,000원 이상의 금액을 입력해주세요.');
    } else if (purchaseAmout > this.DAILY_LIMIT_PRICE) {
      throw new Error('[ERROR] 한 회차에 10만원을 초과할 수 없습니다.');
    } else if (purchaseAmout % this.LOTTO_PRICE != 0) {
      throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    }
  }
}

export default BuyLotto;
