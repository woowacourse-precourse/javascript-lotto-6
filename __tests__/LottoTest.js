import Lotto from '../src/Lotto.js';
import LottoResult from '../src/LottoResult.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 확인 테스트', () => {
    const testLotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(testLotto.determineResult([1, 2, 3, 4, 5, 6], 7)).toEqual(LottoResult.MATCH_6);

    expect(testLotto.determineResult([1, 2, 3, 4, 5, 7], 6)).toEqual(LottoResult.MATCH_5_BONUS);

    expect(testLotto.determineResult([1, 2, 3, 4, 5, 8], 7)).toEqual(LottoResult.MATCH_5);

    expect(testLotto.determineResult([1, 2, 3, 4, 8, 9], 7)).toEqual(LottoResult.MATCH_4);

    expect(testLotto.determineResult([1, 2, 3, 8, 9, 10], 7)).toEqual(LottoResult.MATCH_3);

    expect(testLotto.determineResult([1, 2, 8, 9, 10, 11], 7)).toEqual(undefined);
  });
});
