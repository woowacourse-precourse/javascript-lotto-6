import { MissionUtils } from '@woowacourse/mission-utils';
import GAME_SETTINGS from '../constants/LottoSettings.js';
import Lotto from './Lotto.js';

const { LOTTO_PRICE, MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH } = GAME_SETTINGS;

class PurchasedLotto {
  createLottos(purchaseCost) {
    const lottoCount = purchaseCost / LOTTO_PRICE;
    const lottos = Array.from({ length: lottoCount }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        NUMBER_LENGTH,
      );
      return new Lotto(numbers).numbers;
    });
    return lottos;
  }
}

export default PurchasedLotto;
