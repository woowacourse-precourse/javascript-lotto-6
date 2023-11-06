import BonusLotto from "../src/model/BonusLotto.js";

describe("보너스 번호 테스트", () => {
  test("보너스 번호 입력 형식이 단일한 숫자가 아니라면 예외 발생", () => {
    expect(() => {;
      new BonusLotto('1,23,4');
    }).toThrow("[ERROR]");
  });

  test("숫자가 1-45의 범위에 없으면 예외 발생", () => {
    ['46,47,100'].forEach((number) => {
      expect(() => {
        new BonusLotto(number);
      }).toThrow("[ERROR]");
    })
  });
});
