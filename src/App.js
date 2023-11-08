import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  totalLotto = [];

  async payAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    // TODO: 숫자인지 확인
    return amount;
  }
  quantityLotto(amount) {
    // TODO: 1000으로 나눠 떨어지는지 확인
    return amount / 1000;
  }
  perchaseLotto(number) {
    MissionUtils.Console.print(`\n${number}를 구입했습니다.`);

    for (let i = 0; i < number; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(number);
      this.totalLotto.push(new Lotto(number));
    }
  }
  async play() {
    const amount = await this.payAmount();
    const quantity = this.quantityLotto(amount);
    this.perchaseLotto(quantity);
  }
}

export default App;
