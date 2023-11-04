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
  test("로또 번호를 입력 받지 못하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호를 문자로 입력 받는다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '3#']);
    }).toThrow("[ERROR]");
  });

  test.each([
    [0, 1, 2, 3, 4, 5],
    [41, 42, 43, 44, 45, 46],
  ])("로또 번호의 숫자가 1보다 작거나 45보다 크다면 예외가 발생한다.", (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow("[ERROR]");
  });
});

