import BonusBall from '../src/BonusBall.js';
import Lotto from '../src/Lotto.js';

describe('BonusBall 클래스 테스트', () => {
  test.each([[0], [46], [-1], [123]])(
    '보너스 번호가 1보다 작고 45보다 크면 예외가 발생한다.',
    (input) => {
      // given
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      // then
      expect(() => {
        new BonusBall(input, lotto);
      }).toThrow('[ERROR]');
    }
  );

  test('보너스 번호가 당첨 번호에 포함되어 있는 숫자이면 예외가 발생한다.', () => {
    // given
    const INCLUDED_NUMBER = 1;
    const LOTTO_NUMBERS = [INCLUDED_NUMBER, 2, 3, 4, 5, 6];
    const lotto = new Lotto(LOTTO_NUMBERS);

    // then
    expect(() => {
      new BonusBall(INCLUDED_NUMBER, lotto);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 보너스 번호 포함 여부를 알려준다.', () => {
    // given
    const BONUS = 7;
    const ARRAY_INCLUDING_BONUS = [BONUS, 1, 2, 3, 4, 5];
    const ARRAY_NOT_INCLUDING_BONUS = [1, 2, 3, 4, 5, 6];

    const lotto1 = new Lotto(ARRAY_INCLUDING_BONUS);
    const lotto2 = new Lotto(ARRAY_NOT_INCLUDING_BONUS);
    const bonusBall = new BonusBall(BONUS, lotto2);

    // then
    expect(bonusBall.includedIn(lotto1)).toBe(true);
    expect(bonusBall.includedIn(lotto2)).toBe(false);
  });
});
