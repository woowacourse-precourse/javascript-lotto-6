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

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.2, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('getMatchingCount: 당첨 번호와 일치하는 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 5, 7];

    expect(lotto.getMatchingCount(winningNumbers)).toBe(5);
  });

  test('getRank: 당첨 로또와 비교하여 등수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 9;

    expect(lotto.getRank(winningNumbers, bonusNumber)).toBe(3);
  });
});
