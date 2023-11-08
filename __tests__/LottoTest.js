import Lotto from '../src/Lotto.js';

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

  test('구입한 로또 중 6개의 번호가 모두 일치하면, 1등이다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test('구입한 로또 중 5개의 번호가 일치하고 보너스 번호도 일치하면, 2등이다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 3, 4, 5, 7], 7)).toBe(2);
  });

  test('구입한 로또 중 5개의 번호가 일치하고 보너스 번호는 일치하지 않으면, 3등이다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 3, 4, 5, 7], 8)).toBe(3);
  });

  test('구입한 로또 중 4개의 번호가 일치하면, 4등이다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 3, 4, 9, 7], 8)).toBe(4);
  });

  test('구입한 로또 중 3개의 번호가 일치하면, 5등이다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 3, 10, 9, 7], 8)).toBe(5);
  });

  test('구입한 로또 중 2개 이하의 번호가 일치하면, 등수에 들지 않는다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank([1, 2, 11, 10, 9, 7], 8)).toBe(null);
  });
});
