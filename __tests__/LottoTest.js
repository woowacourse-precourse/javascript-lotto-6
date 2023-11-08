import Lotto from '../src/components/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호가 주어진 다른 번호 배열과 0개 일치', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const otherNumbers = [7, 8, 9, 10, 11, 12];
    const count = lotto.matchCount(otherNumbers);
    expect(count).toBe(0);
  });

  test('로또 번호가 주어진 다른 번호 배열과 3개 일치', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const otherNumbers = [4, 5, 6, 7, 8, 9];
    const count = lotto.matchCount(otherNumbers);
    expect(count).toBe(3);
  });

  test('로또 번호가 주어진 다른 번호 배열과 6개 일치', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const otherNumbers = [1, 2, 3, 4, 5, 6];
    const count = lotto.matchCount(otherNumbers);
    expect(count).toBe(6);
  });

  test('로또 번호가 주어진 숫자를 포함하는 경우', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const number = 4;
    const contains = lotto.contains(number);
    expect(contains).toBe(true);
  });

  test('로또 번호가 주어진 숫자를 포함하지 않는 경우', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const number = 7;
    const contains = lotto.contains(number);
    expect(contains).toBe(false);
  });
});
