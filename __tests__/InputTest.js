import { Console } from "@woowacourse/mission-utils";
import Input from "../src/view/Input";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("Input 테스트", () => {
  test("구입 금액 입력받기 기능 & 예외처리 test", async () => {
    //given
    const INPUT_STRING = ["3000", "aaa"];

    //when
    mockQuestions(INPUT_STRING);

    //then
    const money = await Input.getMoney();
    expect(money).toBe(3000);
    expect(async () => {
      await Input.getMoney();
    }).rejects.toThrow("[ERROR]");
  });

  test("당첨번호 입력받기 기능 & 예외처리 test", async () => {
    //given
    const INPUT_STRING = ["1,2, 3 , 4, 5,6  ", "1,2,3,4,a,6"];

    //when
    mockQuestions(INPUT_STRING);

    //then
    const winnigNumber = await Input.getWinningNumber();
    expect(winnigNumber).toEqual([1, 2, 3, 4, 5, 6]);
    expect(async () => {
      await Input.getWinningNumber();
    }).rejects.toThrow("[ERROR]");
  });

  test("보너스 번호 입력 기능 & 예외처리 test", async () => {
    //given
    const INPUT_STRING = ["1", "aa"];

    //when
    mockQuestions(INPUT_STRING);

    //then
    const bonusNumber = await Input.getBonusNumber();
    expect(bonusNumber).toBe(1);
    expect(async () => {
      await Input.getBonusNumber();
    }).rejects.toThrow("[ERROR]");
  });
});
