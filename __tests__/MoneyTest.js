import Money from "../src/Money";

describe("머니 클래스 테스트", () => {
  test("돈이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money("천원");
    }).toThrow("[ERROR]");
  });

  test("돈이 1000원 미만일 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(900);
    }).toThrow("[ERROR]");
  });

  test("돈이 1000원으로 나누어 떨어지지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new Money(2300);
    }).toThrow("[ERROR]");
  });

  test("돈이 잘 입력됐을 경우에는 true를 리턴한다", () => {
    expect(() => {
      new Money(4000);
    }).toBeTruthy();
  });
});
