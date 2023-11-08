import { Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './inputView.js';
import { LOTTO_MESSAGE } from '../Constants/Constants.js';
import Publish from '../Publish.js';

const OUTPUT_VIEW = {
  async outputLottoCount(count) {
    Console.print(LOTTO_MESSAGE.BUY_LOTTO(count));
  },

  async outputRank(rankArr) {
    Console.print(LOTTO_MESSAGE.STATISTICS_MESSAGE);
    for (let i = 5; i > 0; i -= 1) {
      Console.print(
        LOTTO_MESSAGE[`RANKING_${i}`](
          rankArr.filter((element) => element === i).length,
        ),
      );
    }
  },

  async outputStatistics(statistics) {
    Console.print(LOTTO_MESSAGE.LOTTO_STATISTICS(statistics));
  },
};

export default OUTPUT_VIEW;
