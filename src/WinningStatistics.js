import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/Messages.js';
class winningStatistics {
  constructor(lottos, bonusNum, winningNum, buyMoney) {
    this.lottos = lottos;
    this.bonusNum = bonusNum;
    this.winningNum = winningNum;
    this.buyMoney = buyMoney;
    this.result = [];
    this.winningBonusNum = []; //true, false로 보너스 일치 여부 확인
    this.rank = [0, 0, 0, 0, 0, 0, 0]; //index값을 등수로 설정.
    this.rateOfReturn;
    this.checkRank();
  }

  compareWinningNum() {
    this.lottos.map((e) => {
      const winning = e.filter((num) => this.winningNum.includes(num));
      const bonus = e.includes(this.bonusNum);

      this.result.push(winning.length);
      this.winningBonusNum.push(bonus);
    });
  }

  checkRank() {
    this.compareWinningNum();
    this.result.map((e, i) => {
      if (e === 3) this.rank[5] += 1;
      else if (e === 4) this.rank[4] += 1;
      else if (e === 5 && this.winningBonusNum[i] == true) this.rank[2] += 1;
      else if (e === 5) this.rank[3] += 1;
      else if (e === 6) this.rank[1] += 1;
    });
  }

  checkRevenue() {
    const totalRevenue =
      this.rank[5] * 5000 +
      this.rank[4] * 50000 +
      this.rank[3] * 1500000 +
      this.rank[2] * 30000000 +
      this.rank[1] * 2000000000;

    this.rateOfReturn = (totalRevenue / this.buyMoney) * 100;
    this.rateOfReturn = parseFloat(this.rateOfReturn.toFixed(2));
  }

  printResult() {
    this.checkRevenue();
    Console.print(`${OUTPUT_MESSAGE.RESULT}`);
    Console.print(`${OUTPUT_MESSAGE.FIFTH_PLACE} - ${this.rank[5]}개`);
    Console.print(`${OUTPUT_MESSAGE.FOURTH_PLACE} - ${this.rank[4]}개`);
    Console.print(`${OUTPUT_MESSAGE.THIRD_PLACE} - ${this.rank[3]}개`);
    Console.print(`${OUTPUT_MESSAGE.SECOND_PLACE} - ${this.rank[2]}개`);
    Console.print(`${OUTPUT_MESSAGE.FIRST_PLACE} - ${this.rank[1]}개`);
    Console.print(`${OUTPUT_MESSAGE.REVENUE} ${this.rateOfReturn}%입니다.`);
  }
}
export default winningStatistics;
