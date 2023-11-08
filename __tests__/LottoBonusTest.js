import LottoBonus from "../src/classes/LottoBonus";

describe("로또 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new LottoBonus([1, 2, 3, 4, 5, 6], 'a');
    }).toThrow("[ERROR]");
  });
  
  test("보너스 번호가 범위를 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new LottoBonus([1, 2, 3, 4, 5, 6], 0);
    }).toThrow("[ERROR]");
  });
  
  test("로또 번호에 보너스 번호가 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoBonus([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR]");
  });
  
});
