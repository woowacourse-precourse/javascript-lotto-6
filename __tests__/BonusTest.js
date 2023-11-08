import Validator from '../src/Validator';
import { ERROR } from '../src/Constants';
import Lotto from '../src/model/Lotto';

describe('보너스 숫자 입력 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('보너스 숫자의 범위가 1 ~ 45 를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Validator.vaildateBonusNumber(lotto, 100);
    }).toThrow(ERROR.bonusRangeErrorMessage);
  });

  test('보너스 숫자에 숫자가 아닌 문자가 입력되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.vaildateBonusNumber(lotto, 'A');
    }).toThrow(ERROR.bonusInvalidErrorMessage);
  });

  test('보너스 숫자가 로또 당첨 번호의 숫자와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.vaildateBonusNumber(lotto, 1);
    }).toThrow(ERROR.bonusDuplicateErrorMessage);
  });
});
