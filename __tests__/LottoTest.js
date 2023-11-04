import Lotto from "../src/Lotto.js";
import Lottory from "../src/Lottory.js";

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
  test("로또 정답과 입력을 비교하여 몇개 맞췄는지 출력", () => {
    const LOTTO = [1, 2, 3, 4, 5, 6];
    const ANSWER = [4, 5, 6, 7, 8, 9];
    const RESULT = 5;
    const MY_ANSWER = new Lottory(LOTTO, ANSWER);
    expect(MY_ANSWER.check(LOTTO)).toBe(RESULT);
  });

  test("결과를 배열 값으로 출력", () => {
    const MY_LOTTOS = [
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
      [2, 3, 4, 5, 6, 10]
    ];
    const ANSWER = [1, 2, 3, 4, 5, 6];
    const BONUS = 10;
    const ANSWER_ARR = [1, 1, 0, 0, 0];
    const MY_ANSWER = new Lottory(MY_LOTTOS, ANSWER, BONUS);

    expect(MY_ANSWER.getAnswer()).toStrictEqual(ANSWER_ARR);
  });
});
