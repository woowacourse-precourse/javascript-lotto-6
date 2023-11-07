import { Console } from '@woowacourse/mission-utils';

class Machine {
  CalculatorOfLottoAmount(money) {
    const amount = Math.floor(money / 1000);
    Console.print(`${amount}개를 구매했습니다.`);
    return amount;
  }
}

export default Machine;
