import WinningLotto from '../../src/Model/WinningLotto.js';
import CustomError from '../../src/util/CustomError.js';
import ERROR from '../../src/constants/Error.js';

describe('WinningLotto 클래스 테스트', () => {
  test('보너스 번호 특이값 예외 테스트', () => {
    expect(() => {
      new WinningLotto({
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 'Test',
      });
    }).toThrow(new CustomError(ERROR.BONUS_NUMBER));
  });

  test('보너스 번호 중복값 예외 테스트', () => {
    expect(() => {
      new WinningLotto({
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 6,
      });
    }).toThrow(new CustomError(ERROR.BONUS_DUPLICATE));
  });

  test('보너스 번호 범위(1 ~ 45) 예외 테스트', () => {
    expect(() => {
      new WinningLotto({
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 50,
      });
    }).toThrow(new CustomError(ERROR.BONUS_RANGE));
  });

  test('당첨 번호, 보너스 번호 통과 테스트', () => {
    expect(() => {
      new WinningLotto({
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 43,
      });
    }).not.toThrow('[ERROR]');
  });
});
