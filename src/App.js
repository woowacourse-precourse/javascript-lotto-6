import {
  inputMoney,
  inputWinning,
  inputBonusNumber,
} from "./common/InputUtils.js";
import { printTiceks, printLottos, printResult } from "./common/PrintUtils.js";
import { repeatMakeLotto } from "./common/GeneratorLotto.js";
import { checkResult } from "./common/Result.js";

class App {
  async play() {
    const money = await inputMoney();
    let lottoTicket = printTiceks(money);
    const lottos = repeatMakeLotto(lottoTicket);

    printLottos(lottos);
    const winningNumbers = await inputWinning();
    const bonusNumber = await inputBonusNumber(winningNumbers);
    const result = checkResult(lottos, winningNumbers, bonusNumber);
    printResult(result, money);
  }
}

export default App;
const app = new App();
app.play();
