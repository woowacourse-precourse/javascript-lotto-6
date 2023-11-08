import Lotto from "../src/core/Lotto.js";

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

  test("로또 번호 가져오기", () => {
    const input = [1, 2, 3, 4, 5, 10];
    const output = new Lotto(input).getNumbers();

    expect(output).toEqual(input);
  });

  test("결과 계산 테스트", () => {
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const inputs = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 11, 10],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 10, 11, 12, 13],
      [7, 10, 11, 12, 13, 14],
      [10, 11, 12, 13, 14, 15],
    ];
    const answers = [
      "six",
      "bonusFive",
      "five",
      "four",
      "three",
      null,
      null,
      null,
    ];

    inputs.forEach((input, index) => {
      const result = new Lotto(input).matchResult(winning, bonus);
      expect(result).toBe(answers[index]);
    });
  });
});
