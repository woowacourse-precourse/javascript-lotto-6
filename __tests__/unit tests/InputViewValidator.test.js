import CustomError from '../../src/errors/CustomError';
import ERROR from '../../src/utils/constants/error';
import InputViewValidator from '../../src/utils/validators/InputViewValidator';

describe('InputViewValidator 테스트', () => {
  describe('isValidInput 메서드', () => {
    it('유효한 정수 입력에 대해 오류를 던지지 않아야 한다', () => {
      const input = '5';
      expect(() => InputViewValidator.isValidInput(input)).not.toThrow();
    });

    it('공백 입력에 대해 CustomError를 던져야 한다', () => {
      const input = '';
      expect(() => InputViewValidator.isValidInput(input)).toThrow(CustomError);
      expect(() => InputViewValidator.isValidInput(input)).toThrow(
        ERROR.inputView.emptyInput,
      );
    });

    it('숫자가 아닌 입력에 대해 CustomError를 던져야 한다', () => {
      const input = 'NaN';
      expect(() => InputViewValidator.isValidInput(input)).toThrow(CustomError);
      expect(() => InputViewValidator.isValidInput(input)).toThrow(
        ERROR.inputView.notNumber,
      );
    });

    it('음수 입력에 대해 CustomError를 던져야 한다', () => {
      const input = '-5';
      expect(() => InputViewValidator.isValidInput(input)).toThrow(CustomError);
      expect(() => InputViewValidator.isValidInput(input)).toThrow(
        ERROR.inputView.negativeValue,
      );
    });

    it('정수가 아닌 입력에 대해 CustomError를 던져야 한다', () => {
      const input = '5.5';
      expect(() => InputViewValidator.isValidInput(input)).toThrow(CustomError);
      expect(() => InputViewValidator.isValidInput(input)).toThrow(
        ERROR.inputView.notInteger,
      );
    });
  });

  describe('areValidMultipleInputs 메서드', () => {
    it('유효한 정수 배열 입력에 대해 오류를 던지지 않아야 한다', () => {
      const input = '1,2,3';
      expect(() =>
        InputViewValidator.areValidMultipleInputs(input),
      ).not.toThrow();
    });

    it('배열 내에 공백이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,2,,3';
      expect(() => InputViewValidator.areValidMultipleInputs(input)).toThrow(
        CustomError,
      );
    });

    it('배열 내에 숫자가 아닌 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,2,NaN';
      expect(() => InputViewValidator.areValidMultipleInputs(input)).toThrow(
        CustomError,
      );
    });

    it('배열 내에 음수 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,-2,3';
      expect(() => InputViewValidator.areValidMultipleInputs(input)).toThrow(
        CustomError,
      );
    });

    it('배열 내에 정수가 아닌 입력이 포함된 경우 CustomError를 던져야 한다', () => {
      const input = '1,2.5,3';
      expect(() => InputViewValidator.areValidMultipleInputs(input)).toThrow(
        CustomError,
      );
    });

    it('잘못된 구분자로 입력된 배열에 대해 CustomError를 던져야 한다', () => {
      const input = '1;2,3';
      expect(() => InputViewValidator.areValidMultipleInputs(input)).toThrow(
        CustomError,
      );
    });
  });
});
