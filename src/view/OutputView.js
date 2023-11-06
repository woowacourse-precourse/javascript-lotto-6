import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  constructor() {}

  printLottoTickets(lottoTickets) {
    Console.print(`\n${lottoTickets.length}개를 구매했습니다.`);
    lottoTickets.forEach((lottoTickets) => Console.print(lottoTickets));
  }
}
