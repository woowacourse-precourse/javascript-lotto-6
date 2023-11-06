import { Console } from "@woowacourse/mission-utils";

class LottoView {
  createPurchaseInfoString(numberOfSets, lottoNumbers) {
    const formattedNumbers = lottoNumbers
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");
    return `${numberOfSets}개를 구매했습니다. \n${formattedNumbers}`;
  }

  createStatisticsString(statistics) {
    const statisticsStrings = [];
    statisticsStrings.push("당첨 통계");
    statisticsStrings.push("---");

    Object.entries(statistics).forEach(([key, value]) => {
      switch (key) {
        case "3":
          statisticsStrings.push(`3개 일치 (5,000원) - ${value}개`);
          break;
        case "4":
          statisticsStrings.push(`4개 일치 (50,000원) - ${value}개`);
          break;
        case "5":
          statisticsStrings.push(`5개 일치 (1,500,000원) - ${value}개`);
          break;
        case "5+bonus":
          statisticsStrings.push(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개`
          );
          break;
        case "6":
          statisticsStrings.push(`6개 일치 (2,000,000,000원) - ${value}개`);
          break;
        case "totalPrize":
          break;
        case "profitRate":
          statisticsStrings.push(`총 수익률은 ${value}%입니다.`);
          break;
        default:
          statisticsStrings.push(`${key}개 일치 - ${value}개`);
          break;
      }
    });

    return statisticsStrings.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
