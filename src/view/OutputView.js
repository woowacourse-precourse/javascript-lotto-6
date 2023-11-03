import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printQuantity(ticketPrice) {
    MissionUtils.Console.print(`${ticketPrice / 1000}개를 구매했습니다.`);
  }

  static printLottoTickets(tickets) {
    const formattedTickets = tickets
      .map((ticket) => `[${ticket.join(", ")}]`)
      .join("\n");
    MissionUtils.Console.print(formattedTickets);
  }

  static printResultTitle() {
    MissionUtils.Console.print("당첨 통계");
  }

  static printSeparator() {
    MissionUtils.Console.print("---");
  }

  static formatResults(result) {
    const formattedResults = [];
    formattedResults.push(`3개 일치 (5,000원) - ${result["5등"]}개`);
    formattedResults.push(`4개 일치 (50,000원) - ${result["4등"]}개`);
    formattedResults.push(`5개 일치 (1,500,000원) - ${result["3등"]}개`);
    formattedResults.push(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["2등"]}개`
    );
    formattedResults.push(`6개 일치 (2,000,000,000원) - ${result["1등"]}개`);
    MissionUtils.Console.print(formattedResults.join("\n"));
  }
}
export default OutputView;
