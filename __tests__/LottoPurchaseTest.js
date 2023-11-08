import LottoPurchase from "../src/LottoPurchase";

describe("로또 구매 클래스", () => {
  //   beforeEach(() => {
  //     //
  //   });

  test("구매금액은 1,000원 단위로만 입력 가능하다.", async () => {
    //given
    const INVALID_PURCHASE_AMOUNT = 1500;
    const VALID_PURCHASE_AMOUNT = 2000;

    //when
    //console.log(new LottoPurchase(INVALID_PURCHASE_AMOUNT));

    //then
    expect(() => {
      new LottoPurchase(INVALID_PURCHASE_AMOUNT);
    }).toThrow("[ERROR]");
  });

  test("구매 기능", async () => {
    //given
    const VALID_PURCHASE_AMOUT = 5000;

    const lottoPurchase = new LottoPurchase(VALID_PURCHASE_AMOUT);

    // when
    const lottos = lottoPurchase.generateLottos();

    // then
    expect(lottos.length).toBe(5); // 5개 구매
  });
});
