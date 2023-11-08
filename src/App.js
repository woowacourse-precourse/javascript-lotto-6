import { Console, Random } from "@woowacourse/mission-utils";
import LottoService from "./LottoService.js";

class App {

  async play() {
      const lottoService = new LottoService();
      let validate, moneyInput, numberInput, bonusNumberInput;

      moneyInput = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
      validate = lottoService.validateMoney(moneyInput);
      lottoService.buyLotto(moneyInput);

      numberInput = (await Console.readLineAsync("당첨 번호를 입력해 주세요.\n")).split(",").map(n=>Number(n));
      validate = lottoService.validateNumbers(numberInput);
      lottoService.setNumber(numberInput);


      bonusNumberInput = Number(await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
      lottoService.validateBonusNumber(bonusNumberInput);
      lottoService.setBonusNumber(bonusNumberInput)

      const [result, winning] = lottoService.getResult();
      lottoService.printResult(result);
      lottoService.printRateOfReturn(moneyInput, winning);
  }
}

export default App;
