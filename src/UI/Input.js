import { MissionUtils } from '@woowacourse/mission-utils';

export default class Input {
  constructor() {}

  async InputPurchaseAmount() {
    const PURCHASE_AMOUNT =
      await MissionUtils.Console.readLineAsync('구입 금액을 입력하세요.');
    return PURCHASE_AMOUNT;
  }
}
