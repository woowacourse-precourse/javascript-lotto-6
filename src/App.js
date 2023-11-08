import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_CONSTANTS, MESSAGE } from "./Message.js";

class App {
  constructor(){
    this.userInput = new UserInput();
    this.money = 0;
    this.countOfLottos = 0;
    this.myLottos = [];
    this.winningLotto = [];
    this.bonusNumber = 0;
    this.lottoResult = new LottoResult();
  }
  async play() {
    [this.money, this.countOfLottos] = await this.userInput.getInputMoney();
    MissionUtils.Console.print(MESSAGE.numberOfLottos(this.countOfLottos));
    
    while(this.countOfLottos--){
      this.myLottos.push(Lotto.makeLotto());
    }
    this.myLottos.forEach((lotto) => MissionUtils.Console.print(`[${[...lotto.getLotto()].join(", ")}]`));

    this.winningLotto = await this.userInput.getInputWinningNumbers();
    this.bonusNumber = await this.userInput.getInputBonusNumber();

    this.myLottos.forEach((lotto) => {
      const winningIndex = lotto.checkLottoWinning(this.winningLotto, this.bonusNumber);
      this.lottoResult.result[winningIndex]++;
    });
    this.lottoResult.printResult(this.money);
  }
}

export default App;
