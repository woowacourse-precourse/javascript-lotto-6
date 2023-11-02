import priceCheck from "../src/priceCheck";

describe("금액 입력 예외 테스트 ", () => {
  it("금액이 1000단위일시", () => {
    const price = 1000;
    const result = priceCheck(price);

    expect(result).toBe(1);
  });
  it("금액이 1000단위가 아닐시", () => {
    const price = 500;
    expect(() => {
      priceCheck(price);
    }).toThrow("[ERROR] : 단위는 1000단위로 입력해야합니다.");
  });
});
