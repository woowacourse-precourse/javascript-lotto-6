import { formatMoney } from "../../src/utils/NumberFormat";

describe("formatMoney Utils 함수 테스트", () => {
  test("1000 단위로 쉼표가 포함된 문자열을 반환해야 한다", () => {
    expect(formatMoney(1000)).toBe("1,000");
    expect(formatMoney(200000)).toBe("200,000");
    expect(formatMoney(123456789)).toBe("123,456,789");
    expect(formatMoney(0)).toBe("0");
    expect(formatMoney(123)).toBe("123");
  });
});
