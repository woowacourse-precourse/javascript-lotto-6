import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    if (lottoAmount % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위입니다.");
  }
}

export default App;
