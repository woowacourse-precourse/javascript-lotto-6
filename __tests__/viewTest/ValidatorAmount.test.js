import ValidatorAmount from "../../src/View/ValidatorAmount";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant";
import STRING_CONSTANT from "../test_constant/stringConstant";
import NUMBER_CONSTANT from "../test_constant/numberConstant";
import LottoValidationError from "../../src/Error/LottoValidationError";

const factor1 = '123';
const factor2 = '';
const factor3 = "012"
const factor4 = " 12";

describe('ValidatorAmount isEmptyString', () => {
  test('isEmptyString Function type이다 ', () => {
    expect(typeof (ValidatorAmount.isEmptyString)).toBe('function');
  })
  test('isEmptyString 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach((input) => {
      expect(() => {
        ValidatorAmount.isEmptyString(input)
      }).toThrow(new LottoValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    expect(() => ValidatorAmount.isEmptyString(factor1)).not.toThrow();
  });
  test('isEmptyString 기능 검사, 인자가 비어있는 문자열이면 에러를 throw한다 ', () => {
    expect(() =>{
      ValidatorAmount.isEmptyString(factor2)
    }).toThrow(new LottoValidationError(ERROR_CONSTANT.EMPTY_STRING));
  })
});

describe('ValidatorAmount isParsableAsInteger', () => {
  test('isParsableAsInteger Function type이다 ', () => {
    expect(typeof (ValidatorAmount.isParsableAsInteger)).toBe('function');
  })
  test('isParsableAsInteger 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach((input) => {
      expect(() => {
        ValidatorAmount.isParsableAsInteger(input)
      }).toThrow(new LottoValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    expect(() => ValidatorAmount.isParsableAsInteger(factor1)).not.toThrow();
  })
  test('isParsableAsInteger 기능 검사, 2자리 문자열의 첫번째가 유효한 숫자(1 ~ 9)가 아니면 throw한다 ', () => {
    expect(() => {
      ValidatorAmount.isParsableAsInteger(factor3)
    }).toThrow(new LottoValidationError(`${factor3}${ERROR_CONSTANT.UNCONVERTIBLE_STRING}`));
    expect(() => {
      ValidatorAmount.isParsableAsInteger(factor4)
    }).toThrow(new LottoValidationError(`${factor4}${ERROR_CONSTANT.UNCONVERTIBLE_STRING}`));
  })
})

const factor5 = 123;
const factor6 = -1;
const factor7 = 0;

describe('ValidatorAmount isNegativeAmount', () => {
  test('isNegativeAmount Function type이다 ', () => {
    expect(typeof (ValidatorAmount.isParsableAsInteger)).toBe('function');
  })
  test('isNegativeAmount 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    NUMBER_CONSTANT.errorNumberTestCases.forEach((input) => {
      expect(() => {
        ValidatorAmount.isNegativeAmount(input)
      }).toThrow(new LottoValidationError(`${input}${ERROR_CONSTANT.NOT_A_NUMBER}`));
    })
    expect(() => ValidatorAmount.isNegativeAmount(factor5)).not.toThrow();
  })
  test('isNegativeAmount 기능 검사, 0보다 작은 인자가 작으면 에러를 throw한다 ', () => {
    expect(() => {
      ValidatorAmount.isNegativeAmount(factor6)
    }).toThrow(new LottoValidationError(`${factor6}${ERROR_CONSTANT.NEGATIVE_AMOUNT}`));
    expect(() => {
      ValidatorAmount.isNegativeAmount(factor7)
    }).not.toThrow();
  })
})

const factor8 = 1000;
const factor9 = 1001;
const factor10 = 1;

describe('ValidatorAmount isAmountNotDivisibleByLottoTicketPirce', () => {
  test('isAmountNotDivisibleByLottoTicketPirce Function type이다 ', () => {
    expect(typeof (ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce)).toBe('function');
  })
  test('isAmountNotDivisibleByLottoTicketPirce 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    NUMBER_CONSTANT.errorNumberTestCases.forEach((input) => {
      expect(() => {
        ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce(input)
      }).toThrow(new LottoValidationError(`${input}${ERROR_CONSTANT.NOT_A_NUMBER}`));
    })
    expect(() => {
      ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce(factor8)
    }).not.toThrow();
  })
  test('isAmountNotDivisibleByLottoTicketPirce 기능 검사, 0보다 작은 인자가 작으면 에러를 throw한다 ', () => {
    expect(() => {
      ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce(factor9)
    }).toThrow(new LottoValidationError(`${ERROR_CONSTANT.LOTTO_REMAINING_BALANCE(factor10)}`));
    expect(() => {
      ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce(factor8)
    }).not.toThrow();
  })
})