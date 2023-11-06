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
}

export default BuyLotto;
