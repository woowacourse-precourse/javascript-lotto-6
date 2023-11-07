import LottoValidate from "../src/modules/LottoValidate.js"

describe("입력값 유효성 테스트", () => {
  test("입력 값에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      const lottoValidate = new LottoValidate();
      lottoValidate.userCostValidate('kk')
    }).toThrow("[ERROR]");
  });

  test("입력 값은 1에서 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lottoValidate = new LottoValidate();
      lottoValidate.winnerValidate(46)
    }).toThrow("[ERROR]");
  });

  test("입력 값은 1에서 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lottoValidate = new LottoValidate();
      lottoValidate.bonusValidate(46, [1,2,3,4,5,6])
    }).toThrow("[ERROR]");
  });

  test("입력 값은 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lottoValidate = new LottoValidate();
      lottoValidate.bonusValidate('k', [1,2,3,4,5,6])
    }).toThrow("[ERROR]");
  });

  test("보너스 값이 당첨 번호에 있으면 예외를 발생한다.", () => {
    expect(() => {
      const lottoValidate = new LottoValidate();
      lottoValidate.bonusValidate(5, [1,2,3,4,5,6])
    }).toThrow("[ERROR]");
  });
});
