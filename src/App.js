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

    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    const winningNumbersInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요. \n"
    );
    const winningNumbers = winningNumbersInput
      .split(",")
      .map((number) => parseInt(number.trim()));
    const bonusNumbers = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요. \n"
    );
  }
}

const PickLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

export default App;
