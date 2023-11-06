import STRING_CONSTANT from "../test_constant/stringConstant";
import Formattor from "../../src/View/Formattor";
import LottoValidationError from "../../src/Error/LottoValidationError";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant";

const factor1 = "123";

describe('Formattor FormatParseAmountToNumber', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.FormatParseAmountToNumber)).toBe('function');
  })
  test('FormatParseAmountToNumber 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach((input) => {
      expect(() => {
        Formattor.FormatParseAmountToNumber(input)
      }).toThrow(new LottoValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    expect(() => Formattor.FormatParseAmountToNumber(factor1)).not.toThrow();
  });
  const testCases = [
    { input: "2000", expected: 2000 },
    { input: "abc", expected: NaN },
    { input: "", expected: 0 },
    { input: "-1", expected: -1 },
    { input: "1.2", expected: 1.2 },
  ];
  test('FormatParseAmountToNumber 기능 검사, 문자열을 숫자로 파싱한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      expect(Formattor.FormatParseAmountToNumber(input)).toStrictEqual(expected);
    });
  });
});

