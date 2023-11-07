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

  test('로또 번호에 1 ~ 45 이외의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 65, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['안', 2, 3, 4, 6, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['이0', 2, 3, 4, 6, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([2, 3, 4, 6, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow('[ERROR]');
  });
});
