import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
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

    const result = [0, 0, 0, 0, 0];
    myLottos.forEach((lotto) => {
      const winningIndex = lotto.checkLottoWinning(winningNumbers, bonusNumber);
      result[winningIndex]++;
    });

    MissionUtils.Console.print(MESSAGE.result);
    result.forEach((number, index) => {
      switch(index){
        case 0:
          MissionUtils.Console.print(MESSAGE.threeSame(number));
          break;
        case 1:
          MissionUtils.Console.print(MESSAGE.fourSame(number));
          break;
        case 2:
          MissionUtils.Console.print(MESSAGE.fiveSame(number));
          break;
        case 3:
          MissionUtils.Console.print(MESSAGE.fiveAndBonusSame(number));
          break;
        case 4:
          MissionUtils.Console.print(MESSAGE.sixSame(number));
          break;
      }
    });
  }
}

export default App;
