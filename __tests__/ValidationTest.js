import * as app from "../src/App.js";

describe("유효성 검사 ", () => {
  test("checkInputNumberType", () => {
    const input = "가";
    expect(() => {
      app.checkInputNumberType(input);
    }).toThrow("[ERROR]");
  });
  test("checkWinNumberType", () => {
    const inputs = ["1,가,3,2,4,6", "0,1,2,3,4,5", "1,2,3,4,5,77", "1,1,2,3,5,6,"];
    for (let input of inputs) {
      expect(() => {
        app.checkWinNumberType(input);
      }).toThrow("[ERROR]");
    }
  });
  test("checkWonUnit", () => {
    const input = "100";
    expect(() => {
      app.checkWonUnit(input);
    }).toThrow("[ERROR]");
  });
});
