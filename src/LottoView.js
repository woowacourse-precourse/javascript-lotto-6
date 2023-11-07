import { Console } from "@woowacourse/mission-utils";
import COUNT_WINNERS from "./CountWinners.js";

class LottoView {
  async askPayment() {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showLottoNumbers(countOfLotto, lottos) {
    Console.print(`\n${countOfLotto}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
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
    Console.print("\n당첨 통계\n---");
    const winnerOrder = [3, 4, 5, "5+1", 6];

    winnerOrder.forEach((key) => {
      const { count, prize, text } = COUNT_WINNERS[key];
      const winnerCount = countWinners[key];
      Console.print(`${text} (${prize.toLocaleString()}원) - ${winnerCount}개`);
    });
  }

  showProfitRate(profitRate) {
    Console.print(`\n총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoView;
