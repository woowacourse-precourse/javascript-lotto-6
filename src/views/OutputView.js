import { Console } from '@woowacourse/mission-utils';
import { EXCEPTION, WINNING_MESSAGE } from '../constants/constants.js';

const OutputView = {
  lottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },
  moneyError() {
    Console.print(EXCEPTION.MONEY_DIVIDE_ERROR);
  },
  lottoList(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },
  winning() {
    Console.print('\n당첨 통계');
    Console.print('---');
  },
  statistic(count, idx) {
    Console.print(`${WINNING_MESSAGE[idx]}${count}개`);
  },
  profit(percent) {
    Console.print(`총 수익률은 ${percent}%입니다.`);
  },
};

export default OutputView;
