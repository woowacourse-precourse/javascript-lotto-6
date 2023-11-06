import { Console } from '@woowacourse/mission-utils';
import { EXCEPTION } from '../constants/constants.js';

const OutputView = {
  lottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  },
  moneyError() {
    Console.print(EXCEPTION.MONEY_DIVIDE_ERROR);
  },
};

export default OutputView;
