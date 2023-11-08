import Validator from '../src/utils/Validator';
import { ErrorMessage } from '../src/constants/ErrorMessage';

describe('보너스 번호 입력 테스트', () => {
  test('보너스 번호가 1~45 사이의 숫자가 아닌 경우', () => {
    expect(() => {
      Validator.bonusNumberValidator('-1');
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
  });

  test('보너스 번호가 당첨 번호와 중복되는 경우', () => {
    expect(() => {
      Validator.bonusNumberValidator('1', [1, 2, 3, 4, 5, 6]);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
  });
});
