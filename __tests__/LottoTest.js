import Lotto from '../src/Lotto.js';
import { PRIZE } from '../src/constant.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호와 당첨 번호 비교 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.compareNumbersOf([1, 2, 3, 4, 5, 6], 7)).toBe(PRIZE.FIRST);
    expect(lotto.compareNumbersOf([1, 2, 3, 4, 5, 7], 6)).toBe(PRIZE.SECOND);
    expect(lotto.compareNumbersOf([1, 2, 3, 4, 5, 7], 8)).toBe(PRIZE.THIRD);
    expect(lotto.compareNumbersOf([1, 2, 3, 4, 7, 8], 9)).toBe(PRIZE.FOURTH);
    expect(lotto.compareNumbersOf([1, 2, 3, 7, 8, 9], 10)).toBe(PRIZE.FIFTH);
  });
});
