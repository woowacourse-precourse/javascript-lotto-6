import Lotto from "../src/Lotto.js";

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

  test("로또 번호에 숫자가 아닌 값이 있으면 예와가 발생한다.",() => {
    expect(() => {
      new Lotto([1, '@', 3, 4, 5, 5]);
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("숫자의 범위를 벗어나면 예외가 발생한다.",() => {
    expect(() => {
      new Lotto([1, 46, 0, 3, 2, 7]);
    }).toThrow("[ERROR] 1이상 45이하의 값을 입력해주세요.");
  });
  test('배열이 정렬되어 있어야한다',() => {
    expect(new Lotto([1,3,2,4,5,6]).showLotto()).toBe("1,2,3,4,5,6\n")
  });
});
