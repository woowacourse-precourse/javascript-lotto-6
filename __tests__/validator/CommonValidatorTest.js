import { COMMON_ERROR, LOTTO_ERROR } from '../../src/constants/message/error';
import CommonValidator from '../../src/validator/CommonValidator';

describe('공통 검증 클래스 문자 테스트', () => {
  test('문자가 입력되는 경우 예외가 발생한다.', () => {
    const numbers = ['a', 'b', '{}', '[]'];

    numbers.forEach(number => {
      expect(() => CommonValidator.validateIsNumber(Number(number))).toThrow(
        COMMON_ERROR.number,
      );
    });
  });

  test('NaN이 입력되는 경우 예외가 발생한다.', () => {
    const number = NaN;

    expect(() => CommonValidator.validateIsNumber(number)).toThrow(
      COMMON_ERROR.number,
    );
  });

  test('특수 문자가 입력되는 경우 예외가 발생한다.', () => {
    const numbers = ['!', '@', '.', '-'];

    numbers.forEach(number => {
      expect(() => CommonValidator.validateIsNumber(Number(number))).toThrow(
        COMMON_ERROR.number,
      );
    });
  });
});

describe('공통 검증 클래스 로또 번호 범위 테스트', () => {
  test('로또 번호가 0 이하라면 예외가 발생한다.', () => {
    expect(() => {
      CommonValidator.validateLottoNumberInRange(0);
    }).toThrow(LOTTO_ERROR.range);
  });

  test('로또 번호가 46 이상이라면 예외가 발생한다.', () => {
    expect(() => {
      CommonValidator.validateLottoNumberInRange(46);
    }).toThrow(LOTTO_ERROR.range);
  });
});
