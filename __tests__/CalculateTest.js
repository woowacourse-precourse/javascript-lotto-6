import Calculate from "../src/Calculate.js";

describe("계산 클래스 테스트", () => {
  test("입력받은 유저의 로또가 하나도 존재하지 않으면 예외가 발생한다.", () => {
    let userlotterys = [];
    let winningnumber = [1, 2, 3, 4, 5, 6];
    let bonusNumber = 7;

    expect(() => {
      new Calculate(userlotterys, winningnumber, bonusNumber);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});
