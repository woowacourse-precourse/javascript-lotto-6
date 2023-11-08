/* eslint-disable prefer-const */
// /* eslint-disable no-return-assign */
// /* eslint-disable import/extensions */
// /* eslint-disable class-methods-use-this */
// // import { MissionUtils } from '@woowacourse/mission-utils';
// import { MissionUtils } from '@woowacourse/mission-utils';
// import Input from './Input.js';
// import PurchasedLotto from './PurchasedLotto.js';
// import IssuedLotto from './IssuedLotto.js';
// import Lotto from './Lotto.js';
// import BonusBall from './BonusBall.js';

// class App {
//   async play() {
//     try {
//       const { cash, issuedLottos } = await this.initGame();
//       const { winningLotto, bonusBall } = await this.getWinningInfo();

//       const winningInfo = this.calculateWinning(
//         issuedLottos,
//         winningLotto,
//         bonusBall,
//       );
//       this.printTotalResult(cash, winningInfo);
//     } catch (err) {
//       throw new Error(`[ERROR] ${err}`);
//     }
//   }

//   // 금액 입력, 로또 발행
//   async initGame() {
//     const input = new Input();
//     const cash = await this.getCashFromUser(input);
//     const issuedLottos = this.issuedLotto(cash);
//     return { cash, issuedLottos };
//   }

//   async getCashFromUser(input) {
//     const cash = await input.simpleInput('금액을 입력해주세요\n');
//     return cash;
//   }

//   async issuedLotto(cash) {
//     const purchasedLotto = new PurchasedLotto(cash);
//     const numOfPurchasedLotto = purchasedLotto.numOfPurchasedLotto();
//     const issuedLotto = new IssuedLotto(numOfPurchasedLotto);
//     return issuedLotto.printOut();
//   }

//   // 당첨번호, 보너스볼 입력
//   async getWinningInfo() {
//     const input = new Input();
//     const winningLotto = await this.getWinningLotto(input);
//     const bonusBall = await this.getBonusBall(input, winningLotto);
//     return { winningLotto, bonusBall };
//   }

//   async getWinningNumbersFromUser(input) {
//     const winningLottoNumbers =
//       await input.inputChangeToArr('\n당첨번호를 입력해주세요\n');
//     return winningLottoNumbers;
//   }

//   async getWinningLotto(input) {
//     const winningLottoNumbers = await this.getWinningNumbersFromUser(input);
//     const winningLotto = new Lotto(winningLottoNumbers);
//     return winningLotto.getWinningLotto();
//   }

//   async getBonusBallNumberFromUser(input) {
//     const bonusBallNumber =
//       await input.simpleInput('\n보너스볼을 입력해주세요\n');
//     return bonusBallNumber;
//   }

//   async getBonusBall(input, winningLotto) {
//     const bonusBallNumber = parseInt(
//       await this.getBonusBallNumberFromUser(input),
//       10,
//     );
//     if (winningLotto.includes(bonusBallNumber)) {
//       throw new Error('[ERROR] 보너스볼은 당첨번호와 증복되지 않아야 합니다.');
//     }
//     const bonusBall = new BonusBall(bonusBallNumber);
//     return bonusBall.getBonusBall();
//   }

//   async calculateWinning(issuedLottos, winningLotto, bonusBall) {
//     let winningInfos = [];
//     winningInfos = issuedLottos.map((lotto) =>
//       this.calculateLottoWinning(lotto, winningLotto, bonusBall),
//     );
//     this.printTotalResult(issuedLottos.length, winningInfos);
//   }

//   calculateLottoWinning(lotto, winningLotto, bonusBall) {
//     const matchingNumbers = lotto.filter((num) => winningLotto.includes(num));
//     const matchingCount = matchingNumbers.length;
//     const isBonusMatch = matchingNumbers.includes(bonusBall);
//     let rank = 0;
//     if (matchingCount === 6) rank = 1;
//     if (matchingCount === 5 && isBonusMatch) rank = 2;
//     if (matchingCount === 5) rank = 3;
//     if (matchingCount === 4) rank = 4;
//     if (matchingCount === 3) rank = 5;

//     return rank;
//   }

//   printTotalResult(cash, winningInfos) {
//     MissionUtils.Console.print(`\n당첨 통계\n---`);

//     const winningStats = this.calculateWinningStats(winningInfos);
//     this.printGameResult(winningStats);

//     const totalReward = this.calculateTotalReward(winningStats);
//     const profitRate = ((totalReward - cash) / cash) * 100;
//     MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(2)}%입니다.`);
//   }

//   calculateWinningStats(winningInfos) {
//     const winningStats = {
//       1: 0,
//       2: 0,
//       3: 0,
//       4: 0,
//       5: 0,
//     };
//     const finalWinningStats = winningInfos.forEach((info) => {
//       if (info > 0) {
//         winningStats[info] += 1;
//       }
//     });
//     return finalWinningStats;
//   }

//   calculateTotalReward(winningStats) {
//     const rewards = [2000000000, 30000000, 1500000, 50000, 5000];
//     let totalReward = 0;

//     for (let rank = 1; rank <= 6; rank += 1) {
//       totalReward += rewards[rank - 1] * winningStats[rank];
//     }

//     return totalReward;
//   }

//   printGameResult(winningStats) {
//     const rewardStrings = {
//       1: '6개 일치 (2,000,000,000원)',
//       2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
//       3: '5개 일치 (1,500,000원)',
//       4: '4개 일치 (50,000원)',
//       5: '3개 일치 (5,000원)',
//     };

//     for (let rank = 5; rank >= 1; rank -= 1) {
//       MissionUtils.Console.print(
//         `${rewardStrings[rank]} - ${winningStats[rank]}`,
//       );
//     }
//   }
// }

// export default App;

/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { MissionUtils } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import PurchasedLotto from './PurchasedLotto.js';
import IssuedLotto from './IssuedLotto.js';
import Lotto from './Lotto.js';
import BonusBall from './BonusBall.js';

class App {
  async play() {
    try {
      const { cash, issuedLottos } = await this.initGame();
      const { winningLotto, bonusBall } = await this.getWinningInfo();

      const winningInfo = this.calculateWinning(
        issuedLottos,
        winningLotto,
        bonusBall,
      );
    } catch (err) {
      throw new Error(`[ERROR] ${err}`);
    }
  }

  // 금액 입력, 로또 발행
  async initGame() {
    const input = new Input();
    const cash = await this.getCashFromUser(input);
    const issuedLottos = this.issuedLotto(cash);
    return { cash, issuedLottos };
  }

  async getCashFromUser(input) {
    const cash = await input.simpleInput('금액을 입력해주세요\n');
    return cash;
  }

  async issuedLotto(cash) {
    const purchasedLotto = new PurchasedLotto(cash);
    const numOfPurchasedLotto = purchasedLotto.numOfPurchasedLotto();
    const issuedLotto = new IssuedLotto(numOfPurchasedLotto);
    return issuedLotto.printOut();
  }

  // 당첨번호, 보너스볼 입력
  async getWinningInfo() {
    const input = new Input();
    const winningLotto = await this.getWinningLotto(input);
    const bonusBall = await this.getBonusBall(input, winningLotto);
    return { winningLotto, bonusBall };
  }

  async getWinningNumbersFromUser(input) {
    const winningLottoNumbers =
      await input.inputChangeToArr('\n당첨번호를 입력해주세요\n');
    return winningLottoNumbers;
  }

  async getWinningLotto(input) {
    const winningLottoNumbers = await this.getWinningNumbersFromUser(input);
    const winningLotto = new Lotto(winningLottoNumbers);
    return winningLotto.getWinningLotto();
  }

  async getBonusBallNumberFromUser(input) {
    const bonusBallNumber =
      await input.simpleInput('\n보너스볼을 입력해주세요\n');
    return bonusBallNumber;
  }

  async getBonusBall(input, winningLotto) {
    const bonusBallNumber = parseInt(
      await this.getBonusBallNumberFromUser(input),
      10,
    );
    if (winningLotto.includes(bonusBallNumber)) {
      throw new Error('[ERROR] 보너스볼은 당첨번호와 중복되지 않아야 합니다.');
    }
    const bonusBall = new BonusBall(bonusBallNumber);
    return bonusBall.getBonusBall();
  }

  async calculateWinning(issuedLottos, winningLotto, bonusBall) {
    // eslint-disable-next-line prefer-const
    let winningInfos = [];
    for (let i = 0; i < issuedLottos.length; i += 1) {
      const lotto = issuedLottos[i];
      winningInfos.push(
        this.calculateLottoWinning(lotto, winningLotto, bonusBall),
      );
    }
    this.printTotalResult(issuedLottos.length, winningInfos);
  }

  calculateLottoWinning(lotto, winningLotto, bonusBall) {
    const matchingNumbers = lotto.filter((num) => winningLotto.includes(num));
    const matchingCount = matchingNumbers.length;
    const isBonusMatch = matchingNumbers.includes(bonusBall);
    let rank = 0;
    if (matchingCount === 6) rank = 1;
    if (matchingCount === 5 && isBonusMatch) rank = 2;
    if (matchingCount === 5) rank = 3;
    if (matchingCount === 4) rank = 4;
    if (matchingCount === 3) rank = 5;

    return rank;
  }

  printTotalResult(cash, winningInfos) {
    MissionUtils.Console.print(`\n당첨 통계\n---`);

    const winningStats = this.calculateWinningStats(winningInfos);
    this.printGameResult(winningStats);

    const totalReward = this.calculateTotalReward(winningStats);
    const profitRate = ((totalReward - cash) / cash) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(2)}%입니다.`);
  }

  calculateWinningStats(winningInfos) {
    let winningStats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    for (let i = 0; i < winningInfos.length; i += 1) {
      const info = winningInfos[i];
      if (info > 0) {
        winningStats[info] += 1;
      }
    }
    return winningStats;
  }

  calculateTotalReward(winningStats) {
    const rewards = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalReward = 0;

    for (let rank = 1; rank <= 5; rank += 1) {
      totalReward += rewards[rank - 1] * winningStats[rank];
    }

    return totalReward;
  }

  printGameResult(winningStats) {
    const rewardStrings = {
      1: '6개 일치 (2,000,000,000원)',
      2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
      3: '5개 일치 (1,500,000원)',
      4: '4개 일치 (50,000원)',
      5: '3개 일치 (5,000원)',
    };

    for (let rank = 5; rank >= 1; rank -= 1) {
      MissionUtils.Console.print(
        `${rewardStrings[rank]} - ${winningStats[rank]}`,
      );
    }
  }
}

export default App;
