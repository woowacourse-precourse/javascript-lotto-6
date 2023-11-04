import LottoStore from "../../src/Model/LottoStore";
import Lotto from "../../src/Lotto";
let lottoStore;
describe("LottoStore 클래스 테스트", () => {
  beforeEach(() => {
    const purchaseQuantity = 5;
    lottoStore = new LottoStore(purchaseQuantity);
  });
  test("LottoStore 인스턴스를 생성할 수 있어야 한다.", () => {
    expect(lottoStore).toBeDefined();
  });

  test("createLotto 메서드가 존재해야 한다.", () => {
    expect(typeof lottoStore.createLotto).toBe("function");
  });

  test("createLotto 메서드를 호출하면 입력 받은 금액 만큼 Lotto 인스턴스를 생성해야 한다.", () => {});
});
