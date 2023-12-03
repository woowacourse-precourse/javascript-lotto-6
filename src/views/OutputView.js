import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printTickets(tickets) {
    const quantity = tickets.length;
    Console.print(`${quantity}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(ticket);
    });
  },
  printMatchedResult(result) {
    const { three, four, five, bonusFive, six } = result;
    Console.print(`당첨 통계
---
3개 일치 (5,000원) - ${three}개
4개 일치 (50,000원) - ${four}개
5개 일치 (1,500,000원) - ${five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonusFive}개
6개 일치 (2,000,000,000원) - ${six}개`);
  },
  printProfitability(profitabiltity) {
    Console.print(`총 수익률은 ${profitabiltity}%입니다.`);
  },
};
export default OutputView;
