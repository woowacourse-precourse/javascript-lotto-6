import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

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

  test("로또 구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    const app = new App();
    const value = "1100";
    expect(() => app.getIncomeError(value)).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 숫자가 아니면 아니면 예외가 발생한다.", () => {
    const app = new App();
    const value = "2000";
    expect(() => app.getIncomeError(value)).toThrow("[ERROR]");
  });
});
