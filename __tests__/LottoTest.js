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
  test('로또 번호가 오름차순으로 정렬되어있지 않다면 예외가 발생한다,', () => {
    expect(() => {
      new Lotto([1, 3, 2, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  describe('countMatchingNumbers 메서드 테스트', () => {
    test('로또 번호와 일치하는 숫자의 개수를 반환한다.', () => {
      // given
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const numbers = [1, 2, 3, 4, 5, 7];

      // when
      const result = lotto.countMatchingNumbers(numbers);

      // then
      expect(result).toBe(5);
    });
  });
});
