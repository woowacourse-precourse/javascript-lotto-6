import { Console } from "@woowacourse/mission-utils";

class LottoView {
  async askPayment() {
    return Console.readLineAsync("구입금액을 입력해 주세요.");
  }

  showLottoNumbers(lottos) {
    lottos.forEach((lotto) => Console.print(lotto.numbers));
  }

  async askWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    return input.split(",").map(Number);
  }

  async askBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    return Number(input);
  }
  showResults(results) {
    results.forEach((result) => {
      console.log(
        `${result.count}개 일치${result.bonus ? ", 보너스 볼 일치" : ""}  ${
          result.lottoNumbers
        }`
      );
    });
  }
}

export default LottoView;
