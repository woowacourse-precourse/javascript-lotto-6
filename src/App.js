import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { Message } from "./Message.js";

class App {
  async play() {
    const userInput = new UserInput();
    const money = await userInput.getInputMoney();
    let countOfLottos = money / 1000;
    MissionUtils.Console.print(Message.numberOfLottos(countOfLottos));
    
    const myLottos = [];
    while(countOfLottos--){
      myLottos.push(Lotto.makeLotto());
    }
    myLottos.forEach((lotto) => MissionUtils.Console.print(`[${[...lotto.getLotto()].join(", ")}]`));

    const jackpot = await userInput.getInputJackpot();
    const bonusNumber = await userInput.getInputBonusNumber();

    const lottoResult = new LottoResult();
    myLottos.forEach((lotto) => {
      const winningIndex = lotto.checkLottoWinning(jackpot, bonusNumber);
      lottoResult.result[winningIndex]++;
    });
    lottoResult.printResult(money);
  }
}

export default App;