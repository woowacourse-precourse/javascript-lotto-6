import PurchaseController from "../src/PurchaseController.js";

describe("구매 가격 입력 처리 테스트", () => {
  test("구매 가격 입력에 숫자 이외의 문자가 있는지 확인", () => {
    // given
    const priceTexts = ["123", "12a", "12 3"];
    const results = [true, false, false];

    // when & then
    const answers = priceTexts.map((text) => PurchaseController.checkOnlyNumbers(text));
    expect(answers).toEqual(results);
  });

  test("구매 가격이 1000원 단위인지 확인", () => {
    // given
    const priceList = [1000, 2000, 1, 1200, 10001];
    const results = [true, true, false, false, false];

    // when & then
    const answers = priceList.map((price) => PurchaseController.checkPriceDivisible(price));
    expect(answers).toEqual(results);
  });
});
