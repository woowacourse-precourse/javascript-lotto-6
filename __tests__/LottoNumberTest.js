import LottoNumber from "../src/LottoNumber.js";

describe("LottoNumber 테스트", () => {
  test("올바른 숫자 입력", () => {
    const lottoNumber = new LottoNumber(7);
    expect(lottoNumber.LOTTO_NUMBER).toBe(7);
  });

  test("문자열 입력", () => {
    expect(() => new LottoNumber("abc")).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("숫자가 아닌 문자 입력", () => {
    expect(() => new LottoNumber("4")).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("범위를 벗어난 숫자 입력", () => {
    expect(() => new LottoNumber(0)).toThrow("[ERROR] 숫자는 1 이상 45 이하여야 합니다.");
    expect(() => new LottoNumber(50)).toThrow("[ERROR] 숫자는 1 이상 45 이하여야 합니다.");
  });
});
