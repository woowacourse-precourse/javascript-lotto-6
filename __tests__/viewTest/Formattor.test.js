import STRING_CONSTANT from "../test_constant/stringConstant";
import NUMBER_CONSTANT from "../test_constant/numberConstant";
import Formattor from "../../src/View/Formattor";
import LottoValidationError from "../../src/Error/LottoValidationError";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant";

const factor1 = "123";

describe('Formattor formatParseAmountToNumber', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.formatParseAmountToNumber)).toBe('function');
  })
  test('formatParseAmountToNumber 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach((input) => {
      expect(() => {
        Formattor.formatParseAmountToNumber(input)
      }).toThrow(new LottoValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    expect(() => Formattor.formatParseAmountToNumber(factor1)).not.toThrow();
  });
  const testCases = [
    { input: "2000", expected: 2000 },
    { input: "abc", expected: NaN },
    { input: "", expected: 0 },
    { input: "-1", expected: -1 },
    { input: "1.2", expected: 1.2 },
  ];
  test('formatParseAmountToNumber 기능 검사, 문자열을 숫자로 파싱한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      expect(Formattor.formatParseAmountToNumber(input)).toStrictEqual(expected);
    });
  });
});

const factor2 = 1000;

describe('Formattor formatParseAmountToCount', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.formatParseAmountToCount)).toBe('function');
  })
  test('formatParseAmountToCount 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    NUMBER_CONSTANT.errorNumberTestCases.forEach((input) => {
      expect(() => {
        Formattor.formatParseAmountToCount(input)
      }).toThrow(new LottoValidationError(`${input}${ERROR_CONSTANT.NOT_A_NUMBER}`));
    })
    expect(() => Formattor.formatParseAmountToCount(factor2)).not.toThrow();
  });
  const testCases = [
    { input: 2000, expected: 2 },
    { input: 3000, expected: 3 },
    { input: 0, expected: 0 },
    { input: -1, expected: -0.001 },
    { input: 1.2, expected: 0.0012 },
  ];
  test(`formatParseAmountToCount 기능 검사, 입력받은 숫자를 조건에 따라 횟수로 파싱한다 `, () => {
    testCases.forEach (async ({ input, expected }) => {
      expect(Formattor.formatParseAmountToCount(input)).toStrictEqual(expected);
    });
  });
});

