import { Random } from '@woowacourse/mission-utils';
import GAME from '../constants/Game';

const randomLottoGenerator = () => {
  return Random.pickUniqueNumbersInRange(
    GAME.lottoMin,
    GAME.lottoMax,
    GAME.lottoLength,
  );
};

export default randomLottoGenerator;
