import { MissionUtils } from '@woowacourse/mission-utils';

class LottoPurchase {
  static async getLottoAmount() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
    return USER_INPUT_PRICE;
  }

  static validateAmount(lottoAmount) {
    if (
      isNaN(lottoAmount) ||
      !lottoAmount ||
      lottoAmount < 1000 ||
      lottoAmount % 1000 !== 0
    ) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    }
  }

  static async purchaseLottoAmount() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await LottoPurchase.getLottoAmount();
        LottoPurchase.validateAmount(purchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return purchaseAmount;
  }
}

export default LottoPurchase;
