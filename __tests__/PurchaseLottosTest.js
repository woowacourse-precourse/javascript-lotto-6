import PurchaseLottos from "../src/PurchaseLottos";

describe("로또 구매 테스트", () => {
  const invalidAmounts = [0, 999, 1200, 21100];

  test.each(invalidAmounts)(
    "로또 구매 금액이 1000원 단위가 아니면 예외가 발생한다.",
    (amount) => {
      expect(() => {
        new PurchaseLottos(amount);
      }).toThrow("[ERROR]");
    }
  );
});
