import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';

class App {
  buyPriceData() {
    return Promise.all([Console.readLineAsync('구입금액을 입력해 주세요.')]);
  }

  async play() {
    let lottoGame;
    let ok = true;
    while (ok) {
      // eslint-disable-next-line no-await-in-loop
      await this.buyPriceData()
        // eslint-disable-next-line no-loop-func
        .then(result => {
          Console.print(result[0]);
          lottoGame = new LottoGame(result[0]);
          ok = false;
        })
        .catch(error => {
          Console.print(error.message);
        });
    }

    // const price = await Console.readLineAsync('구입금액을 입력해 주세요.');
    // lottoGame = new LottoGame(price);

    Console.print(lottoGame);

    for (let i = 0; i < lottoGame.count; i++) {
      lottoGame.addLotto(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    Console.print(`${lottoGame.count}개를 구매했습니다.`);
    lottoGame.lottos.map(lotto =>
      Console.print(`[${lotto.getNumber().join(', ')}]`),
    );

    const winningNumberInput =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const bonusNumberInput =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');

    lottoGame.addWinningNumbers(winningNumberInput.split(','));
    lottoGame.addBonusNumber(bonusNumberInput);
    lottoGame.calculateLottoResult();
    lottoGame.calculateLottoPrize();

    // Console.print('당첨 통계');
    Console.print(`3개 일치 (5,000원) - ${lottoGame.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoGame.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoGame.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoGame.seccond}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoGame.first}개`);
    Console.print(
      `총 수익률은 ${lottoGame.calculateProfitability(
        lottoGame.price,
        lottoGame.lottoPrize,
      )}%입니다.`,
    );
  }
}

export default App;
