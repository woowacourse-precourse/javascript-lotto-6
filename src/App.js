import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';

class App {
  
  #user

  constructor() {
    this.#user = new User();
  }

  async play() {
    await this.#user.setPurchaseAmount();

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
    const lottoRandomNumbers = [];
    for (let i = 0; i < purchaseCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoRandomNumbers.push(randomNumber);
      Console.print(randomNumber);
    }

    const winningNumbers = (await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n')).split(',').map(Number);
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
    const results = [0, 0, 0, 0, 0];
    const amount = [5000, 50000, 1500000, 30000000, 2000000000];

    lottoRandomNumbers.forEach(lottoNumber => {
      let count = 0;
      // 로또 번호 안에 당첨 번호가 있는지 확인
      lottoNumber.forEach(number => {
        if (winningNumbers.indexOf(number) !== -1) {
          count += 1;
        }
      });

      if (count == 5 && lottoNumber.indexOf(bonusNumber) !== -1) {
        results[count - 2] += 1;
      } else {
        results[count - 3] += 1;
      }
    });
    
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${results[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[4]}개`);

    let i = 0;
    const earnings = (results.reduce((acc, curr) => {
      return acc + (curr * amount[i++]);
    }, 0));

    Console.print(`총 수익률은 ${(earnings / purchaseAmount * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
