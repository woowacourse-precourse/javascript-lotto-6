import Lotto from "../src/errors/Lotto.js";

describe("로또 클래스 테스트", () => {
  const spaceTestCases = [
    ["1", "2", "  ", "4", "5", "6"],
    ["1", "2", "", "4", "5", "6"],
  ];
  const textTestCases = [
    ["1", "2", "안녕", "4", "5", "6"],
    ["1", "Hello", "3", "4", "5", "6"],
  ];

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "6", "7"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "5"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1과 45 사이의 값이 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "46", "5", "6"]);
    }).toThrow("[ERROR] 로또 번호는 1에서 45 사이의 값이어야 합니다.");
  });

  spaceTestCases.forEach((testCase, index) => {
    test(`로또 번호에 공백이 있으면 예외가 발생한다. - 테스트 케이스 ${index}`, () => {
      expect(() => {
        new Lotto(testCase);
      }).toThrow("[ERROR] 로또 번호에 공백인 값이 있습니다.");
    });
  });

  test("로또 번호에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "10^", "4", "5", "6"]);
    }).toThrow("[ERROR] 로또 번호에 특수문자가 있습니다.");
  });

  textTestCases.forEach((testCase, index) => {
    test(`로또 번호에 문자(영어나 한글)가 있으면 예외가 발생한다 - 테스트 케이스 ${index}`, () => {
      expect(() => {
        new Lotto(testCase);
      }).toThrow("[ERROR] 로또 번호에 영어나 한글이 포함되어 있습니다.");
    });
  });
});
