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

  test('로또 번호에 보너스 번호가 포함되어 있으면 true를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const hasBonus = lotto.hasContainBonusNumber(6);

    expect(hasBonus).toBe(true);
  });

  test('로또 번호에 보너스 번호가 포함되어 있지 않으면 false를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const hasBonus = lotto.hasContainBonusNumber(7);

    expect(hasBonus).toBe(false);
  });

  test('로또 번호와 당첨 번호를 비교하여 일치하는 숫자 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    const matchingCount = lotto.countMatchWinningNumbers(winningNumbers);

    expect(matchingCount).toBe(3);
  });

  test('로또 번호와 당첨 번호, 보너스 번호를 비교하여 결과를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    const bonusNumber = 6;
    const result = lotto.getLottoComparisonResults(winningNumbers, bonusNumber);

    expect(result.matchingCount).toBe(3);
    expect(result.hasBonusNumber).toBe(true);
  });

  test('로또 번호가 오름차순으로 재정렬되어 반환되는지 테스트한다.', () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    const sortedLotto = lotto.getSortedNumbers();

    expect(sortedLotto).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
