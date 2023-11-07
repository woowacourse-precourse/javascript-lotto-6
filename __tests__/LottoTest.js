import Lotto, { LOTTO_PRICE } from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또의 갯수는 (구매 금액 / 로또 가격) 이다.", () => {
    // given
    const purchasePrice = 3000;

    // when
    const lottoQuantity = Lotto.calculateQuantityFromPrice(purchasePrice);

    // then
    expect(lottoQuantity).toBe(purchasePrice / LOTTO_PRICE);
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});
