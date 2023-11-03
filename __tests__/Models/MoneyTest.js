import LottoError from "../../src/Error/LottoError.js";
import Money from "../../src/Models/Money.js";

describe("Money 클래스 테스트", () => {
  test("1,000과 1.0000 포맷의 금액도 입력 받을 수 있어야 한다.", () => {
    expect(new Money("1,000").getMoney()).toBe(1000);
    expect(new Money("1.000").getMoney()).toBe(1000);
  });

  test("숫자가 아닌 값을 입력 받으면 에러 처리해야한다.", () => {
    expect(() => new Money("1.천")).toThrow(LottoError.PREFIX);
    expect(() => new Money("천원")).toThrow(LottoError.PREFIX);
  });

  test("금액은 1000 단위로만 받아야한다.", () => {
    expect(() => new Money("1900")).toThrow(LottoError.PREFIX);
    expect(() => new Money("0")).toThrow(LottoError.PREFIX);
    expect(() => new Money("-1000")).toThrow(LottoError.PREFIX);
  });
});
