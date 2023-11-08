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

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1부터 45까지의 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -1]);
    }).toThrow('[ERROR]');
  });
});
