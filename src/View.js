import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import ERROR_MESSAGE from "./Errors.js";

class View {
  static #INPUT_MONEY = "구입금액을 입력해 주세요.\n";
  static #COUNT_LOTTO_QUERY = "개를 구매했습니다.";
  static WIN_STATISTICS_HEADER = "당첨 통계\n---";

  static async askInputMoney() {
    let answer;
    let userInputValid = false;

    while (!userInputValid) {
      try {
        answer = await Console.readLineAsync(View.#INPUT_MONEY);
        Validator.validateInputMoney(answer);
        Validator.validateMoneyUnit(answer);
        userInputValid = true;
      } catch (error) {
        MissionUtils.Console.print(ERROR_MESSAGE.repeatMoney);
      }
    }

    return answer;
  }

  static async printLottoCount(numberOfTickets) {
    MissionUtils.Console.print(numberOfTickets + View.#COUNT_LOTTO_QUERY);
  }

  static async showTickets(tickets) {
    tickets.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.join(", ")}]`);
    });
  }

  static async askWinningNum() {
    return await LottoStore.askWinningNum();
  }

  static async askBonusNum() {
    return await LottoStore.askBonusNum();
  }

  static calculateRewardStatistics(calculateEarningResults) {
    const statisticsOrder = [3, 4, 5, "5+1", 6];
    const statisticsQuery = {
      3: "3개 일치 (5,000원) - ",
      4: "4개 일치 (50,000원) - ",
      5: "5개 일치 (1,500,000원) - ",
      "5+1": "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      6: "6개 일치 (2,000,000,000원) - ",
    };

    const statisticResult = statisticsOrder.map((matchCount) => {
      const count = calculateEarningResults.countResults[matchCount] || 0;
      return statisticsQuery[matchCount] + count + "개";
    });

    statisticResult.forEach((line) => {
      MissionUtils.Console.print(line);
    });
  }

  static calculateReturn(calculateEarningResults, inputMoney) {
    const totalReturn = calculateEarningResults.totalEarnings;
    const isValidCount = calculateEarningResults.countResults;
    if (isValidCount) {
      const rateOfReturn = (totalReturn / inputMoney) * 100;
      return `${Number(rateOfReturn.toFixed(2))}%`;
    }
  }

  static async printTotalReward(result, inputMoney) {
    MissionUtils.Console.print(this.WIN_STATISTICS_HEADER);
    View.calculateRewardStatistics(result);
    const returnPrint = View.calculateReturn(result, inputMoney);
    MissionUtils.Console.print(`총 수익률은 ${returnPrint}입니다.`);
  }
}

export default View;
