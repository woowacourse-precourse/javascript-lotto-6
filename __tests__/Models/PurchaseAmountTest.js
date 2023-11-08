import LottoError from "../../src/Error/LottoError.js";
import PurchaseAmount from "../../src/Models/PurchaseAmount.js";
import { LottoSettings } from "../../src/config/gameSetting.js";

const setting = new LottoSettings();
const lottoPrice = setting.getLottoPrice();

describe("PurchaseAmount 클래스 테스트", () => {
  test("1,000과 1.0000 포맷의 금액도 입력 받을 수 있어야 한다.", () => {
    expect(new PurchaseAmount("1,000").getAmount()).toBe(1000);
    expect(new PurchaseAmount("1.000").getAmount()).toBe(1000);
  });

  test("숫자가 아닌 값을 입력 받으면 에러 처리해야한다.", () => {
    expect(() => new PurchaseAmount("1.천")).toThrow(LottoError.PREFIX);
    expect(() => new PurchaseAmount("천원")).toThrow(LottoError.PREFIX);
  });

  test(`금액은 ${lottoPrice} 단위로만 받아야한다.`, () => {
    expect(() => new PurchaseAmount("1900")).toThrow(LottoError.PREFIX);
    expect(() => new PurchaseAmount("0")).toThrow(LottoError.PREFIX);
    expect(() => new PurchaseAmount("-1000")).toThrow(LottoError.PREFIX);
  });

  test("구입 금액을 리턴해야한다.", () => {
    const purchaseAmount = new PurchaseAmount("2000");
    expect(purchaseAmount.getAmount()).toBe(2000);
  });

  test("구입 금액으로 살 수 있는 로또 갯수를 리턴해야한다.", () => {
    const purchaseAmount = new PurchaseAmount("2000");
    expect(purchaseAmount.getNumberOfLottos()).toBe(2);
  });
});
