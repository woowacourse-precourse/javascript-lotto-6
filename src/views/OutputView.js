import { Console } from '@woowacourse/mission-utils';
import { EXCEPTION } from '../constants/constants.js';

const OutputView = {
  async lottoCount(count) {
    await Console.print(`\n${count}개를 구매했습니다.`);
  },
  moneyError() {
    Console.print(EXCEPTION.MONEY_DIVIDE_ERROR);
  },
  lottoList(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },
};

export default OutputView;
