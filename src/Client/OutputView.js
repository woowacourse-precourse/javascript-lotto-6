/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../Util/Message.js';
import CONSTANTS from '../Util/Constants.js';

const OutputView = {
  outputPurchaseCount(purchaseCount) {
    Console.print(OUTPUT_MESSAGE.purchaseCount(purchaseCount));
  },

  outputUserLotto(userLotto) {
    userLotto.forEach((lotto) => Console.print(lotto));
  },

  outputMessage(message) {
    Console.print(message);
  },

  outputLottoResult(compareResult) {
    Console.print(OUTPUT_MESSAGE.three(compareResult[3] === undefined ? 0 : compareResult[3]));
    Console.print(OUTPUT_MESSAGE.four(compareResult[4] === undefined ? 0 : compareResult[4]));
    Console.print(OUTPUT_MESSAGE.five(compareResult[5] === undefined ? 0 : compareResult[5]));
    Console.print(OUTPUT_MESSAGE.seven(compareResult[7] === undefined ? 0 : compareResult[7]));
    Console.print(OUTPUT_MESSAGE.six(compareResult[6] === undefined ? 0 : compareResult[6]));
  },
};

export default OutputView;
