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

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, '3', 'f', 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([-2, -1, 0, 45, 46, 100]);
    }).toThrow('[ERROR]');
  });
});
