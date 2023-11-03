import { winningNumberSpliter } from "../src/App.js";

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호를 쉼표로 구분한다.", () => {
    const input = ["1,2,3,4,5,6"];

    expect(winningNumberSpliter(input)).toContain("4","1","2","3","5","6");
    expect(winningNumberSpliter(input)).toContainEqual("1","2","3","4","5","6");
  });
});