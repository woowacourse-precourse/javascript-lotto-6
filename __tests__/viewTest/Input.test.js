import { Console } from "@woowacourse/mission-utils"; 
import Input from "../../src/View/Input";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  
	Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
	  return Promise.resolve(input);
	});
};

const testCases = [
  { input: "2000", expected: "2000" },
  { input: "undifned", expected: "undifned" },
  { input: "null", expected: "null" },
  { input: "", expected: "" },
  { input: "ab", expected: "ab" },
];

describe('View getLottoPurchaseAmount', () => {
  test('getLottoPurchaseAmount는 Function type이다 ', () => {
    expect(typeof (Input.getLottoPurchaseAmount)).toBe("function");
  })
  test('getLottoPurchaseAmount는 값을 정상적으로 리턴한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      const inputs = [input];
      mockQuestions(inputs);
      expect(await Input.getLottoPurchaseAmount()).toStrictEqual(expected);
    });
  });
});

describe('View getLottoCommonWinningNumbers', () => {
  test('getLottoCommonWinningNumbers는 Function type이다 ', () => {
    expect(typeof (Input.getLottoCommonWinningNumbers)).toBe("function");
  })
  test('getLottoCommonWinningNumbers는 값을 정상적으로 리턴한다 ', () => {
    testCases.forEach (async ({ input, expected }) => {
      const inputs = [input];
      mockQuestions(inputs);
      expect(await Input.getLottoCommonWinningNumbers()).toStrictEqual(expected);
    });
  });
});
