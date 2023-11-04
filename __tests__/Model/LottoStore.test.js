import LottoStore from "../../src/Model/LottoStore";

describe("LottoStore 클래스 테스트", () => {
  test("LottoStore 인스턴스를 생성할 수 있어야 한다.", () => {
    const lottoStore = new LottoStore(1000);
    expect(lottoStore).toBeDefined();
  });
});
