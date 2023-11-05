import LottoStore from "../../src/Model/LottoStore";
import Lotto from "../../src/Lotto";

jest.mock("../../src/Lotto");

let lottoIndex = 0;
const mockLottos = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
Lotto.mockImplementation(() => {
  return {
    getNumbers: jest.fn(() => mockLottos[lottoIndex++]),
  };
});

let lottoStore, purchaseQuantity;
describe("LottoStore 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    lottoStore = new LottoStore(mockLottos.length);
  });
  test("LottoStore 인스턴스를 생성할 수 있어야 한다.", () => {
    // then
    expect(lottoStore).toBeDefined();
  });

  test("LottoStore 인스턴스가 생성되면 purchaseQuantit 값 만큼의 Lotto 인스턴스가 생성되야 한다.", () => {
    // then
    expect(Lotto).toBeCalledTimes(mockLottos.length);
  });

  test("getLottoNumbers 메서드가 존재해야 한다.", () => {
    expect(typeof lottoStore.getLottoNumbers).toBe("function");
  });

  test("getLottoNumbers 메서드가 구매한 로또들의 번호를 반환해야 한다.", () => {
    const lottoNumbers = lottoStore.getLottoNumbers();
    expect(lottoNumbers).toEqual(mockLottos);
  });
});
