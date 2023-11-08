import Price from "../src/Price.js";

describe("구매가격 클래스 테스트", () => {
  test("구매가격이 숫자가 아닐 시 예외가 발생한다. ", () => {
    expect(() => {
      new Price("1000j");
    }).toThrow("[ERROR]");
  });

  test("구매가격이 1000으로 나눴을 때 0이 아닐 시 예외가 발생한다. ", () => {
    expect(() => {
      new Price(3858);
    }).toThrow("[ERROR]");
  });

});
