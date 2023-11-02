import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constant.js';

const OutputView = {
  printLottoNumbers(count, message) {
    Console.print(`\n${count}${MESSAGE.buyLotto}`);
    Console.print(message);
  },
};

export default OutputView;
