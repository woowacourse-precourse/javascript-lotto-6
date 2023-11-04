import WinningLotto from "../src/model/WinningLotto.js";

describe("당첨 번호 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1 ~ 45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 로또 번호와 중복되면 안된다.", () => {
    const lotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.setBonusNumber(5);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 1부터 45사이의 숫자여야 한다.", () => {
    const lotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.setBonusNumber(55);
    }).toThrow("[ERROR]");
  });
});
