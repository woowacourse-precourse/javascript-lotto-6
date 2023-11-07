import { Console, Random } from '@woowacourse/mission-utils';
class Print {
  static printTickets(tickets = []) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }
}
export default Print;
