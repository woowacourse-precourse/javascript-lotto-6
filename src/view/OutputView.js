import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  userLottos(lotto) {
    Console.print(MESSAGES.printLotto(lotto));
  },

  lineBreak() {
    OutputView.print('\n');
  },

  error(error) {
    Console.print(error);
  },
});

export default OutputView;
