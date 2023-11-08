import { Console } from "@woowacourse/mission-utils";

class OutputView {
  async printPurchaseAmount(input) {
    await Console.print(`${input}개를 구매했습니다.`);
  }

  async printLottoResult(arr) {
    for (const value of arr) {
      await Console.print(value);
    }
  }
}

export default OutputView;
