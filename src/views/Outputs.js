import { Console } from '@woowacourse/mission-utils';
import modifiers from '../utils/modifiers.js';

const printing = (message) => Console.print(message);

const resultsMessage = (result) =>
  `3개 일치 (5,000원) - ${result.fifth}개
4개 일치 (50,000원) - ${result.fourth}개
5개 일치 (1,500,000원) - ${result.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개
6개 일치 (2,000,000,000원) - ${result.first}개`;

const DRAWING = {
  COUNT: (count) => `${count}개를 구매했습니다.`,
};

const RESULTS = {
  WINNERS: (result) => resultsMessage(result),
  EARN_RATE: (revenue, price) =>
    `총 수익률은 ${modifiers.getEarnRate(revenue, price)}%입니다.`,
};

function drawing(count, lottos) {
  printing(DRAWING.COUNT(count));
  for (let i = 0; i < count; i += 1) printing(lottos[i]);
}

function results(result, totalPrice) {
  printing(RESULTS.WINNERS(result.result));
  printing(RESULTS.EARN_RATE(result.revenue, totalPrice));
}

const printMessage = { drawing, results };

export default printMessage;
