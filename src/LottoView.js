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
  showResults(results) {
    Console.print("\n당첨 통계\n---");
    results.forEach((result) => {
      Console.print(
        `${result.count}개 일치${result.bonus ? ", 보너스 볼 일치" : ""}  ${
          result.lottoNumbers
        }`
      );
    });
  }
}

export default LottoView;
