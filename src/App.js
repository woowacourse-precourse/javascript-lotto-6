/* eslint-disable */
import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    Console.print('구입금액을 입력해 주세요.');
    const purchaseMoney = await this.getLottoMoney();

    const lottos = LottoGame.getRandomLottos(purchaseMoney / 1000);
    Console.print(`${purchaseMoney / 1000}개를 구매했습니다.`);

    Console.print('당첨 번호를 입력해 주세요.');
    const winningLotto = new Lotto(
      (await Console.readLineAsync(''))
        .trim()
        .split(',')
        .map(Number)
    );

    Console.print('보너스 번호를 입력해 주세요.');
    const bonus = Number(await Console.readLineAsync(''));

    const lottoGame = new LottoGame(lottos, winningLotto, bonus);
    const { lottoPrizes, lottoPrizeMoney } = lottoGame.getLottoPrizes();

    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${lottoPrizes[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoPrizes[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoPrizes[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoPrizes['5-b']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoPrizes[6]}개`);

    Console.print(`총 수익률은 ${(lottoPrizeMoney / purchaseMoney * 100).toFixed(1)}%입니다.`);
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
}

export default App;
