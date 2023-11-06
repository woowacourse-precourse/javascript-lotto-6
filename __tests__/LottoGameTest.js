import Lotto from '../src/Lotto.js';
import LottoGame from '../src/LottoGame.js';

describe('로또 게임 테스트', () => {
  test('당첨 번호와 일치하는 숫자 배열 반환', () => {
    const lottoGame = new LottoGame(3000);
    for (let i = 0; i < lottoGame.count; i++) {
      lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 6]));
    }
    lottoGame.addWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoGame.addBonusNumber(9);

    lottoGame.calculateLottoResult();
    expect(lottoGame.first).toBe(3);
  });
});
