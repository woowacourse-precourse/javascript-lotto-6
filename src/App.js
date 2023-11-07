import Inputs from "./Inputs.js";
import {
  lottoNumbersGenerator,
  printBuyingLottoNumbers,
  calculator,
  printResult,
  profit,
} from "./game.js";

class App {
  async play() {
    const inputs = new Inputs();

    // 1. 구입 금액 입력
    const buyingAmount = await inputs.inputPrice();

    // 2. 로또 번호 생성
    const numberOfLottos = Math.floor(buyingAmount / 1000);
    const lottos = lottoNumbersGenerator(numberOfLottos);
    printBuyingLottoNumbers(lottos);

    // 3. 당첨 번호와 보너스 번호 입력
    const winningNumbers = await inputs.inputWinningNumbers();
    const bonusNumber = await inputs.inputBonusNumber(winningNumbers);

    // 4. 당첨 결과 계산
    const result = calculator(lottos, winningNumbers, bonusNumber);

    // 5. 당첨 결과 출력
    printResult(result);

    // 6. 수익률 출력
    profit(buyingAmount, result);
  }
}

export default App;
