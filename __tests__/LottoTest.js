import Lotto, { LOTTO_PRICE } from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또의 갯수는 (구매 금액 / 로또 가격) 이다.", () => {
    // given
    const purchasePrice = 3000;

    // when
    const result = Lotto.calculateQuantityFromPrice(purchasePrice);

    // then
    const expected = purchasePrice / LOTTO_PRICE;
    expect(result).toBe(expected);
  });

  test("로또 번호는 초기화 될 때 오름차순으로 정렬된다.", () => {
    // given
    const numbers = [6, 4, 5, 3, 2, 1];

    // when
    const lotto = new Lotto(numbers);
    const result = lotto.numbers;

    // then
    const expected = [1, 2, 3, 4, 5, 6];
    expect(result).toEqual(expected);
  });
});
