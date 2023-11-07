import { Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './inputView.js';
import { LOTTO_MESSAGE } from '../Constants/Constants.js';
import Publish from '../Publish.js';

const OUTPUT_VIEW = {
  async outputLottoCount(count) {
    Console.print(LOTTO_MESSAGE.BUY_LOTTO(count));
  },

  async outputRank(rankArr) {
    for (let i = 1; i <= 5; i += 1) {
      Console.print(
        LOTTO_MESSAGE[`RANKING_${i}`](
          rankArr.filter((element) => element === i).length,
        ),
      );
    }
  },
};

export default OUTPUT_VIEW;
