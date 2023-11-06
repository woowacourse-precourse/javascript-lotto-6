import { Console } from "@woowacourse/mission-utils";

class LottoView {
  async askPayment() {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  showLottoNumbers(countOfLotto, lottos) {
    Console.print(`\n${countOfLotto}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.numbers));
  }

  async askWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.");
    return input.split(",").map(Number);
  }

  async askBonusNumber() {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.");
    return Number(input);
  }
  showResults(prizeCounts) {
    Console.print("\n당첨 통계\n---");
    const prizeMapping = {
      3: { count: prizeCounts[3] || 0, prize: 5000 },
      4: { count: prizeCounts[4] || 0, prize: 50000 },
      5: { count: prizeCounts[5] || 0, prize: 1500000 },
      "5+1": { count: prizeCounts["5+1"] || 0, prize: 30000000 },
      6: { count: prizeCounts[6] || 0, prize: 2000000000 },
    };

    // 결과 출력
    Object.entries(prizeMapping).forEach(([matchCount, { count, prize }]) => {
      console.log(
        `${matchCount}개 일치 (${prize.toLocaleString()}원) - ${count}개`
      );
    });
  }
}

export default LottoView;
