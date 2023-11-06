import { Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './inputView.js';
import { LOTTO_MESSAGE } from '../Constants/Constants.js';
import Publish from '../Publish.js';

const OUTPUT_VIEW = {
  async outputLottoCount(count) {
    Console.print(LOTTO_MESSAGE.BUY_LOTTO(count));
  },
};

export default OUTPUT_VIEW;
