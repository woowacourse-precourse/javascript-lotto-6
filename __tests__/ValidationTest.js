import ErrorMessage from '../src/domain/errors/ErrorMessage.js';
import InputValidator from '../src/domain/validator/InputValidator.js';

describe('Number Validation', () => {
  const inputValidator = new InputValidator();

  test('숫자가 아닌 문자를 입력', () => {
    expect(() => {
      inputValidator.validateNumber('string');
    }).toThrow(ErrorMessage);
  });

  test('음수를 입력', () => {
    expect(() => {
      inputValidator.validatePositiveNumber('-1');
    }).toThrow(ErrorMessage);
  });

  test('정수가 아닌 소수를 입력', () => {
    expect(() => {
      inputValidator.validateInteger('0.5');
    }).toThrow(ErrorMessage);
  });
});
