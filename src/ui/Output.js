import { Console } from '@woowacourse/mission-utils';

// 객체를 받아 값 출력
export const Outputs = {
  printLottoNumber(lottos = {}) {
    Object.values(lottos).forEach((items) => {
      Console.print(`[${items.sort((a, b) => a - b).join(', ')}]`);
    });
  },

  printStatistics(bills = {}) {
    Console.print(`당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${bills.three ?? 0}개`);
    Console.print(`4개 일치 (50,000원) - ${bills.four ?? 0}개`);
    Console.print(`5개 일치 (1,500,000원) - ${bills.five ?? 0}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${bills.bonus ?? 0}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${bills.six ?? 0}개`);
  },

  printRateOfReturn(rate = 0) {
    Console.print(`총 수익률은 ${rate ?? 0}%입니다.`);
  },
};
