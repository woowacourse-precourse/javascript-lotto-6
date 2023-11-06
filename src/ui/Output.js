import { Console } from '@woowacourse/mission-utils';
import CONSTANT from '../constants/constant.js';

// 객체를 받아 값 출력
export const Outputs = {
  printStatistics(bills = {}) {
    Console.print(CONSTANT.outputs.statistics);
    Console.print(
      `3개 일치 (5,000원) - ${bills.three ?? 0}개\n4개 일치 (50,000원) - ${
        bills.four ?? 0
      }개\n5개 일치 (1,500,000원) - ${
        bills.five ?? 0
      }개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        bills.bonus ?? 0
      }개\n6개 일치 (2,000,000,000원) - ${bills.six ?? 0}개`
    );
  },

  printRateOfReturn(rate = 0) {
    Console.print(`총 수익률은 ${rate ?? 0}%입니다.`);
  },
};
