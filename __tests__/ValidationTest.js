import * as Validation from "../src/Validation.js";

describe("유효성 검사 ", () => {
  test("checkInputNumberType", () => {
    const input = "가";
    expect(() => {
      Validation.checkInputNumberType(input);
    }).toThrow("[ERROR]");
  });
  test("checkWinNumberType", () => {
    const inputs = ["1,가,3,2,4,6", "0,1,2,3,4,5", "1,2,3,4,5,77", "1,1,2,3,5,6,"];
    for (let input of inputs) {
      expect(() => {
        Validation.checkWinNumbersType(input);
      }).toThrow("[ERROR]");
    }
  });
  test("checkWonUnit", () => {
    const input = "100";
    expect(() => {
      Validation.checkWonUnit(input);
    }).toThrow("[ERROR]");
  });
});
