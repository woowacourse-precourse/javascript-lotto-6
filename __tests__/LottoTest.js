import Lotto from '../src/Lotto.js';
import LottoError from '../src/error/LottoError.js';

describe('로또 클래스 테스트', () => {
  describe('로또 번호 유효성 검사', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(LottoError);
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(LottoError);
    });

    test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 50]);
      }).toThrow(LottoError);
    });

    test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6.5]);
      }).toThrow(LottoError);
    });
  });

  describe('당첨 통계 계산', () => {
    test('번호가 3개 일치할 때 당첨 통계가 정확히 계산되어야 한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkWin(7, [[1, 2, 3, 10, 20, 30]]);
      expect(lotto.winCheck[3]).toBe(1);
      expect(lotto.winCheck.total).toBe(5000);
    });

    test('번호가 4개 일치할 때 당첨 통계가 정확히 계산되어야 한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkWin(7, [[1, 2, 3, 4, 20, 30]]);
      expect(lotto.winCheck[4]).toBe(1);
      expect(lotto.winCheck.total).toBe(50000);
    });

    test('번호가 5개 일치(보너스 번호 불일치)할 때 당첨 통계가 정확히 계산되어야 한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkWin(7, [[1, 2, 3, 4, 5, 30]]);
      expect(lotto.winCheck[5]).toBe(1);
      expect(lotto.winCheck.total).toBe(1500000);
    });

    test('번호가 5개 일치(보너스 번호 일치)할 때 당첨 통계가 정확히 계산되어야 한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkWin(7, [[1, 2, 3, 4, 5, 7]]);
      expect(lotto.winCheck['5+']).toBe(1);
      expect(lotto.winCheck.total).toBe(30000000);
    });

    test('번호가 6개 일치할 때 당첨 통계가 정확히 계산되어야 한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.checkWin(7, [[1, 2, 3, 4, 5, 6]]);
      expect(lotto.winCheck[6]).toBe(1);
      expect(lotto.winCheck.total).toBe(2000000000);
    });
  });
});
