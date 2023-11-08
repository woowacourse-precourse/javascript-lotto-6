import { Console } from '@woowacourse/mission-utils';
//기능7. 수익률
export function rateprint(output, buyinput) {
  // prettier-ignore
  Console.print(
    `총 수익률은 ${
      Math.round(
        ((5000 * output['5'] +
          50000 * output['4'] +
          1500000 * output['3'] +
          30000000 * output['2'] +
          2000000000 * output['1']) /
          (buyinput * 1000)) *1000,2) / 10}%입니다.`);
}
