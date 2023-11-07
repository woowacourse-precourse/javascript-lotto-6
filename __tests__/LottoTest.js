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

  test.each([[[0, 1, 2, 3, 4, 5]], [[1, 3, 5, 7, 9, 46]]])(
    '로또 번호에 범위 밖의 수가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow('[ERROR]');
    }
  );
});
