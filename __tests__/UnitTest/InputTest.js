import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../../src/Input";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() =>
    Promise.resolve(input)
  );
};

describe("Input test", () => {
  const PASS_CASES = ["1000", "3000", "11000", "222000"];
  test.each(PASS_CASES)("로또 구입 입력 성공", async (input) => {
    mockQuestions(input);
    const answer = await Input.readMoneyBuyingLotto();
    expect(answer).toEqual(input);
  });

  const FAIL_CASES = ["1000j", "100", "1230", "q98 re", "1 000"];
  test.each(FAIL_CASES)("로또 구입 입력 실패", async (input) => {
    mockQuestions(input);
    await expect(Input.readMoneyBuyingLotto()).rejects.toThrow("[ERROR]");
  });
});
