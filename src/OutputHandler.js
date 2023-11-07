import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class OutputHandler {
  static printLottoTicketCount(ticketNumber) {
    Console.print(MESSAGE.OUTPUT.BLANK);
    Console.print(MESSAGE.OUTPUT.LOTTO_TICKETS_COUNT(ticketNumber));
  }

  static printAllLottoNumbers(lottoNumberArray) {
    lottoNumberArray.map((lottoTicket) => {
      Console.print(lottoTicket);
    });
    Console.print(MESSAGE.OUTPUT.BLANK);
  }
}

export default OutputHandler;
