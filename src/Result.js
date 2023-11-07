import { Console } from '@woowacourse/mission-utils';

export default class Result {
  static calculateResults(lottoTickets, winningNumbers, bonusNumber) {
    const results = this.initializeResults();

    for (const ticket of lottoTickets) {
      const matchingCount = this.calculateMatchingCount(ticket, winningNumbers, bonusNumber);
      results[matchingCount]++;
    }

    return results;
  }
  
  static calculateMatchingCount(ticket, winningNumbers, bonusNumber) {
    const numbers = ticket.getNumbers();
    const matchingNumbers = numbers.filter((number) => winningNumbers.includes(number));
    const matchingCount = matchingNumbers.length;

    if (matchingCount === 6) {
      return 6;
    } else if (matchingCount === 5 && numbers.includes(bonusNumber)) {
      return 5.1;
    } else {
      return matchingCount;
    }
  }

  static printResults(results) {
    Console.print("\n당첨 통계");
    Console.print("---");

    for (const key in results) {
      if (results.hasOwnProperty(key)) {
        this.printResultLine(key, results[key]);
      }
    }

    const totalPrize = this.calculateTotalPrize(results);
    const totalPurchaseAmount = this.calculateTotalPurchaseAmount(results);
    const profitRate = (totalPrize / totalPurchaseAmount) * 100;

    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  static printResultLine(key, count) {
    if (key === '5.1') {
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
    } else if (key >= 3) {
      const prize = this.getPrize(key);
      Console.print(`${key}개 일치 (${prize}원) - ${count}개`);
    }
  }

  static calculateTotalPrize(results) {
    return Object.keys(results).reduce((acc, key) => {
      const prize = this.getPrize(key);
      return acc + results[key] * parseInt(prize.replace(',', ''));
    }, 0);
  }

  static calculateTotalPurchaseAmount(results) {
    return Object.keys(results).reduce((acc, key) => acc + results[key], 0) * 1000;
  }

  static initializeResults() {
    return {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      5.1: 0,
      6: 0,
    };
  }

  static getPrize(key) {
    switch (key) {
      case '3':
        return '5,000';
      case '4':
        return '50,000';
      case '5':
        return '1,500,000';
      case '5.1':
        return '30,000,000';
      case '6':
        return '2,000,000,000';
      default:
        return '0';
    }
  }
}