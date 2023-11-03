import { lottoCounter, inputMoneyValidater, inputMoneyDivideValidater } from "../src/App.js";

describe("구입 금액에 따른 로또 개수 테스트", () => {
  test("구입 금액에 따라 올바른 개수의 로또를 발행한다.", () => {
    const INPUT = 10000;
    const OUTPUT = 10;

    const result = lottoCounter(INPUT);
    expect(result).toBe(OUTPUT);
  });
  // 아래에 추가 테스트 작성 가능

  test.each([
    [["만 원"]],
    [["10000.0"]],
    [["-500"]],
    [["0b101"]],
    [["1E3"]],
  ])("입력이 숫자가 아닐 경우, 에러가 발생한다.", async (inputs) => {
  
    // then
    expect(inputMoneyValidater(inputs)).rejects.toThrow("[ERROR]");
  });

  test("구입 금액이 로또 금액으로 나눠 떨어지지 않을 경우, 에러가 발생한다.", () => {
    const INPUT = 5500;

    expect(inputMoneyDivideValidater(INPUT)).rejects.toThrow("[ERROR]");
  });
});