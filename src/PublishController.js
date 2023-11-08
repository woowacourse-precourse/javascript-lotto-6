import { LOTTO_PRICE, MESSAGES, LOTTO_NUMBERS_COUNT, MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER } from "./constants.js";
import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class PublishController {
  static checkPriceDivisible(price) {
    const remainder = price % LOTTO_PRICE;

    return remainder === 0;
  }

  static calculateLottoQuantity(price) {
    if (!PublishController.checkPriceDivisible(price)) {
      throw Error(MESSAGES.priceNotDivisibleError);
    }

    const lottoQuantity = Math.floor(price / LOTTO_PRICE);

    return lottoQuantity;
  }

  static publish(quantity) {
    const lottos = [];

    for(let i = 0; i < quantity; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_LOTTO_NUMBER,
        MAX_LOTTO_NUMBER,
        LOTTO_NUMBERS_COUNT
      );

      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }

    return lottos;
  }

  static convertPriceToLottos(price) {
    const quantity = PublishController.calculateLottoQuantity(price);
    const lottos = PublishController.publish(quantity);

    return lottos;
  }
}

export default PublishController;
