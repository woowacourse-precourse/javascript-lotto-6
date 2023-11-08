import { Random } from '@woowacourse/mission-utils';
import LottoNumberGenerationStrategy from './LottoNumberGenerationStrategy.js';
import { GAME_RULE } from '../../constants/gameRule.js';

class RandomNumberStrategy extends LottoNumberGenerationStrategy {
  generateLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      GAME_RULE.START_LOTTO_NUMBER,
      GAME_RULE.END_LOTTO_NUMBER,
      GAME_RULE.LOTTO_NUMBER_COUNT,
    );
  }
}

export default RandomNumberStrategy;
