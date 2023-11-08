import Inputs from "./Inputs.js";
import {
  lottoNumbersGenerator,
  printBuyingLottoNumbers,
  calculator,
  printResult,
  profit,
} from "./Game.js";

class App {
  async play() {
    const INPUTS = new Inputs();

    // 1. 구입 금액 입력
    const BUYING_PRICE = await INPUTS.inputPrice();

    // 2. 로또 번호 생성
    const NUMBER_OF_LOTTOS = Math.floor(BUYING_PRICE / 1000);
    const USER_LOTTOS = lottoNumbersGenerator(NUMBER_OF_LOTTOS);
    printBuyingLottoNumbers(USER_LOTTOS);

    // 3. 당첨 번호와 보너스 번호 입력
    const WINNING_LOTTO = await INPUTS.inputWinningNumbers();
    const BONUS_NUMBER = await INPUTS.inputBonusNumber(WINNING_LOTTO);

    // 4. 당첨 결과 계산
    const RESULT = calculator(USER_LOTTOS, WINNING_LOTTO, BONUS_NUMBER);

    // 5. 당첨 결과 출력
    printResult(RESULT);

    // 6. 수익률 출력
    profit(BUYING_PRICE, RESULT);
  }
}

export default App;
