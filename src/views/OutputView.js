import { Console } from "@woowacourse/mission-utils";

const Output = {
  count(number) {
    Console.print(`${number}개를 구매했습니다.`);
  },
  lotto(numbers) {
    Console.print(`${numbers}`);
  },
  history(number) {
    Console.print(`3개 일치 (5,000원) - ${number}개`);
    Console.print(`4개 일치 (50,000원) - ${number}개`);
    Console.print(`5개 일치 (1,500,000원) - ${number}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${number}개`);
  },
  profit(number) {
    Console.print(`총 수익률은 ${number}%입니다.`)
  }
}