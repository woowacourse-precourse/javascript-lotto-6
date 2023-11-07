/* eslint-disable */
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('구입금액을 입력해 주세요.');

    let money;
    let moneyInputError = false
    do {
      money = Number(await Console.readLineAsync(''));
      moneyInputError = '';

      if (isNaN(money)) {
        moneyInputError = '[ERROR] 숫자 형식으로 입력해주세요'
      }
      if (money % 1000 > 0) {
        moneyInputError = '[ERROR] 1000원 단위로 입력해주세요'
      }
      if (moneyInputError !== '') {
        Console.print(moneyInputError);
      }
    } while (moneyInputError !== '');


    Console.print(`${money / 1000}개를 구매했습니다.`);
    const lottos = Array.from({ length: money / 1000 }, () => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => a - b);
      Console.print(`[${lotto.join(', ')}]`);
      return lotto;
    });

    Console.print('당첨 번호를 입력해 주세요.');
    const winningNumbers = (await Console.readLineAsync(''))
      .trim()
      .split(',')
      .map(Number);

    Console.print('보너스 번호를 입력해 주세요.');
    const bonus = Number(await Console.readLineAsync(''));

    Console.print('당첨 통계');
    Console.print('---');

    const lottoMatches = Object.fromEntries(['3', '4', '5', '5-b', '6'].map(k => [k, 0]));
    const lottoPrize = {
      3: 5000, 4: 50000, 5: 1500000, '5-b': 30000000, 6: 2000000000
    };
    let lottoMoney = 0;
    lottos.forEach((lotto) => {
      let lottoMatch = lotto.filter((lottoNumber) => winningNumbers.includes(lottoNumber)).length;

      if (lottoMatch < 3) return;
      if (lottoMatch === 5 && lotto.includes(bonus)) {
        lottoMatch = '5-b';
      }

      lottoMatches[lottoMatch] += 1;
      lottoMoney += lottoPrize[lottoMatch];
    });

    Console.print(`3개 일치 (5,000원) - ${lottoMatches[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoMatches[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoMatches[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoMatches['5-b']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoMatches[6]}개`);

    Console.print(`총 수익률은 ${(lottoMoney / money * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
