import Validator from '../src/utils/Validator';
import ErrorMessage from '../src/constants/ErrorMessage';

describe('당첨 번호 입력 테스트', () => {
  test('당첨 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.winningNumberValidator('1, 2, 3, 4, 5, a');
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
  });

  test('당첨 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.winningNumberValidator('1, 2, 3, 4, 5, 46');
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
  });

  test('당첨 번호가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.winningNumberValidator('1, 2, 3, 4, 5');
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
  });

  test('당첨 번호에 중복이 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.winningNumberValidator('1, 2, 3, 4, 5, 5');
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
  });
});
