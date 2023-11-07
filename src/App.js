import { Console } from "@woowacourse/mission-utils";
import AmountInput from "./View/AmountInput";
import Lotto from "./Lotto";
import makeRandomNumbers from "./makeRandomNumbers";
import calculateLottoNumber from "./calculateLottoNumber";
class App {
  async play() {
    const amount = await AmountInput();
    const lottoNumber = calculateLottoNumber(amount);
    Console.print(`${lottoNumber}개를 구매했습니다.`);

    const lottoList = [];
    for (let i = 0; i < lottoNumber; i++) {
      const sortedRandomNumbers = makeRandomNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedRandomNumbers.join(", ")}]`);
      lottoList.push(new Lotto(sortedRandomNumbers));
    }
  }
}

export default App;
