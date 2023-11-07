import { Console } from '@woowacourse/mission-utils';

function calculateProfitRate(totalPrize, totalSpent) {
  if (totalSpent === 0) {
    return '0.00%';
  }

  const baseProfitRate = 100; // 기본 수익률 (100%)
  const profit = totalPrize - totalSpent;
  const profitRate = ((profit / totalSpent + 1) * baseProfitRate).toFixed(1);

  return `${profitRate}%`;
}

class LottoResultCalculator {
  static calculateResults(tickets, winningNumbers, bonusNumber) {
    const results = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };

    for (const ticket of tickets) {
      const result = ticket.compare(winningNumbers, bonusNumber);
      results[result]++;
    }

    let totalPrize = 0;
    for (const result in results) {
      if (result !== '0') {
        const matches = results[result];
        totalPrize += this.getPrizeAmount(result) * matches;
      }
    }

    const totalSpent = tickets.length * 1000; // 각 로또 가격은 1,000원
    const profitRate = calculateProfitRate(totalPrize, totalSpent);

    results['총 수익률'] = profitRate;

    return results;
  }

  static getPrizeAmount(result) {
    const resultValue = result.split(' ')[0]; // 공백 이전의 문자만 가져옴
    const prizeAmount = {
      '3개': 5000,
      '4개': 50000,
      '5개': 1500000,
      '5개,': 30000000,
      '6개': 2000000000,
    };
    return prizeAmount[resultValue];
  }
}

export default LottoResultCalculator;
