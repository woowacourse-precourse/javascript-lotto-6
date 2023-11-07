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
  test('숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    const numbers = [1, 2, NaN, 4, 5, 6];

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.', () => {
    const numbers = [0, 2, 3, 4, 5, 6];

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 45, 46];

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 예외가 발생하지 않는다.', () => {
    const numbers = [1, 7, 17, 27, 37, 45];

    expect(() => {
      new Lotto(numbers);
    }).not.toThrow('[ERROR]');
  });
});
