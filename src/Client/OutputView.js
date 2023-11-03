/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../Util/Message.js';

const OutputView = {
  outputPurchaseCount(purchaseCount) {
    Console.print(OUTPUT_MESSAGE.purchaseCount(purchaseCount));
  },

  outputUserLotto(userLotto) {
    userLotto.forEach(lotto => Console.print(lotto));
  },

  outputError(error) {
    Console.print(error);
  },
};

export default OutputView;
