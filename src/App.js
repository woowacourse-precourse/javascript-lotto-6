import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요. \n"
    );

    const lottoCount = Math.floor(purchaseAmount / 1000);
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = PickLottoNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = winningNumbersInput
      .split(",")
      .map((number) => parseInt(number.trim()));
    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = parseInt(bonusNumberInput.trim(), 10);

    const results = lottos.map((lotto) => {
      const numbers = lotto.getNumbers();
      const matchCount = numbers.filter((number) =>
        winningNumbers.includes(number)
      ).length;
      const bonusMatch = numbers.includes(bonusNumber);

      if (matchCount === 6) return "6";
      if (matchCount === 5 && bonusMatch) return "5+1";
      if (matchCount === 5) return "5";
      if (matchCount === 4) return "4";
      if (matchCount === 3) return "3";
      return "꽝";
    });

    const resultCounts = results.reduce((countByResult, result) => {
      countByResult[result] = (countByResult[result] || 0) + 1;
      return countByResult;
    }, {});

    const prizeMessages = [
      `3개 일치 (5,000원) - ${resultCounts["3"] || 0}개`,
      `4개 일치 (50,000원) - ${resultCounts["4"] || 0}개`,
      `5개 일치 (1,500,000원) - ${resultCounts["5"] || 0}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCounts["5+1"] || 0}개`,
      `6개 일치 (2,000,000,000원) - ${resultCounts["6"] || 0}개`,
    ];

    Console.print("\n당첨 통계\n---");
    prizeMessages.forEach((message) => Console.print(message));
  }
}

const PickLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

export default App;
