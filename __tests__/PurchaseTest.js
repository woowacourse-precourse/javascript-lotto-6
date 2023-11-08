import purchase from "../src/models/Purchase.js";

describe("구매 객체 테스트", () => {
  test("구매 금액만큼 로또를 구입한다.", () => {
    const count = purchase.countMoney(2000);
    expect(count).toEqual(2);
  });

  test.each([2500, 1000.5])(
    "구매 금액이 1000원 단위가 아니면 예외가 발생한다.",
    (money) => {
      expect(() => {
        purchase.countMoney(money);
      }).toThrow("[ERROR]");
    }
  );
});
