import App from '../src/App.js';
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

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1~45 이외의 숫자가 있으면 예외가 발생한다..", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  })

  test("당첨 통계 테스트1", async () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(
      lotto.stats(
        [
          [7, 8, 9, 10, 11, 12], // 0
          [6, 7, 8, 9, 10 , 11, 12], // 1
          [5, 6, 7, 8, 9, 10], // 2
          [4, 5, 6, 7, 8, 9], // 3
          [3, 4, 5, 6, 7, 8], // 4
          [2, 3, 4, 5, 6, 7], // 5 + bonus
          [2, 3, 4, 5, 6, 8], // 5
          [1, 2, 3, 4, 5, 6], // 6
        ],
        7
      )
    ).toEqual([1, 1, 1, 1, 1]);
  })
});
