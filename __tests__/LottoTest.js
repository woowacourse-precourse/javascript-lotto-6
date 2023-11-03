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

  test('로또 번호에 1~45사이의 범위밖의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 공백이 포함된 경우 예외가 발생한다. => 뒤쪽에 공백이 포함된 경우', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '1 ']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자형태가 아닌경우 예외가 발생한다. => 앞쪽에 공백이 포함된 경우', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, ' 45']);
    }).toThrow('[ERROR]');
  });
});
