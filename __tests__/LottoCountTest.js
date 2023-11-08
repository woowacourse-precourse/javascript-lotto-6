import LottoCount from "../src/domain/LottoCount";

test("구매 금액을 입력받았을 때 반환되는 로또 갯수 확인", () => {
  const lottoCount = new LottoCount("9000");
  expect(lottoCount.getLottoCount()).toEqual(9);
});
