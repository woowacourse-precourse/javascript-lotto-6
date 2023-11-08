import Purchase from "../src/domain/Purchase";

describe("로또 구매 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const purchase = new Purchase();
      purchase.validateIsNumber("str");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 0이면 예외가 발생한다.", () => {
    expect(() => {
      const purchase = new Purchase();
      purchase.validateIsZero(0);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const purchase = new Purchase();
      purchase.validateIsCorrectUnit(1300);
    }).toThrow("[ERROR]");
  });

  test("구매 수량이 구입 금액을 1000으로 나눈 값과 일치하지 않으면 예외가 발생한다.", () => {
    const purchase = new Purchase();
    const quantity = purchase.calcPurchaseQuantity(3000);

    expect(quantity).toBe(3);
  });
});
