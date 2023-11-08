import { MissionUtils } from '@woowacourse/mission-utils';

export class LottoStatistics {
  constructor(playerLottos, winningNumbers, bonusNumber) {
    this.playerLottos = playerLottos;
    this.bonusNumber = bonusNumber;
    this.winningNumbers = winningNumbers;
    this.statistics = {
      '3개 일치': { prize: '5,000', count: 0 },
      '4개 일치': { prize: '50,000', count: 0 },
      '5개 일치': { prize: '1,500,000', count: 0 },
      '5개 일치, 보너스 볼 일치': { prize: '30,000,000', count: 0 },
      '6개 일치': { prize: '2,000,000,000', count: 0 },
    };
  }

  calculateStatistics() {
    this.playerLottos.forEach((lotto) => {
      const { count, bonusMatch } = this.countMatchedNumbers(lotto);
      this.updateStatistics(count, bonusMatch);
    });
  }

  countMatchedNumbers(lotto) {
    let count = 0;
    let bonusMatch = false;
    lotto.forEach((number) => {
      if (this.bonusNumber === number) {
        bonusMatch = true;
      }
      if (this.winningNumbers.includes(number)) {
        count += 1;
      }
    });
    return { count, bonusMatch };
  }

  updateStatistics(count, bonusMatch) {
    if (count === 5 && bonusMatch) {
      this.statistics['5개 일치, 보너스 볼 일치'].count += 1;
      return;
    }
    if (this.statistics[`${count}개 일치`]) {
      this.statistics[`${count}개 일치`].count += 1;
    }
  }

  calculateReturnRate(cost) {
    let totalPrize = 0;
    for (const key in this.statistics) {
      totalPrize +=
        Number(this.statistics[key].prize.replaceAll(',', '')) * this.statistics[key].count;
    }
    return (totalPrize / cost) * 100;
  }

  getStatistics() {
    let result = '당첨 통계\n---\n';
    for (const key in this.statistics) {
      result += `${key} (${this.statistics[key].prize}원) - ${this.statistics[key].count}개\n`;
    }
    return result;
  }

  printStatistics() {
    MissionUtils.Console.print(this.getStatistics());
  }
}
