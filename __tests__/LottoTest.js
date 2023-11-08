import Lotto from '../src/Lotto.js';
import { LOTTO } from '../src/constants/System.js';

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

  test('로또 번호에 문자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '얍']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45사이의 숫자가 존재하면 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 49, 6]);
    }).toThrow('[ERROR]');
  });

  describe.each([
    // winningNumbers, bonus, userLotto, matchCount, expectedRank]
    [[1, 2, 3, 4, 5, 7], 6, [1, 2, 3, 4, 5, 6], 5 + 1, '2등'],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 6], 6, '1등'],
    [[1, 2, 3, 4, 5, 6], 9, [1, 2, 3, 4, 5, 8], 5, '3등'],
    [[1, 2, 3, 4, 5, 6], 10, [1, 2, 3, 4, 8, 9], 4, '4등'],
    [[1, 2, 3, 4, 5, 6], 10, [1, 2, 3, 11, 18, 19], 3, '5등'],
  ])(
    'Lotto 클래스의 compareWinningNumbers 메서드',
    (winningNumbers, bonus, userLotto, matchCount, expectedRank) => {
      it(`${matchCount}개가 일치하면 ${expectedRank}을 반환해야 합니다`, () => {
        const lotto = Lotto.of(winningNumbers);
        const result = lotto.compareWinningNumbers(userLotto, bonus);
        expect(result).toBe(expectedRank);
      });
    },
  );
});
