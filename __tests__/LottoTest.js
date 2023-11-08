import Lotto from "../src/Model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("유효한 숫자로 lotto 객체 생성한다. ", () => {
    const validNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(validNumbers);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test("getNumbers() 가 옳바른 숫자를 반환한다.", () => {
    const numbers = [10, 20, 30, 40, 45, 5];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

});
