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

  test('로또번호를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getNumbers()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또번호에서 당첨번호를 몇 개 포함하고 있는지 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = [1, 2, 3, 4, 6, 7];

    const result = lotto.getWinningCount(winningLotto);

    expect(result).toBe(5);
  });

  test('카운트 개수와 보너스 번호에 따라서 당첨결과에 추가된다.', () => {
    const winningResult = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
    };

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusLotto = 7;

    lotto.checkWinningResult(5, bonusLotto, winningResult);

    expect(winningResult).toStrictEqual({
      first: [],
      second: [],
      third: [[1, 2, 3, 4, 5, 6]],
      fourth: [],
      fifth: [],
    });
  });
});
