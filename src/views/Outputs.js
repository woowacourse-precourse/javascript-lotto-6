import { Console } from '@woowacourse/mission-utils';
//  발행한 로또번호 전부 출력
import modifiers from '../utils/modifiers.js';

const resultsMessage = (results) =>
  `3개 일치 (5,000원) - ${results.fifth}개
4개 일치 (50,000원) - ${results.fourth}개
5개 일치 (1,500,000원) - ${results.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개
6개 일치 (2,000,000,000원) - ${results.first}개`;

const printing = (message) => Console.print(message);

const DRAWING_MESSAGE = {
  COUNT: (count) => `${count}개를 구매했습니다.`,
};

const RESULTS_MESSAGE = {
  WINNERS: (results) => resultsMessage(results),
  EARN_RATE: (revenue, price) =>
    `총 수익률은 ${modifiers.getEarnRate(revenue, price)}%입니다.`,
};

const output = { printing, DRAWING_MESSAGE, RESULTS_MESSAGE };

export default output;
