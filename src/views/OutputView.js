import { Console } from '@woowacourse/mission-utils';
import { EXCEPTION } from '../constants/constants.js';

const WINNING_MESSAGE = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
];

const OutputView = {
  lottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },
  moneyError(error) {
    Console.print(error.message);
  },
  lottoList(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },
  statistic(counts) {
    Console.print('\n당첨 통계');
    Console.print('---');
    counts.forEach((count, idx) => {
      Console.print(`${WINNING_MESSAGE[idx]}${count}개`);
    });
  },
  profit(percent) {
    Console.print(`총 수익률은 ${percent}%입니다.`);
  },
};

export default OutputView;
