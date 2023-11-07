import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요. \n"
    );
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    Console.print(`${lottoCount}개를 구매했습니다.`);
    const lottos = this.createLottoNumbers(lottoCount);
    lottos.forEach((lotto) => Console.print(lotto.numbers));
  }

  calculateLottoCount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount / 1000;
  }

  createLottoNumbers(count) {
    return Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }
}

export default App;
