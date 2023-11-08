import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 되지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1부터 45까지의 숫자가 아니면 예외가 발생한다. - 1보다 작은 경우', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1부터 45까지의 숫자가 아니면 예외가 발생한다. - 45보다 큰 경우', () => {
    expect(() => {
      new Lotto([1, 10, 20, 30, 40, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1부터 45까지의 숫자가 아닌 문자가 있다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'c', 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 오름차순 정렬.', () => {
    const lotto = new Lotto([6, 1, 3, 4, 5, 2]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 당첨 등수 판별 - 1등', () => {
    const lotto = new Lotto([7, 11, 19, 22, 33, 44]);
    const winningNumbers = [7, 11, 19, 22, 33, 44];
    const bonusNumbers = 45;
    expect(lotto.getRanking(winningNumbers, bonusNumbers)).toBe(1);
  });

  test('로또 당첨 등수 판별 - 2등', () => {
    const lotto = new Lotto([7, 11, 19, 22, 33, 44]);
    const winningNumbers = [7, 11, 19, 22, 33, 45];
    const bonusNumbers = 44;
    expect(lotto.getRanking(winningNumbers, bonusNumbers)).toBe(2);
  });

  test('로또 당첨 등수 판별 - 3등', () => {
    const lotto = new Lotto([7, 11, 19, 22, 33, 44]);
    const winningNumbers = [7, 11, 19, 22, 33, 45];
    const bonusNumbers = 42;
    expect(lotto.getRanking(winningNumbers, bonusNumbers)).toBe(3);
  });

  test('로또 당첨 등수 판별 - 4등', () => {
    const lotto = new Lotto([7, 11, 19, 22, 33, 44]);
    const winningNumbers = [7, 11, 19, 22, 36, 45];
    const bonusNumbers = 44;
    expect(lotto.getRanking(winningNumbers, bonusNumbers)).toBe(4);
  });

  test('로또 당첨 등수 판별 - 5등', () => {
    const lotto = new Lotto([7, 11, 19, 22, 33, 44]);
    const winningNumbers = [7, 11, 19, 20, 32, 45];
    const bonusNumbers = 44;
    expect(lotto.getRanking(winningNumbers, bonusNumbers)).toBe(5);
  });
});
