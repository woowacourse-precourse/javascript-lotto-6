import { Console } from "@woowacourse/mission-utils"; 
import getUserInputAsync from "../../src/View/input";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant.js";
import STRING_CONSTANT from "../test_list/StringList.js";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  
	Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
	  return Promise.resolve(input);
	});
};

const testCases = [
  { input: "2000", expected: "2000" },
  { input: "undefined", expected: "undefined" },
  { input: "null", expected: "null" },
  { input: "", expected: "" },
  { input: "ab", expected: "ab" },
];

describe('Input getUserInputAsync', () => {
  test('getUserInputAsync 은 Function type이다 ', () => {
    expect(typeof (getUserInputAsync)).toBe("function");
  })
  test('getUserInputAsync 인자 유효성 검사, string이 아니면 에러를 thorw한다  ', () => {
    STRING_CONSTANT.errorStringTestCases.forEach(async (input) => {
      try {
        await getUserInputAsync(input);
      } catch(error) {
        expect(error.message).toBe(`${ERROR_CONSTANT.ERROR_PRIFIX}${ERROR_CONSTANT.IS_NOT_STRING}`);
      }
    })
  })
  test('getUserInputAsync 은 값을 정상적으로 리턴한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      const inputs = [input];
      const message = "test";
      mockQuestions(inputs);
      expect(await getUserInputAsync(message)).toStrictEqual(expected);
    });
  });
});

