import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants.js';

class OutputView {
  amount = 0;

  static printLottoNumbers(amount, lottoList) {
    Console.print(`\n${amount} ${MESSAGE.OUTPUT_LOTTO}`);
    for (const lotto of lottoList) {
      Console.print(lotto);
    }
    this.amount = amount;
  }

  static printPrize(prize) {
    Console.print(MESSAGE.OUTPUT_STATISTICS);
    const prizeDescriptions = [
      { key: 3, value: '3개 일치 (5,000원) - ' },
      { key: 4, value: '4개 일치 (50,000원) - ' },
      { key: 5, value: '5개 일치 (1,500,000원) - ' },
      { key: 5.5, value: '5개 일치, 보너스 볼 일치 (30,000,000원) - ' },
      { key: 6, value: '6개 일치 (2,000,000,000원) - ' },
    ];

    prizeDescriptions.forEach(description => {
      const count = prize[description.key];
      Console.print(description.value + count + '개');
    });
    this.printStatistics(prize);
  }

  static printStatistics(prize) {
    const totalPrizeAmount =
      prize[3] * 5000 +
      prize[4] * 50000 +
      prize[5] * 1500000 +
      prize[5.5] * 30000000 +
      prize[6] * 2000000000;
    const totalInvestment = this.amount * 1000;

    const totalProfitRate =
      (totalPrizeAmount - totalInvestment) / totalInvestment;
    var totalProfitRatePercentage = (totalProfitRate * 100).toFixed(1);
    if (totalProfitRatePercentage < 0) {
      totalProfitRatePercentage = 100 + parseFloat(totalProfitRatePercentage);
    }
    Console.print(`총 수익률은 ${totalProfitRatePercentage}%입니다.`);
  }
}
export default OutputView;
