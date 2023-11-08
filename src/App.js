import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_CONSTANTS, MESSAGE } from "./Message.js";

class App {
  async play() {
    const userInput = new UserInput();
    let [money, countOfLottos] = await userInput.getInputMoney();
    MissionUtils.Console.print(MESSAGE.numberOfLottos(countOfLottos));
    
    const myLottos = [];
    while(countOfLottos--){
      myLottos.push(Lotto.makeLotto());
    }
    myLottos.forEach((lotto) => MissionUtils.Console.print(`[${[...lotto.getLotto()].join(", ")}]`));

    const winningNumbers = await userInput.getInputWinningNumbers();
    const bonusNumber = await userInput.getInputBonusNumber();

    const lottoResult = new LottoResult();
    myLottos.forEach((lotto) => {
      const winningIndex = lotto.checkLottoWinning(winningNumbers, bonusNumber);
      lottoResult.result[winningIndex]++;
    });
    lottoResult.printResult(money);
  }
}

export default App;
