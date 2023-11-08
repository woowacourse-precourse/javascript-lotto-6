import App from "../src/App.js";
import { Winning } from "../src/Winning.js";

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호를 쉼표로 구분한다.", () => {
    const app = new App();
    const input = "1,2,3,4,5,6";

    expect(app.winningNumberSpliter(input)).toContain("4","1","2","3","5","6");
    expect(app.winningNumberSpliter(input)).toContainEqual("1","2","3","4","5","6");
  });

  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test.each([
    [["1","2","3","4","5","숫자"]],
    [["1","2","3","4","5","4.5"]],
    [["1","2","3","4","5","-5"]],
    [["1","2","3","4","5","0b101"]],
    [["1","2","3","4","5","1E3"]]
  ])("당첨 번호 입력중 하나라도 숫자가 아닐 경우, 에러가 발생한다.", (inputs) => {

    expect(()=> {
      new Winning(inputs)
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 중복될 경우, 에러가 발생한다.", () => {
    const input = ["1","2","2","4","5","6"];

    expect(()=> {
      new Winning(input)
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 사이가 아닐 경우, 에러가 발생한다.", () => {
    const input = ["1","2","3","4","5","46"];

    expect(()=> {
      new Winning(input)
    }).toThrow("[ERROR]");
  });
});