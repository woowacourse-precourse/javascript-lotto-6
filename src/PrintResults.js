import { Console } from '@woowacourse/mission-utils';

class Print {
  printLottoNumbers = (published) => {
    Console.print(`\n${published.numbers.length}개를 구매했습니다.`);
    published.numbers.forEach((number) => { 
      let message = `[${number[0]}, ${number[1]}, ${number[2]}, ${number[3]}, ${number[4]}, ${number[5]}]`;
      Console.print(message);
    });
  }

  printResults = (published, rate) => {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${published.rank[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${published.rank[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${published.rank[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${published.rank[1]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${published.rank[0]}개`);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
  
   styleRate = (rate) => {
    const rateFormat = Intl.NumberFormat('en-US').format(rate.toFixed(1));
    if (rate - Math.floor(rate) === 0) return `${rateFormat}.0`
    return rateFormat;
  }
}

export default Print;