import { Console } from "@woowacourse/mission-utils";

class UserOutput {
  static displayPurchase(numberOfTickets, lottoNumbers) {
    let str = "\n";
    str += `${numberOfTickets}개를 구매했습니다. \n`;
    str += `${lottoNumbers.map((item) => `[${item.join(", ")}]`).join("\n")}\n`;
    Console.print(str);
  }

  static displayStatistics(statistics) {
    const str = `\n당첨 통계\n---${statistics}`;
    Console.print(str);
  }

  static displayRevenue(revenue) {
    const str = `총 수익률은 ${revenue}%입니다.`;
    Console.print(str);
  }
}

export default UserOutput;
