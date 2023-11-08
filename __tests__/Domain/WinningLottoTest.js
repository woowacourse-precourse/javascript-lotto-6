import WinningLotto from '../../src/Domain/WinningLotto';
import ERROR from '../../src/constants/error.js';
import LOTTO from '../../src/constants/lotto';

describe('당첨 로또(WinningLotto) 클래스 테스트', () => {
  describe('예외가 발생하는 경우', () => {
    describe('보너스 번호가 로또 번호의 범위를 벗어나는 경우, 예외가 발생한다.', () => {
      // given
      const errorCases = [
        { bonusNumber: -1 },
        { bonusNumber: 0 },
        { bonusNumber: LOTTO.minNumber - 1 },
        { bonusNumber: LOTTO.maxNumber + 1 },
        { bonusNumber: 100 },
      ];

      const validNumbers = [1, 2, 3, 4, 5, 6];

      test.each(errorCases)(
        '보너스 번호로 범위 밖의 $bonusNumber가 주어지는 경우, 예외가 발생한다.',
        ({ bonusNumber }) => {
          // when
          const createWinningLotto = () =>
            new WinningLotto({ numbers: validNumbers, bonusNumber });

          // then
          expect(createWinningLotto).toThrow(ERROR.message.lotto.notInRange);
        },
      );
    });

    describe('보너스 번호가 로또 번호와 중복되는 경우, 예외가 발생한다.', () => {
      // given
      const errorCases = [
        { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 1 },
        { numbers: [10, 20, 30, 40, 41, 42], bonusNumber: 10 },
        { numbers: [6, 7, 8, 9, 10, 11], bonusNumber: 11 },
      ];

      test.each(errorCases)(
        '로또 번호 $numbers가 보너스 번호 $bonusNumber와 중복되어 예외가 발생한다.',
        ({ numbers, bonusNumber }) => {
          // when
          const createWinningLotto = () =>
            new WinningLotto({ numbers, bonusNumber });

          // then
          expect(createWinningLotto).toThrow(ERROR.message.lotto.notUnique);
        },
      );
    });
  });

  describe('메서드 테스트', () => {
    describe('getBonusNumber 메서드는 보너스 번호를 반환한다.', () => {
      // given
      const validNumbers = [1, 2, 3, 4, 5, 6];
      const cases = [
        { bonusNumber: 10 },
        { bonusNumber: 24 },
        { bonusNumber: 30 },
      ];

      test.each(cases)(
        'getBonusNumber 메서드는 보너스 번호인 $bonusNumber를 반환해야 한다.',
        ({ bonusNumber }) => {
          // when
          const winningLottoInstance = new WinningLotto({
            numbers: validNumbers,
            bonusNumber,
          });

          // then
          expect(winningLottoInstance.getBonusNumber()).toBe(bonusNumber);
        },
      );
    });
  });
});
