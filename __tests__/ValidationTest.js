import ErrorMessage from '../src/domain/errors/ErrorMessage.js';
import InputValidator from '../src/domain/validator/InputValidator.js';

describe('Number Validation', () => {
  const inputValidator = new InputValidator();

  test('숫자가 아닌 문자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateNumber('string');
    }).toThrow(ErrorMessage);
  });

  test('음수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validatePositiveNumber('-1');
    }).toThrow(ErrorMessage);
  });

  test('정수가 아닌 소수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateInteger('0.5');
    }).toThrow(ErrorMessage);
  });
});

describe('Unit Cost Validation', () => {
  const inputValidator = new InputValidator();

  test('잘못된 단위를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateUnitCost('1001');
    }).toThrow(ErrorMessage);
  });
});

describe('List<number> Validation', () => {
  const inputValidator = new InputValidator();

  test('중복된 숫자가 입력되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateNoDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow(ErrorMessage);
  });

  test('로또 번호 개수가 맞지 않으면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateDrawCases([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ErrorMessage);
  });
});

describe('Lotto Number Validation', () => {
  const inputValidator = new InputValidator();
  const blankTestList = '1,2,3, ,5,6';

  test('공백을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateNoIncludeBlank(blankTestList);
    }).toThrow(ErrorMessage);
  });

  test('범위를 벗어나는 숫자가 입력되면 예외가 발생한다.', () => {
    expect(() => {
      inputValidator.validateNotInRange([1, 2, 3, 4, 5, 46]);
    }).toThrow(ErrorMessage);
  });
});
