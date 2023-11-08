import LottoNumbersParser from "../src/domain/LottoNumbersParser";

describe("LottoNumbersParser 클래스 테스트", () => {
  test.each([
    ["1,2,3,4,5,6", [1, 2, 3, 4, 5, 6]],
    ["10,11,12,13,14,15", [10, 11, 12, 13, 14, 15]],
    ["21,22,23,24,25,26", [21, 22, 23, 24, 25, 26]],
  ])("parse 메소드가 입력 값을 올바르게 변환한다. %s -> %s", (input, expected) => {
    expect(LottoNumbersParser.parse(input)).toEqual(expected);
  });

  test.each([
    ["1", 1],
    ["10", 10],
    ["21", 21],
  ])("parseSingle 메소드가 입력 값을 올바르게 변환한다. %s -> %s", (input, expected) => {
    expect(LottoNumbersParser.parseSingle(input)).toEqual(expected);
  });

  test("잘못된 입력값에 대해서 예외가 발생한다.", () => {
    expect(() => LottoNumbersParser.parse("1,2,3,4,5,a")).toThrow("[ERROR]");
    expect(() => LottoNumbersParser.parseSingle("a")).toThrow("[ERROR]");
  });
});
