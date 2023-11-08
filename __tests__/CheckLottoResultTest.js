import Lotto from "../src/Lotto.js";
import CheckLottoResult from "../src/CheckLottoResult.js";

describe("로또 결과확인 당첨 내역 체크 메소드 테스트", () => {
  test("모든 로또 비교", () => {
    const checkLottoResult = new CheckLottoResult();
    checkLottoResult.checkResult([
      new Lotto([1,2,3,4,5,6]),
      new Lotto([1,2,3,10,11,12]),
    ],
    new Lotto([1,2,3,4,5,6]),
    7
    );
    expect(checkLottoResult.rankCount.get('FIRST')).toEqual(1);
    expect(checkLottoResult.rankCount.get('FIFTH')).toEqual(1);
  });
});

describe("로또 결과확인 setRank 메소드 테스트", () => {
  test("4등인 경우 4등 횟수 숫자가 1 올라간다.", () => {
    const checkLottoResult = new CheckLottoResult();
    checkLottoResult.setRank('FOURTH');
    expect(checkLottoResult.rankCount.get('FOURTH')).toEqual(1);
  });

  test("당첨되지 않았을 때 setRank 종료", () => {
    const checkLottoResult = new CheckLottoResult();
    expect(checkLottoResult.setRank(undefined)).toEqual(undefined);
  });
});

describe("로또 결과확인 수익률 계산 테스트", () => {
  test("8000원 투자하고 5등 1개 당첨인 경우", () => {
    const checkLottoResult = new CheckLottoResult();
    checkLottoResult.setRank('FIFTH');
    expect(checkLottoResult.returnRate(8000)).toEqual("62.5");
  });

  test("5000원 투자하고 2등 1개, 5등 2개인 당첨인 경우", () => {
    const checkLottoResult = new CheckLottoResult();
    checkLottoResult.setRank('SECOND');
    checkLottoResult.setRank('FIFTH');
    checkLottoResult.setRank('FIFTH');
    expect(checkLottoResult.returnRate(5000)).toEqual("600200.0");
  });

  test("10000원 투자하고 당첨 안 된 경우", () => {
    const checkLottoResult = new CheckLottoResult();
    expect(checkLottoResult.returnRate(10000)).toEqual("0.0");
  });
});