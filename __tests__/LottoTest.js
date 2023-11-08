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

  test.each([
    [['j', 1, 2, 3, 4, 5]],
    [[1, 2, 3, '4j', 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
  ])('로또 번호에 숫자가 아닌 문자열이 있으면 예외가 발생한다.', numbers => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test.each([
    [[1, 2, 3, 55, 6, 7]],
    [[0, 42, 21, 11, 4, 9]],
    [[1, 2, 9, 12, -3, 32]],
  ])('로또 번호가 1~45사이의 숫자가 아니라면 예외가 발생한다.', numbers => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });
});
