import Input from "../src/Input";

describe("InputValidator Test", () => {
  test("구매 금액 1,000 단위로 나누어 떨어지지 않는 값 예외 처리", () => {
    const input = 1234;
    const result = new Input(input);
    expect(() => result.inputMoney()).toThrow("[ERROR]");
  });

  test("정수 이외의 값 예외 처리", () => {
    const input = "abc";
    const result = new Input(input);
    expect(() => result.inputMoney()).toThrow("[ERROR]");
  });

  test(",로 숫자 구분하지 않는 경우 예외 처리", () => {
    const input = "1 2 3 4 5 6";
    const result = new Input(input);
    expect(() => result.inputWin()).toThrow("[ERROR]");
  });

  test("숫자가 범위를 벗어나는 경우 예외 처리", () => {
    const input = 47;
    const result = new Input(input);
    expect(() => result.inputBonus()).toThrow("[ERROR]");
  });

  test("입력값이 없는 경우 예외 처리", () => {
    const input = "";
    const result = new Input(input);
    expect(() => result.inputMoney()).toThrow("[ERROR]");
    expect(() => result.inputWin()).toThrow("[ERROR]");
    expect(() => result.inputBonus()).toThrow("[ERROR]");
  });
});
