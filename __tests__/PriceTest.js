import Price from "../src/Price.js";

describe("Price 클래스 테스트", () => {
  test("구입금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Price("1000원");
    }).toThrow("[ERROR]");
  });

  test("구입금액이 1000단위 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Price(1100);
    }).toThrow("[ERROR]");
  });

  test("구입금액 정상 생성 테스트", () => {
    expect(() => {
      const PRICE = new Price(10000);

      expect(PRICE.price).toBe(10000);
    });
  });
});
