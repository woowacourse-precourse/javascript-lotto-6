import LottoGenerator from "../src/LottoGenerator.js";

describe("로또 생성 클래스 테스트", () => {
  test.each([
    [1000, 1],
    [2000, 2],
    [3000, 3],
    [4000, 4],
  ])(
    "구입 금액 %p원만큼의 로또를 생성한다. (로또 1개당 1000원)",
    (purchaseAmount, expectedCount) => {
      const lottoGenerator = new LottoGenerator();
      expect(lottoGenerator.purchase(purchaseAmount)).toHaveLength(
        expectedCount
      );
    }
  );

  test("구입 금액이 1000원으로 나누어 떨어지지 않으면 예외처리한다.", () => {
    const lottoGenerator = new LottoGenerator();
    expect(() => {
      lottoGenerator.purchase(12300);
    }).toThrow("[ERROR]");
  });
});
