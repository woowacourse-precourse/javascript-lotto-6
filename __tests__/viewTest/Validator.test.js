import Validator from "../../src/View/Validator";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant";
import STRING_LIST from "../test_list/StringList";
import NUMBER_LIST from "../test_list/NumberList";
import ValidationError from "../../src/Error/ValidationError";

describe('Validator assertNonEmptyString', () => {
  test('assertNonEmptyString Function type이다 ', () => {
    expect(typeof (Validator.assertNonEmptyString)).toBe('function');
  })
  test('assertNonEmptyString 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_LIST.errorStringTestCases.forEach((input) => {
      expect(() => {
        Validator.assertNonEmptyString(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const input = '123';
    expect(() => Validator.assertNonEmptyString(input)).not.toThrow();
  });
  test('assertNonEmptyString 기능 검사, 인자가 비어있는 문자열이면 에러를 throw한다 ', () => {
    const input = '';
    expect(() =>{
      Validator.assertNonEmptyString(input)
    }).toThrow(new ValidationError(ERROR_CONSTANT.EMPTY_STRING));
  })
});

describe('Validator assertParsableAsInteger', () => {
  test('assertParsableAsInteger Function type이다 ', () => {
    expect(typeof (Validator.assertParsableAsInteger)).toBe('function');
  })
  test('assertParsableAsInteger 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_LIST.errorStringTestCases.forEach((input) => {
      expect(() => {
        Validator.assertParsableAsInteger(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const input = '123';
    expect(() => Validator.assertParsableAsInteger(input)).not.toThrow();
  })
  test('assertParsableAsInteger 기능 검사, 2자리 문자열의 첫번째가 유효한 숫자(1 ~ 9)가 아니면 throw한다 ', () => {
    const input1 = "012";
    const input2 = " 12";
    expect(() => {
      Validator.assertParsableAsInteger(input1)
    }).toThrow(new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING));
    expect(() => {
      Validator.assertParsableAsInteger(input2)
    }).toThrow(new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING));
  })
})

describe('Validator assertPositiveNumber', () => {
  test('assertPositiveNumber Function type이다 ', () => {
    expect(typeof (Validator.assertPositiveNumber)).toBe('function');
  })
  test('assertPositiveNumber 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    NUMBER_LIST.errorNumberTestCases.forEach((input) => {
      expect(() => {
        Validator.assertPositiveNumber(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const input = 123;
    expect(() => Validator.assertPositiveNumber(input)).not.toThrow();
  })
  test('assertPositiveNumber 기능 검사, 인자가 양의 정수가 아니면 에러를 throw한다 ', () => {
    const input1 = -1;
    const input2 = 0;
    expect(() => {
      Validator.assertPositiveNumber(input1)
    }).toThrow(new ValidationError(ERROR_CONSTANT.NEGATIVE_AMOUNT));
    expect(() => {
      Validator.assertPositiveNumber(input2)
    }).not.toThrow();
  })
})

const assertRemainderNotEqualTestList = [
  {value1: '1', value2: 1, expectedRemainderValue: 1},
  {value1: 1, value2: '1', expectedRemainderValue: 1},
  {value1: 1, value2: 1, expectedRemainderValue: '1'},
]

describe('Validator assertRemainderNotEqual', () => {
  test('assertRemainderNotEqual Function type이다 ', () => {
    expect(typeof (Validator.assertRemainderNotEqual)).toBe('function');
  })
  test('assertRemainderNotEqual 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    assertRemainderNotEqualTestList.forEach((value1, value2, expectedRemainderValue) => {
      expect(() => {
        Validator.assertRemainderNotEqual(value1, value2, expectedRemainderValue)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const value1 = 1;
    const value2 = 1;
    const expectedRemainderValue = 0;
    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, expectedRemainderValue)
    }).not.toThrow();
  })
  test('assertRemainderNotEqual 기능 검사, value1 % value2 !== expectedRemainderValue이면 에러를 throw한다 ', () => {
    const value1 = 1;
    const value2 = 1;
    const failExpectedRemainderValue = 1;
    const successExpectedRemainderValue = 0;

    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, failExpectedRemainderValue)
    }).toThrow(new ValidationError(ERROR_CONSTANT.REMAINDER_MISMATCH));
    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, successExpectedRemainderValue)
    }).not.toThrow();
  })
})