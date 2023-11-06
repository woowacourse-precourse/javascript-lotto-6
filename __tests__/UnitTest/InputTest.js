import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../../src/Input";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() =>
    Promise.resolve(input)
  );
};

describe("로또 구입 금액 입력 테스트", () => {
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

// eslint-disable-next-line
describe("당첨 번호 입력 테스트", () => {
  const PASS_CASES = ["7,11,21,34,42,45", "1,3,9,21,33,34", "4,5,6,7,8,41"];
  test.each(PASS_CASES)("당첨 번호 성공", async (input) => {
    mockQuestions(input);
    const answer = await Input.readLottoNumbers();
    expect(answer).toStrictEqual(input);
  });

  const FAIL_CASES = [
    "7,11,21,34,42,21",
    "0,1,2,3,4,5",
    "4,5,6,7,8,46",
    "1,2,3",
  ];
  test.each(FAIL_CASES)("당첨 번호 실패", async (input) => {
    mockQuestions(input);
    await expect(Input.readLottoNumbers()).rejects.toThrow("[ERROR]");
  });
});
