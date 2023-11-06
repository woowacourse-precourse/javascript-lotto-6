import { Console } from "@woowacourse/mission-utils";
import PRINT_WINNERS from "./PrintWinners.js";

class LottoView {
  async askPayment() {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showLottoNumbers(countOfLotto, lottos) {
    Console.print(`\n${countOfLotto}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.numbers));
  }

  async askWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return input.split(",").map(Number);
  }

  async askBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return Number(input);
  }

  showResults(countWinners) {
    console.log("\n당첨 통계\n---");
    // 당첨 결과를 순서대로 출력하기 위한 키 배열
    const prizeOrder = [
      "MATCH_3",
      "MATCH_4",
      "MATCH_5",
      "MATCH_5_BONUS",
      "MATCH_6",
    ];

    prizeOrder.forEach((key) => {
      const { count, prize, text } = PRINT_WINNERS[key];
      // countWinners 객체에서 해당 키에 해당하는 당첨 개수를 가져옵니다.
      const winnerCount =
        countWinners[key.replace("MATCH_", "").replace("_", "+")] || 0;
      console.log(`${text} (${prize.toLocaleString()}원) - ${winnerCount}개`);
    });
  }
}

export default LottoView;
