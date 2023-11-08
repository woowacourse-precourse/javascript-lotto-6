import Lotto from '../src/Lotto.js';
import { WINNING_RANK_COUNT } from '../src/constants/lotto.js';

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
  test('당첨 등수 반환 테스트', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto(numbers);
    expect(lotto.getWinningRank(winningNumber, bonusNumber)).toBe(
      WINNING_RANK_COUNT.firstPlace,
    );
  });
});
