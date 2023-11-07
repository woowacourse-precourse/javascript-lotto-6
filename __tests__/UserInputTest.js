import UserInput from "../src/Utilities/UserInput.js"; // UserInput 파일의 경로에 맞게 수정하세요
import { Console } from "@woowacourse/mission-utils";

// mock Console.readLineAsync() 함수
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe("UserInput 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("inputAmount()", async () => {
    Console.readLineAsync.mockResolvedValue("20000");

    const amount = await UserInput.inputAmount();
    expect(amount).toBe(20000);
  });

  test("inputNumber()", async () => {
    Console.readLineAsync.mockResolvedValue("1, 2, 3, 4, 5, 6");

    const numbers = await UserInput.inputNumber();
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("inputBonus()", async () => {
    Console.readLineAsync.mockResolvedValue("7");

    const bonusNumber = await UserInput.inputBonus([1, 2, 3, 4, 5, 6]);
    expect(bonusNumber).toBe(7);
  });
});
