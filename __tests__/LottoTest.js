import Lotto from '../src/domains/Lotto.js';

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

  test.each([
    [['q', 1, 2, 3, 4, 5]],
    [[1, 2, 3, '4q', 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'z']],
  ])(
    '로또 번호에 숫자가 아닌 문자열이 있으면 예외가 발생한다. new Lotto(%p)',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    },
  );
});
