import LottoStore from "../../src/Model/LottoStore";
import Lotto from "../../src/Lotto";

jest.mock("../../src/Lotto");

let lottoStore, purchaseQuantity;
describe("LottoStore 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    purchaseQuantity = 20;
    lottoStore = new LottoStore(purchaseQuantity);
  });
  test("LottoStore 인스턴스를 생성할 수 있어야 한다.", () => {
    // then
    expect(lottoStore).toBeDefined();
  });

  test("LottoStore 인스턴스가 생성되면 purchaseQuantit 값 만큼의 Lotto 인스턴스가 생성되야 한다.", () => {
    // then
    expect(Lotto).toBeCalledTimes(purchaseQuantity);
  });
});
