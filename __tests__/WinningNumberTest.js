import Winning from "../src/WinningNumber.js";

describe("위닝 클래스 테스트", () => {
  test("당첨번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Winning(['winning']);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[1,2]], [[5,6,7,8,9,10,11]]
  ])("입력한 당첨번호가 6개가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Winning(input);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[0,1,2,3,4,5]],[[1,2,3,4,5,100]]
  ])("당첨 번호가 1-45 사이의 숫자가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Winning(input);
    }).toThrow("[ERROR]");
  });  

  test.each([
    [[1,1,3,4,5,6]],[[10,20,20,30,40,50]]
  ])("당첨 번호 중 중복된 숫자가 있으면 예외가 발생한다.", (input) => {
    expect(() => {
      new Winning(input);
    }).toThrow("[ERROR]");
    
  }); 
});