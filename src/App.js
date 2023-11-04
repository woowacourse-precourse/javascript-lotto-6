import OutputManager from "./functions/OutputManager.js";
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
import ValidateManager from "./functions/validateManager.js";
import LottoGameManager from "./functions/LottoGameManager.js";

class App {
  constructor() {
    this.outputManager = new OutputManager();
    this.validateManager = new ValidateManager();
    this.lottoGameManager = new LottoGameManager();
  }

  async play() {
    try {
      const moneyForLotto = await this.validateManager.getMoneyForLotto();
      const moneyForLottoToNumber = stringToNumber(moneyForLotto);
      const countsOfLotto = devideMoneyForLotto(moneyForLottoToNumber);
      const countsOfLottoToNumber = stringToNumber(countsOfLotto);
      this.outputManager.showPurchaseAmount(countsOfLotto);

      const purchasedLotto = this.outputManager.showLottoNumbers(
        countsOfLottoToNumber
      );
      this.outputManager.showEmptyLine();

      const winningBalls = await this.validateManager.getWinningBalls();
      const winningBallsArr = devideIntoCommas(winningBalls);
      const winningBallsToNumberArr = stringsToNumbers(winningBallsArr);

      const bonusBall = await this.validateManager.getBonusBall();
      const bonusBallToNumber = stringToNumber(bonusBall);

      const countMatchArr = countMatchingBalls(
        purchasedLotto,
        winningBallsToNumberArr
      );
      const checkBonusArr = checkBonusBall(purchasedLotto, bonusBallToNumber);

      const rankCounts = recordRanks(countMatchArr, checkBonusArr);
      const winningPrizeSum = sumOfWinning(rankCounts);

      const earnRate = profitRate(moneyForLotto, winningPrizeSum);

      this.outputManager.showStatistics(rankCounts, earnRate);
    } catch (error) {
      this.outputManager.showError(error.message);
    }
  }
}

export default App;
