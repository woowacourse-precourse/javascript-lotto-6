import { Bonus } from "../src/Bonus.js";

describe("보너스 번호 입력 테스트", () => {
  test.each([
    [["숫자"],[1,2,3,4,5,6]],
    [["4.5"],[1,2,3,4,5,6]],
    [["-5"],[1,2,3,4,5,6]],
    [["0b101"],[1,2,3,4,5,6]],
    [["1E3"],[1,2,3,4,5,6]]
  ])("보너스 번호가 숫자가 아닐 경우, 에러가 발생한다.", (inputs,winningInput) => {

    expect(()=> {
      new Bonus(inputs, winningInput)
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 사이가 아닐 경우, 에러가 발생한다.", () => {
    const winningInput = [1,2,3,4,5,6];
    const BONUS_INPUT = "46";

    expect(()=> {
      new Bonus(BONUS_INPUT, winningInput)
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 보너스 번호가 중복될 경우, 에러가 발생한다.", () => {
    const input = [1,2,3,4,5,6];
    const BONUS_INPUT = "2";

    expect(()=> {
      new Bonus(BONUS_INPUT, input)
    }).toThrow("[ERROR]");
  });
});