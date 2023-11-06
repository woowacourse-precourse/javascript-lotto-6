import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printLottoTicketCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },
  printLottoTicketNumber(numbers) {
    Console.print("[" + numbers.join(", ") + "]");
  },
};

export default OutputView;
