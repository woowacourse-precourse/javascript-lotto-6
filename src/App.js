import Output from "./functions/output";
import { purchaseAmountInput, winNumberInput, bonusNumberInput } from "./functions/input";
import { lottoNumberCompare } from "./functions/LottoNumberCompare";
import { returnCalculation } from "./functions/ReturnCalculation";
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {
    // 구입 금액 입력
    let purchase = await purchaseAmountInput();
    let lottoAmount = (+purchase) / 1000;
    let createdLotto = [];

    // 몇 개 구매했는지 출력
    Output.lottoAmountMessage(lottoAmount);

    // 구매한 만큼 로또 발행
    let lotto = new Lotto();
    createdLotto = lotto.makeLotto(lottoAmount);

    // 로또 출력
    Output.lottoNumbersPrint(createdLotto);

    // 당첨 번호 입력
    const winNumber = await winNumberInput();

    // 보너스 번호 입력
    const bonusNumber = await bonusNumberInput();

    // 로또 번호와 당첨 번호 비교
    const winRank = lottoNumberCompare(createdLotto, winNumber, bonusNumber);

    // 수익률 계산
    const benefit = returnCalculation(purchase, winRank);

    // 결과 출력
    Output.winTotal(winRank);
    Output.rateOfReturnPrint(benefit);

    return;
  }
}

export default App;