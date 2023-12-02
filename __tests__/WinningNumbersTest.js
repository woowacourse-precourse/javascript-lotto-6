import { LOTTO_NUMBERS } from '../src/constant/constant.js';
import Lotto from '../src/Lotto.js';
import WinningNumbers from '../src/model/WinningNumbers.js';
import { ERROR } from '../src/constant/message.js';

describe('WinningNumbers 클래스 테스트', () => {
  const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);

  describe('보너스 번호 검증 테스트', () => {
    test.each([[1.5], ['yuna']])('보너스 번호가 숫자(정수)가 아니면 예외가 발생한다.', (input) => {
      expect(() => new WinningNumbers(winningLotto, input)).toThrow(ERROR.isNotNumber);
    });

    test.each([[LOTTO_NUMBERS.min - 1], [LOTTO_NUMBERS.max + 1]])(
      `보너스 번호가 ${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 범위 내의 숫자가 아니면 예외가 발생한다.`,
      (input) => {
        expect(() => new WinningNumbers(winningLotto, input)).toThrow(ERROR.isNotInRange);
      },
    );

    test.each([
      {
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 1,
      },
      {
        winningNumbers: [39, 27, 28, 14, 9, 11],
        bonusNumber: 28,
      },
    ])(
      '보너스 번호가 당첨 번호와 중복되는 경우에 예외가 발생한다.',
      ({ winningNumbers, bonusNumber }) => {
        expect(() => new WinningNumbers(new Lotto(winningNumbers), bonusNumber)).toThrow(
          ERROR.hasSameNumber,
        );
      },
    );

    test.each([
      {
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 12,
      },
      {
        winningNumbers: [39, 27, 28, 14, 9, 11],
        bonusNumber: 33,
      },
    ])(
      `보너스 번호가 당첨 번호와 중복되지 않는 ${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 범위 내 정수인 경우, 예외가 발생하지 않는다.}`,
      ({ winningNumbers, bonusNumber }) => {
        expect(() => new WinningNumbers(new Lotto(winningNumbers), bonusNumber)).not.toThrow();
      },
    );
  });
});
