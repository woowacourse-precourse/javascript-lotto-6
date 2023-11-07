import { Console } from "@woowacourse/mission-utils";
import AmountInput from "./View/AmountInput";
import numberInput from "./View/numberInput";
import Lotto from "./Lotto";
import makeRandomNumbers from "./makeRandomNumbers";
import calculateLottoNumber from "./calculateLottoNumber";
import getStatistics from "./getStatistics";
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
    const [winningNumbers, bonusNumber] = await numberInput();
    const lottoResult = { 3: 0, 4: 0, 5: 0, "5bonus": 0, 6: 0 };
    lottoList.forEach((lotto) => {
      const [result, bonusResult] = lotto.compareNumbers(
        winningNumbers,
        bonusNumber
      );
      getStatistics(lottoResult, result, bonusResult);
    });
  }
}

export default App;
