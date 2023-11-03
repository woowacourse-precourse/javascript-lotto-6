import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {

  static printQuantity(quantity) {
    MissionUtils.Console.print(`${quantity/1000}개를 구매했습니다.`);
  }

  static printLottoTickets(tickets) {
    const formattedTickets = tickets
      .map((ticket) => `[${ticket.join(", ")}]`)
      .join("\n");
    MissionUtils.Console.print(formattedTickets);
  }
}
export default OutputView;
