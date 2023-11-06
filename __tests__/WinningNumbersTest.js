import { ERROR } from '../src/constant/index';
import WinningNumbers from '../src/WinningNumbers';

describe('WinningNumbers 클래스 테스트', () => {
  test('당첨 번호(로또 번호, 보너스 번호)를 반환한다.', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const result = new WinningNumbers(lottoNumbers, bonusNumber);

    expect(result.getWinningNumbers()).toEqual({
      lottoNumbers,
      bonusNumber,
    });
  });

  describe('당첨(로또) 번호 예외 테스트', () => {
    const bonusNumber = 7;

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers([1, 2, 3, 4, 5], bonusNumber);
      }).toThrow(ERROR.LOTTO_NUMBERS.LENGTH);
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers([1, 1, 2, 5, 7, 27], bonusNumber);
      }).toThrow(ERROR.LOTTO_NUMBERS.UNIQE);
    });

    test.each([[[0, 1, 2, 3, 4, 5]], [[46, 1, 2, 3, 4, 5]]])(
      '당첨 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다. (numbers: %s)',
      numbers => {
        expect(() => {
          new WinningNumbers(numbers, bonusNumber);
        }).toThrow(ERROR.LOTTO_NUMBERS.RANGE);
      }
    );
  });

  describe('보너스 번호 예외 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers(winningNumbers, '23a');
      }).toThrow(ERROR.BONUS_NUMBER.NUMBER);
    });

    test('보너스 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers(winningNumbers, '56');
      }).toThrow(ERROR.BONUS_NUMBER.RANGE);
    });

    test('보너스 번호가 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers(winningNumbers, '1');
      }).toThrow(ERROR.BONUS_NUMBER.UNIQE);
    });
  });
});
