import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요. \n"
    );
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  calculateLottoCount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount / 1000;
  }
}

export default App;
