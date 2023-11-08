import WinningLotto from '../src/WinningLotto.js';
import Lotto from '../src/Lotto.js';
import BonusBall from '../src/BonusBall.js';

describe('WinningLotto 클래스 테스트', () => {
  test('로또 번호에 당첨 번호와 매칭되는 숫자의 개수와 보너스 번호 포함 여부를 알려준다.', () => {
    // given
    const WINNING_LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    const BONUS = new BonusBall(7, WINNING_LOTTO);

    // when
    const lotto = new Lotto([1, 2, 3, 11, 22, 33]);
    const winningLotto = new WinningLotto(WINNING_LOTTO, BONUS);

    // then
    expect(winningLotto.compareWith(lotto)).toStrictEqual([3, false]);
  });

  test('로또 번호에 당첨 번호와 매칭되는 숫자의 개수와 보너스 번호 포함 여부를 알려준다.', () => {
    // given
    const WINNING_LOTTO = new Lotto([11, 22, 33, 44, 43, 42]);
    const BONUS = new BonusBall(20, WINNING_LOTTO);

    // when
    const lotto = new Lotto([44, 20, 2, 3, 4, 5]);
    const winningLotto = new WinningLotto(WINNING_LOTTO, BONUS);

    // then
    expect(winningLotto.compareWith(lotto)).toStrictEqual([1, true]);
  });
});
