import { Console } from "@woowacourse/mission-utils";
import AmountInput from "./View/AmountInput";
import numberInput from "./View/numberInput";
import printResult from "./View/printResult";
import calculateLottoNumber from "./CalculateLottoNumber";
import calculateProfit from "./calculateProfit";
import buyLotto from "./buyLotto";
import getStatistics from "./getStatistics";
class App {
  async play() {
    // 구입 금액 입력
    const amount = await AmountInput();
    const lottoNumber = calculateLottoNumber(amount);
    Console.print(`${lottoNumber}개를 구매했습니다.`);
    // 로또 번호 생성
    const lottoList = [];
    buyLotto(lottoList, lottoNumber);
    // 당첨 번호 입력
    const [winningNumbers, bonusNumber] = await numberInput();
    // 로또 결과 통계
    const lottoResult = { 3: 0, 4: 0, 5: 0, "5bonus": 0, 6: 0 };
    getStatistics(lottoList, lottoResult, winningNumbers, bonusNumber);
    // 최종 결과 출력
    const profit = calculateProfit(amount, lottoResult);
    printResult(lottoResult, profit);
  }
}

export default App;
