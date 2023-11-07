import CustomError from '../../src/errors/CustomError';
import ERROR from '../../src/utils/constants/error';
import InputViewValidator from '../../src/utils/validators/InputViewValidator';

describe('InputViewValidator 테스트', () => {
  describe('isIntegerInput 메서드', () => {
    it('유효한 정수 입력에 대해 오류를 던지지 않아야 한다', () => {
      const input = '5';
      expect(() => InputViewValidator.isIntegerInput(input)).not.toThrow();
    });

    it('숫자가 아닌 입력에 대해 CustomError를 던져야 한다', () => {
      const input = 'NaN';
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        CustomError,
      );
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        ERROR.inputView.notNumber,
      );
    });

    it('음수 입력에 대해 CustomError를 던져야 한다', () => {
      const input = '-5';
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        CustomError,
      );
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        ERROR.inputView.negativeValue,
      );
    });

    it('정수가 아닌 입력에 대해 CustomError를 던져야 한다', () => {
      const input = '5.5';
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        CustomError,
      );
      expect(() => InputViewValidator.isIntegerInput(input)).toThrow(
        ERROR.inputView.notInteger,
      );
    });
  });

  describe('isIntegerArrayInput 메서드', () => {
    it('유효한 정수 배열 입력에 대해 오류를 던지지 않아야 한다', () => {
      const input = '1,2,3';
      expect(() => InputViewValidator.isIntegerArrayInput(input)).not.toThrow();
    });

    it('배열 내에 숫자가 아닌 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,2,NaN';
      expect(() => InputViewValidator.isIntegerArrayInput(input)).toThrow(
        CustomError,
      );
    });

    it('배열 내에 음수 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,-2,3';
      expect(() => InputViewValidator.isIntegerArrayInput(input)).toThrow(
        CustomError,
      );
    });

    it('배열 내에 정수가 아닌 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,2.5,3';
      expect(() => InputViewValidator.isIntegerArrayInput(input)).toThrow(
        CustomError,
      );
    });

    it('잘못된 구분자로 입력된 배열에 대해 CustomError를 던져야 한다', () => {
      const input = '1;2,3';
      expect(() => InputViewValidator.isIntegerArrayInput(input)).toThrow(
        CustomError,
      );
    });
  });
});
