import Lottos from "../src/Model/Lottos.js";

describe("Lottos", () => {
  let lottos;

  beforeEach(() => {
    lottos = new Lottos();
  });

 test("로또 객체 생성 test", () => {
    expect(lottos).toBeInstanceOf(Lottos);
  });

 test("로또 구매 개수 계산 test", () => {
    lottos.calculateLottoQuantity(2000);
    expect(lottos.getLottoQuantity()).toBe(2);
  });

 test("lottos 생성 test", () => {
    lottos.createLottos(2000); 
    expect(lottos.getLottoTickets().length).toBe(2);
  });

 test("구매 금액 validation test", () => {
    expect(lottos.validatePurchaseAmount(2000)).toBe(true);
    expect(lottos.validatePurchaseAmount(1500)).toBe(false);
    expect(lottos.validatePurchaseAmount(0)).toBe(false);
    expect(lottos.validatePurchaseAmount("1thousand")).toBe(false);
    expect(lottos.validatePurchaseAmount()).toBe(false);
  });

 test("lotto 생성 test", () => {
    const lotto = lottos.createLotto();
    expect(lotto.length).toBe(6);
    const uniqueNumbers = new Set(lotto);
    expect(uniqueNumbers.size).toBe(6);
  });
});
