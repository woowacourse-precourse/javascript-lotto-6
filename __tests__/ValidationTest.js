import ErrorMessage from '../src/domain/errors/ErrorMessage.js';
import InputValidator from '../src/domain/validator/InputValidator.js';

// jest.mock('../src/domain/validator/InputValidator.js');
const testModel = require('../src/domain/validator/InputValidator.js');
testModel.default.create = jest.fn();

describe('Number Validation', () => {
  test('숫자가 아닌 문자를 입력', () => {
    const inputValidator = new InputValidator();
    expect(() => {
      inputValidator.validateNumber('string');
    }).toThrow(ErrorMessage);
  });
});
