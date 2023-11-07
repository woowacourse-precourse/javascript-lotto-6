import OutputManager from "./OutputManager.js";
import ValidateManager from "./ValidateManager.js";
import {
  divideMoneyForLotto,
  profitRate,
  sumOfWinning,
} from "../utils/caculate.js";
import {
  divideIntoCommas,
  stringToNumber,
  stringsToNumbers,
} from "../utils/conversion.js";
import {
  checkBonusBall,
  countMatchingBalls,
  recordRanks,
} from "../utils/condition.js";

class LottoGameManager {
  constructor() {
    this.validateManager = new ValidateManager();
    this.outputManager = new OutputManager();
  }
  // 여기서 메서드를 게임의 단계별로 묶여서 관리
  async purchaseLotto() {
    try {
      const moneyForLotto = await this.validateManager.getMoneyForLotto();
      const moneyForLottoToNumber = stringToNumber(moneyForLotto);
      const countsOfLotto = divideMoneyForLotto(moneyForLottoToNumber);
      const countsOfLottoToNumber = stringToNumber(countsOfLotto);
      this.outputManager.showPurchaseAmount(countsOfLotto);

      const purchasedLotto = this.outputManager.showLottoNumbers(
        countsOfLottoToNumber
      );
      this.outputManager.showEmptyLine();
      return [moneyForLottoToNumber, purchasedLotto];
    } catch (error) {
      throw error;
    }
  }

  async setWinningNumbers() {
    try {
      const winningBalls = await this.validateManager.getWinningBalls();
      const winningBallsArr = divideIntoCommas(winningBalls);
      const winningBallsToNumberArr = stringsToNumbers(winningBallsArr);
      return winningBallsToNumberArr;
    } catch (error) {
      throw error;
    }
  }

  async setBonusNumber(winningBalls) {
    try {
      const bonusBall = await this.validateManager.getBonusBall(winningBalls);
      const bonusBallToNumber = stringToNumber(bonusBall);
      return bonusBallToNumber;
    } catch (error) {
      throw error;
    }
  }

  checkIsWinning(purchasedLotto, winningBalls, bonusBall) {
    try {
      const countMatchArr = countMatchingBalls(purchasedLotto, winningBalls);
      const checkBonusArr = checkBonusBall(purchasedLotto, bonusBall);

      const rankCounts = recordRanks(countMatchArr, checkBonusArr);
      const winningPrizeSum = sumOfWinning(rankCounts);

      return [rankCounts, winningPrizeSum];
    } catch (error) {
      throw error;
    }
  }

  showResult(moneyForLotto, winningPrizeSum, rankCounts) {
    try {
      const earnRate = this.validateManager.getEarnRate(
        moneyForLotto,
        winningPrizeSum
      );
      this.outputManager.showStatistics(rankCounts, earnRate);
    } catch (error) {
      throw error;
    }
  }
}

export default LottoGameManager;
