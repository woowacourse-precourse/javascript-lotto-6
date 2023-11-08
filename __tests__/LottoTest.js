import App from "../src/App.js";
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
  test("로또 구매 금액 예외 테스트", () => {
    expect(() => {
      const app = new App();
      const result = app.inputBuyPrice(6012);
      expect(result).toThrow("[ERROR]");
    });
  });
  test("로또 입력 번호에 숫자가 아닌 문자 예외 테스트", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, "가"]);
    }).toThrow("[ERROR]");
  });

  describe("countMatchNumbers() 메서드 테스트", () => {
    test("당첨 번호와 발행 번호 3개가 일치하는 경우를 확인한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const pickNumber = [1, 2, 3, 7, 8, 9];
      const result = lotto.countMatchNumbers(pickNumber);
      expect(result).toBe(3);
    });

    test("당첨 번호와 발행 번호 4개가 일치하는 경우를 확인한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const pickNumber = [1, 2, 3, 4, 8, 9];
      const result = lotto.countMatchNumbers(pickNumber);
      expect(result).toBe(4);
    });

    test("당첨 번호와 발행 번호 5개가 일치하는 경우를 확인한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const pickNumber = [1, 2, 3, 4, 5, 9];
      const result = lotto.countMatchNumbers(pickNumber);
      expect(result).toBe(5);
    });

    test("당첨 번호와 발행 번호 6개가 일치하는 경우를 확인한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const pickNumber = [1, 2, 3, 4, 5, 6];
      const result = lotto.countMatchNumbers(pickNumber);
      expect(result).toBe(6);
    });
  });
});
