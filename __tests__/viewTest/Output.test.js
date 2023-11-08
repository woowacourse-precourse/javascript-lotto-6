import { Console } from '@woowacourse/mission-utils';
import Output from '../../src/View/Output.js';
import ValidationError from '../../src/Error/ValidationError.js';
import ERROR_CONSTANT from '../../src/Constant/ErrorConstant.js';
import STRING_CONSTANT from '../test_list/StringList';
import ARRAY_LIST from '../test_list/ArrayList.js'

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const testCases = [
  { input: "2000", expected: "2000" },
  { input: "undefined", expected: "undefined" },
  { input: "null", expected: "null" },
  { input: "", expected: "" },
  { input: "ab", expected: "ab" },
];

describe('Output outputString', () => {
  test('outputString 은 Function type이다 ', () => {
    expect(typeof (Output.outputString)).toBe("function");
  })
  test('outputString 인자 유효성 검사, string이 아니면 에러를 thorw한다  ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach((input) => {
      expect(() => Output.outputString(input)).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
  })
  test('outputString 은 값을 정상적으로 리턴한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      const logSpy = getLogSpy();
      Output.outputString(input);
      expect(logSpy).toHaveBeenCalledWith(expected);
    });
  });
});

describe('Output outputArray', () => {
  test('outputArray 은 Function type이다 ', () => {
    expect(typeof (Output.outputArray)).toBe("function");
  })
  test('outputArray 인자 유효성 검사, 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      expect(() => Output.outputArray(input)).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY))
    });
  })
  test('outputArray 은 값을 정상적으로 리턴한다 ', () => {
    const output = ['hello', 'hello'];
    const expected = '[hello, hello]';
      const logSpy = getLogSpy();
      Output.outputArray(output);
      expect(logSpy).toHaveBeenCalledWith(expected);
  });
});
