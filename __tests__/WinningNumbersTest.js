import WinningNumbers from '../src/WinningNumbers.js';
import Lotto from '../src/Lotto.js';

describe('WinningNumbers 클래스 테스트', () => {
  describe('check 메서드 테스트', () => {
    test('당첨 번호와 일치하는 번호가 6개라면 1등이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(4);
    });

    test('당첨 번호와 일치하는 번호가 5개이고 보너스 번호와 일치하면 2등이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(3);
    });

    test('당첨 번호와 일치하는 번호가 5개이고 보너스 번호와 일치하지 않으면 3등이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(2);
    });

    test('당첨 번호와 일치하는 번호가 4개이면 4등이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 7, 8]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(1);
    });

    test('당첨 번호와 일치하는 번호가 3개이면 5등이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 7, 8, 9]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(0);
    });

    test('당첨 번호와 일치하는 번호가 2개이하면 꽝이다.', () => {
      // given
      const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([10, 11, 12, 13, 14, 15]);

      // when
      const result = winningNumbers.check(lotto);

      // then
      expect(result.getRank()).toBe(-1);
    });
  });
});
