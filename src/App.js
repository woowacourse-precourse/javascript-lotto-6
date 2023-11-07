import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Message.js";

class App {
  async play() {
    const userInput = new UserInput();
    const money = await userInput.getInputMoney();
    let countOfLottos = money / 1000;
    MissionUtils.Console.print(MESSAGE.numberOfLottos(countOfLottos));
    
    const myLottos = [];
    while(countOfLottos--){
      const newLotto = Lotto.makeLotto();
      myLottos.push(newLotto);
    }
    myLottos.forEach((lotto) => MissionUtils.Console.print(lotto.getLotto()));

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
