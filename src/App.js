import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.gameStatus = true;
  }

  async play() {
    while (this.gameStatus) {
      const userMoney = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요."
      );
      await this.checkUserMoneyPossible(userMoney);

      const countTicket = this.countLottoTicket(userMoney);
      const lottoNumbers = await Lotto.showUsersLottoNumbers(countTicket);
      const winNum = await this.getLuckyNumber();
      const bonusNumber = await this.getBonusNumber();
      this.checkBonusNumber(bonusNumber, winNum);
      const winningStats = this.calculateWinningStats(
        lottoNumbers,
        winNum,
        bonusNumber
      );
      MissionUtils.Console.print(
        this.printWinningStats(winningStats, countTicket)
      );
      this.gameStatus = false;
    }
  }

  async checkUserMoneyPossible(userMoney) {
    if (isNaN(userMoney) || userMoney % 1000 !== 0 || userMoney < 1000) {
      throw new Error("[ERROR] 1000단위의 숫자를 입력해주세요");
    }
  }

  countLottoTicket(userMoney) {
    const countTicket = userMoney / 1000;
    MissionUtils.Console.print(`${countTicket}개를 구매했습니다.`);
    return countTicket;
  }

  async getLuckyNumber() {
    const luckyNumber = await MissionUtils.Console.readLineAsync(
      `당첨 번호를 입력해 주세요.`
    );
    const winNum = Lotto.checkLuckyNumber(luckyNumber);
    return winNum;
  }

  async getBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      `보너스 번호를 입력해 주세요.`
    );
    return bonusNumber;
  }

  checkBonusNumber(bonusNumber, winNum) {
    if (
      isNaN(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      !Number.isInteger(Number(bonusNumber))
    ) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력해주세요.");
    }
    if (winNum.includes(Number(bonusNumber))) {
      throw new Error("[ERROR] 보너스 번호와 당첨 번호 중복");
    }
  }

  calculateWinningStats(lottoNumbers, winNum, bonusNumber) {
    const winConditions = {
      6: { count: 0, amount: 2000000000 },
      "5+bonus": { count: 0, amount: 30000000 },
      5: { count: 0, amount: 1500000 },
      4: { count: 0, amount: 50000 },
      3: { count: 0, amount: 5000 },
    };

    this.calculateWinningStatsForLottoNumbers(
      lottoNumbers,
      winNum,
      bonusNumber,
      winConditions
    );

    return winConditions;
  }

  calculateWinningStatsForLottoNumbers(
    lottoNumbers,
    winNum,
    bonusNumber,
    winConditions
  ) {
    for (const lotto of lottoNumbers) {
      const matchingNumbers = winNum.filter((num) =>
        lotto.includes(num)
      ).length;
      const hasBonusNumber = lotto.includes(bonusNumber);

      switch (matchingNumbers) {
        case 6:
          winConditions[6].count++;
          break;
        case 5:
          if (hasBonusNumber) {
            winConditions["5+bonus"].count++;
          } else {
            winConditions[5].count++;
          }
          break;
        case 4:
          winConditions[4].count++;
          break;
        case 3:
          winConditions[3].count++;
          break;
      }
    }
  }

  printWinningStats(winningStats, countTicket) {
    const statsSummary = [];
    statsSummary.push("당첨 통계\n---");
    statsSummary.push(`3개 일치 (5,000원) - ${winningStats[3].count}개`);
    statsSummary.push(`4개 일치 (50,000원) - ${winningStats[4].count}개`);
    statsSummary.push(`5개 일치 (1,500,000원) - ${winningStats[5].count}개`);
    statsSummary.push(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStats["5+bonus"].count}개`
    );
    statsSummary.push(
      `6개 일치 (2,000,000,000원) - ${winningStats[6].count}개`
    );

    const totalPrizes = Object.values(winningStats).reduce(
      (total, prize) => total + prize.amount * prize.count,
      0
    );
    const totalSpent = countTicket * 1000;
    const profitPercentage =
      100 + ((totalPrizes - totalSpent) / totalSpent) * 100;

    statsSummary.push(`총 수익률은 ${profitPercentage.toFixed(1)}%입니다.`);
    return statsSummary.join("\n");
  }
}

export default App;
