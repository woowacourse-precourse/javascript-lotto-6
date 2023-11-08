import Purchase from "../src/model/Purchase";

describe("구매 클래스 테스트", () => {
  test.each([
  [2500],
  [19400],
  [20100]])
  ("구매 금액이 1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.", (input) => {
  const RESULT = () => new Purchase(input);
  expect(RESULT).toThrow("[ERROR]");
  })

  test("구매 금액이 0원인 경우", () => {
    expect(() => {
      new Purchase(0);
    }).toThrow("[ERROR]");
  });

  test.each([
    ["2500원"],
    ["3,000"],
    ["3000$"]])
    ("구매 금액이 숫자로 구성되지 않은 경우 예외가 발생한다.", (input) => {
    const RESULT = () => new Purchase(input);
    expect(RESULT).toThrow("[ERROR]");
    })
})