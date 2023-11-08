import LottoGame from "../src/LottoGame.js";
import Lotto from "../src/Lotto.js";

describe("로또게임 클래스 테스트", () => {

  test("구입금액이 0이하일 때 예외 발생", () => {
    expect(() => {
      LottoGame.validatePrice(-2000);
    }).toThrow("[ERROR]");
  });

  test("구입금액이 숫자가 아닐 때 예외 발생", () => {
    expect(() => {
      LottoGame.validatePrice("hello");
    }).toThrow("[ERROR]");
  });

  test("구입금액이 소숫점 아래의 값이 있는 숫자일 때 예외 발생", () => {
    expect(() => {
      LottoGame.validatePrice(1000.3);
    }).toThrow("[ERROR]");
  });

  test("구입금액이  실수일 때 소숫점 아래의 값이 없는 경우 예외 발생 하지 않음", () => {
    expect(LottoGame.validatePrice(1000.00)).toEqual(1000);
  });

  test("구입금액이 1,000원으로 나누어 떨어지지 않는 숫자일 때 예외 발생", () => {
    expect(() => {
      LottoGame.validatePrice(8500);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 숫자가 아닌 입력이 들어왔을 때 예외 발생", () => {
    expect(() => {
      LottoGame.validateBonusNumbers("h", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      LottoGame.validateBonusNumbers(" ", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 공백 입력이 들어왔을 때 예외 발생", () => {
    expect(() => {
      LottoGame.validateBonusNumbers(" ", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });


  test("보너스 번호에 1부터 45 사이의 숫자가 아닌 입력이 들어왔을 때 예외 발생", () => {
    expect(() => {
      LottoGame.validateBonusNumbers("50", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨번호와 중복될 떄 예외 발생", () => {
    expect(() => {
      LottoGame.validateBonusNumbers("3", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

});
