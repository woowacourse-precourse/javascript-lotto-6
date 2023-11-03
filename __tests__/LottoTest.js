import Lotto from '../src/Lotto.js';

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

  test('로또 번호가 1~45의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 70]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'hi']);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 1000, 99);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 여러개 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 1000, [33, 24]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 1000, 'bonus');
    }).toThrow('[ERROR]');
  });

  test('금액에 숫자가 1000단위로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 2300, 2);
    }).toThrow('[ERROR]');
  });

  test('금액에 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 'dd', 2);
    }).toThrow('[ERROR]');
  });
});
