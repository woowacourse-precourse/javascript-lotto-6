import InputManager from "./functions/InputManager.js";
import {
  devideMoneyForLotto,
  profitRate,
  sumOfWinning,
} from "./utils/caculate.js";
import {
  devideIntoCommas,
  stringToNumber,
  stringsToNumbers,
} from "./utils/conversion.js";
import {
  checkBonusBall,
  countMatchingBalls,
  recordRanks,
} from "./utils/condition.js";
import OutputManager from "./functions/OutputManager.js";

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
  }

  async play() {
    const moneyForLotto = await this.inputManager.moneyForLotto();
    const moneyForLottoToNumber = stringToNumber(moneyForLotto);

    const countsOfLotto = devideMoneyForLotto(moneyForLottoToNumber);
    const countsOfLottoToNumber = stringToNumber(countsOfLotto);

    const purchasedLotto = this.outputManager.showLottoNumbers(
      countsOfLottoToNumber
    );
    this.outputManager.showEmptyLine();

    const winningBalls = await this.inputManager.winningBallNumbers();
    const winningBallsArr = devideIntoCommas(winningBalls);
    const winningBallsToNumberArr = stringsToNumbers(winningBallsArr);

    const bonusBall = await this.inputManager.bonusBallNumbers();
    const bonusBallToNumber = stringToNumber(bonusBall);

    const countMatchArr = countMatchingBalls(
      purchasedLotto,
      winningBallsToNumberArr
    );
    const checkBonusArr = checkBonusBall(purchasedLotto, bonusBallToNumber);

    // +1을 해서 1등~N등까지 그대로 적용할 수 있도록 하기(시작값 = 0)
    const rankCounts = recordRanks(countMatchArr, checkBonusArr);
    const winningPrizeSum = sumOfWinning(rankCounts);

    const earnRate = profitRate(moneyForLotto, winningPrizeSum);

    this.outputManager.showStatistics(rankCounts, earnRate);
  }
}

export default App;
