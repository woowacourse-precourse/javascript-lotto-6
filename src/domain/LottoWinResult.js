import Prize from './Prize.js';
import BonusPrize from './BonusPrize.js';

class LottoWinResult {
  #winningLotto;

  /*
  확장성을 고려하면 로또 회차마다 보상도 바뀔 수 있으므로, prizes는 의존성으로 주입해주는게 좋다고 생각했지만
  prizes 를 파악하기 어려운 관계로 가독성을 우선하고, 요구사항에만 충실하도록 보상은 고정함.
  */

  #PRIZES = [
    new Prize(6, 2_000_000_000),
    new BonusPrize(5, 30_000_000),
    new Prize(5, 1_500_000),
    new Prize(4, 50_000),
    new Prize(3, 5_000),
  ];

  constructor(winningLotto) {
    this.#winningLotto = winningLotto;
  }

  getPRIZES() {
    return this.#PRIZES;
  }

  findPrize(lotto) {
    return (
      this.#PRIZES.find((prize) =>
        prize.canReceive(lotto, this.#winningLotto)
      ) ?? null
    );
  }
}

export default LottoWinResult;
