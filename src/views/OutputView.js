import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printPublishCount(count) {
    return Console.print(OUTPUT_MESSAGE.publishCount(count));
  },

  printLine() {
    return Console.print('');
  },
};

export default OutputView;
