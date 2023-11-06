import { Console } from '@woowacourse/mission-utils';

export default class Result {
    static calculateResults(lottoTickets, winningNumbers, bonusNumber) {
      const results = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        5.1: 0,
        6: 0,
      };
  
      for (const ticket of lottoTickets) {
        const numbers = ticket.getNumbers();
        const matchingNumbers = numbers.filter((number) => winningNumbers.includes(number));
        const matchingCount = matchingNumbers.length;
  
        if (matchingCount === 6) {
          results[6]++;
        } else if (matchingCount === 5 && numbers.includes(bonusNumber)) {
          results[5.1]++;
        } else {
          results[matchingCount]++;
        }
      }
  
      return results;
    }
  
    static printResults(results) {
      Console.print("\n당첨 통계");
      Console.print("---");
  
      for (const key in results) {
        if (results.hasOwnProperty(key)) {
          const count = results[key];
          if(key === '5.1'){
            Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
          }
          else if (key >= 3) {
            let prize = '';
            if (key === '3') prize = '5,000';
            else if (key === '4') prize = '50,000';
            else if (key === '5') prize = '1,500,000';
            else if (key === '5.1') prize = '30,000,000';
            else if (key === '6') prize = '2,000,000,000';
  
            Console.print(`${key}개 일치 (${prize}원) - ${count}개`);
          }
        }
      }
  
      const totalPrize = Object.keys(results).reduce((acc, key) => {
        let prize = 0;
        if (key === '3') prize = 5000;
        else if (key === '4') prize = 50000;
        else if (key === '5') prize = 1500000;
        else if (key === '5.1') prize = 30000000;
        else if (key === '6') prize = 2000000000;
  
        return acc + results[key] * prize;
      }, 0);
  
      const totalPurchaseAmount = Object.keys(results).reduce((acc, key) => acc + results[key], 0) * 1000;
  
      const profitRate = (totalPrize / totalPurchaseAmount) * 100;
      Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
    }
  }
  