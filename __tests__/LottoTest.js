import Lotto from "../src/model/Lotto.js";
//Lotto클래스 테스트
describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7], 8);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5], 6);
    }).toThrow("[ERROR]");
  });

  test("로또 번호와 보너스 번호가 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6],6);
    }).toThrow("[ERROR]")
  });

  test("로또 번호가 1~45가 아니면 예외가 발생한다." ,() => {
    expect(()=>{
      new Lotto([1,2,3,4,45,55],7)
    }).toThrow("[ERROR]")
  })

  test("보너스 번호가 1~45가 아니면 예외가 발생한다.", () => {
    expect(()=>{
      new Lotto([1,2,3,4,5,6],46)
    }).toThrow("[ERROR]")
  })
});
