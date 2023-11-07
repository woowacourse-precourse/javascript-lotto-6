import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  const textTestCases = [
    [1, 2, "안녕", 4, 5, 6],
    [1, "Hello", 3, 4, 5, 6],
  ];

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
  test("로또 번호에 1과 45 사이의 값이 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1에서 45 사이의 값이어야 합니다.");
  });

  test("로또 번호에 공백이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, " ", 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호에 공백인 값이 있습니다.");
  });

  test("로또 번호에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "10^", 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호에 특수문자가 있습니다.");
  });

  test("로또 번호에 boolean 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([10, 2, true, 40, 5, 6]);
    }).toThrow("[ERROR] 로또 번호에 불리언 값이 있습니다.");
  });

  textTestCases.forEach((testCase, index) => {
    test(`로또 번호에 문자(영어나 한글)가 있으면 예외가 발생한다 - 테스트 케이스 ${index}`, () => {
      expect(() => {
        new Lotto(testCase);
      }).toThrow("[ERROR] 로또 번호에 영어나 한글이 포함 되어 있습니다.");
    });
  });
});
