import { Console } from "@woowacourse/mission-utils";

class LottoView {
  displayStatistics(statistics) {
    Console.print("당첨 통계");
    Console.print("---");

    Object.entries(statistics).forEach(([key, value]) => {
      switch (key) {
        case "3":
          Console.print(`3개 일치 (5,000원) - ${value}개`);
          break;
        case "4":
          Console.print(`4개 일치 (50,000원) - ${value}개`);
          break;
        case "5":
          Console.print(`5개 일치 (1,500,000원) - ${value}개`);
          break;
        case "5+bonus":
          Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개`);
          break;
        case "6":
          Console.print(`6개 일치 (2,000,000,000원) - ${value}개`);
          break;
        case "totalPrize":
          break;
        case "profitRate":
          Console.print(`총 수익률은 ${value}%입니다.`);
          break;
        default:
          Console.print(`${key}개 일치 - ${value}개`);
          break;
      }
    });
  }
}

export default LottoView;
