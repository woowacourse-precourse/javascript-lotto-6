import Money from "../src/model/Money";

describe("MONEY 클래스 테스트", () => {

  test("구매 금액이 양수가 아니면 예외처리", () => {
    expect(() => {
      new Money("ac");
    }).toThrow("[ERROR] 정수를 입력해 주세요.");
  });

  test("구매 금액이 1000으로 나누어 떨어지지 않으면 예외처리", () => {
    expect(() => {
      new Money(1004);
    }).toThrow("[ERROR] 구매 금액은 1000으로 나누어 떨어져야 합니다.");
  });

	test("구매 금액이 0보다 작거나 같으면 예외처리_1", () => {
    expect(() => {
      new Money(0);
    }).toThrow("[ERROR] 0보다 큰 수를 입력하세요.");
  });

	test("구매 금액이 0보다 작거나 같으면 예외처리_2", () => {
    expect(() => {
      new Money(-10);
    }).toThrow("[ERROR] 0보다 큰 수를 입력하세요.");
  });

});
