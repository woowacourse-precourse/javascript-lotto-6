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

  test('로또 번호가 1~45 사이의 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 3, 4, 45, 46]);
    }).toThrow('[ERROR]');
  });

  test('contain 함수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.contains(1)).toBeTruthy();
    expect(lotto.contains(7)).toBeFalsy();
  });

  test('matchCount 함수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const target = new Lotto([1, 2, 3, 7, 8, 9]);
    expect(lotto.matchCount(target)).toBe(3);
  });

  test('toString 함수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
  });
});
