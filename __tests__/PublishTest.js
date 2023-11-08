import PublishController from "../src/PublishController.js";

describe("로또 발행 테스트", () => {
  test("구매 금액을 입력 받으면 필요한 로또 수를 계산한다.", () => {
    // given
    const priceList = [1000, 2000, 10000, 20000, 100000];
    const results = [1, 2, 10, 20, 100];

    // when & then
    const answers = priceList.map((price) => PublishController.calculateLottoQuantity(price));
    expect(answers).toEqual(results);
  });

  test("구매 금액이 로또 금액 단위랑 떨어지지 않으면 오류가 발생한다.", () => {
    // given
    const priceList = [1001, 3];

    // when & then
    priceList.forEach((price) => {
      expect(() => PublishController.calculateLottoQuantity(price)).toThrow();
    });
  });

  test("수량을 전달하면 그 수만큼 Lotto 객체를 만든다.", () => {
    // given
    const quantityList = [1, 3, 5, 10];
    const results = [1, 3, 5, 10];

    // when & then
    const answers = quantityList.map((quantity) => PublishController.publish(quantity).length);
    expect(answers).toEqual(results);
  });
});
