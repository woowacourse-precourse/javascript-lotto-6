import Lotto from "../src/Lotto.js";
import Calculate from "../src/model/Calculate.js";

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
});

describe("로또 계산 테스트", () => {
  test("로또 수량 계산", () => {
    const mock = jest.fn((money) => Calculate.countLottoAmounnt(money));
    const moneyInput = ["1000", "5000", "9000"];
    const amount = [1, 5, 9];

    moneyInput.forEach((money, idx) => {
      expect(mock(money)).toBe(amount[idx]);
    });
  });
});
