/* eslint-disable */
import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const LOTTO_PRIZE_MONEY = {
  '3': 5000, '4': 50000, '5': 1500000, '5-b': 30000000, '6': 2000000000
};

class App {
  async play() {
    Console.print('구입금액을 입력해 주세요.');

    const purchaseMoney = await this.getLottoMoney();

    Console.print(`${purchaseMoney / 1000}개를 구매했습니다.`);
    const lottos = await this.getLottos(purchaseMoney / 1000);

    Console.print('당첨 번호를 입력해 주세요.');
    const winningLotto = new Lotto(
      (await Console.readLineAsync(''))
        .trim()
        .split(',')
        .map(Number)
    );

    Console.print('보너스 번호를 입력해 주세요.');
    const bonus = Number(await Console.readLineAsync(''));

    const prizes = this.getLottoPrizes(lottos, winningLotto, bonus);
    const prizeMoney = Object.entries(prizes).reduce((acc, [key, value]) => acc + LOTTO_PRIZE_MONEY[key] * value, 0);
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${prizes[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${prizes[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizes[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizes['5-b']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${prizes[6]}개`);

    Console.print(`총 수익률은 ${(prizeMoney / purchaseMoney * 100).toFixed(1)}%입니다.`);
  }

  async getLottoMoney() {
    const money = Number(await Console.readLineAsync(''));
    let error = null;

    if (isNaN(money)) {
      error = '[ERROR] 숫자 형식으로 입력해주세요';
    }
    if (money % 1000 > 0) {
      error = '[ERROR] 1000원 단위로 입력해주세요';
    }
    if (error) {
      Console.print(error);
      return await this.getLottoMoney();
    }
    return money;
  }

  async getLottos(count) {
    const lottos = Array.from({ length: count }, () => {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      Console.print(`[${lotto.join(', ')}]`);
      return lotto;
    });
    return lottos;
  }

  getLottoPrizes(lottos, winningLotto, bonus) {
    const lottoMatches = Object.fromEntries(['3', '4', '5', '5-b', '6'].map(k => [k, 0]));

    lottos.forEach((lotto) => {
      let lottoMatch = lotto.compare(winningLotto, bonus);
      if (lottoMatch < 3) return;
      lottoMatches[lottoMatch] += 1;
    });

    return lottoMatches;
  }
}

export default App;
