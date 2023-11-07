import { Console } from "@woowacourse/mission-utils";
import { Message } from "../static/Constant.js";
const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },
  printLottoTicketCount(count) {
    Console.print(`\n${count}${Message.LOTTO_TICKET}`);
  },
  printLottoTickets(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      Console.print("[" + numbers[i].join(", ") + "]");
    }
  },
  printLottoWinningStatistics() {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${1}개`);
    Console.print(`4개 일치 (50,000원) - ${2}개`);
    Console.print(`5개 일치 (1,500,000원) - ${3}개`);
    Console.print(`5개 일치, 보너스 볼 일치(30,000,000원) - ${4}개`);
    Console.print(`총 수익률은 ${5}입니다.`);
  },
};

export default OutputView;
