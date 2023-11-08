import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호를 정상적으로 생성할 수 있어야 합니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test("로또 번호를 정상적으로 출력할 수 있어야 합니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const spy = jest.spyOn(console, "log");
    lotto.printLottoNumbers();
    expect(spy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    spy.mockRestore();
  });

  test("로또 등수를 올바르게 계산할 수 있어야 합니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const rank = lotto.calculateLottoRank(winningNumbers, bonusNumber);
    expect(rank).toBe(1);
  });
});
