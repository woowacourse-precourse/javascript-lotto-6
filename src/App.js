import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class App {
  async play() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');

      if (purchaseAmount % 1000 !== 0) {
        throw new Error("[Error] 로또는 1000원 단위로 구매해야합니다.");
      }
      const lottoCount = purchaseAmount / 1000;
      MissionUtils.Console.print(lottoCount + '개를 구매했습니다.');
      
      const lottos = [];
      for (let i = 0; i < lottoCount; i++) {
        const lottoNumsbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        lottos.push(new Lotto(lottoNumsbers)); 
      }
      lottos.forEach(lotto => {
        MissionUtils.Console.print('[' + lotto.getNumbers().join(', ') + ']');
      });

      const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
      const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');

      const winningStatistics = this.calculateWinningStatistics(lottos, winningNumbers, bonusNumber);
      this.printResult(winningStatistics, lottoCount);

    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      this.play();  
    }
  }

  calculateWinningStatistics(lottos, winningNumbers, bonusNumber) {
    const winningStatistics = {};

    for (let i = 1; i <= 5; i++) {
      winningStatistics[i] = 0;
    }

    lottos.forEach(lotto => {
      const numMatchCount = lotto.getNumbers().filter(number => winningNumbers.includes(number)).length;
      const bonusMatchStatus = lotto.getNumbers().includes(bonusNumber);
      this.setWinningStatistics(winningStatistics, numMatchCount, bonusMatchStatus);
    });
  
    return winningStatistics;
  }

  setWinningStatistics(winningStatistics, numMatchCount, bonusMatchStatus) {
    if (numMatchCount === 6) {
      winningStatistics[1]++;
    } else if (numMatchCount === 5 && bonusMatchStatus) {
      winningStatistics[2]++;
    } else if (numMatchCount === 5) {
      winningStatistics[3]++;
    } else if (numMatchCount === 4) {
      winningStatistics[4]++;
    } else if (numMatchCount === 3) {
      winningStatistics[5]++;
    }
  }

  printResult(winningStatistics, lottoCount) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalPrize = 0;

    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    for (let i = 1; i <= 5; i++) {
      totalPrize += winningStatistics[i] * prizeMoney[i];
    }
    MissionUtils.Console.print(`3개 일치 (${prizeMoney[4]}원) - ${winningStatistics[5]}개`);
    MissionUtils.Console.print(`4개 일치 (${prizeMoney[3]}원) - ${winningStatistics[4]}개`);
    MissionUtils.Console.print(`5개 일치 (${prizeMoney[2]}원) - ${winningStatistics[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${prizeMoney[1]}원) - ${winningStatistics[2]}개`);
    MissionUtils.Console.print(`6개 일치 (${prizeMoney[0]}원) - ${winningStatistics[1]}개`);

    const profitRate = ((totalPrize - lottoCount * 1000) / (lottoCount * 1000)) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  /*numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }*/
}

export default App;