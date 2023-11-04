import { Console } from "@woowacourse/mission-utils";
import WinningNumberInput from "../src/WinningNumberInput";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest
    .fn()
    .mockImplementation(() => Promise.resolve(inputs.shift()));
};

describe("WinningNumberInput 클래스", () => {
  test("입력", async () => {
    //given
    const WIN_NUMBERS_STR = "1,2,3,4,5,6";
    const BONUS_NUMBER_STR = "7";

    mockQuestions([WIN_NUMBERS_STR, BONUS_NUMBER_STR]);

    //when
    const winningNumber = await WinningNumberInput.collect();

    //then
    expect(winningNumber).toEqual([WIN_NUMBERS_STR, BONUS_NUMBER_STR]);
  });
});
