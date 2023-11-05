import App from "../../src/App";
import Lotto from "../../src/Lotto";

// eslint-disable-next-line
describe("App Unit Test", () => {
  const CASES = [
    [2000, 2],
    [3000, 3],
    [10000, 10],
  ];
  test.each(CASES)("금액 만큼 로또 생성", (money, expectedNumber) => {
    const LOTTOS = App.getLottoWithMoney(money);
    expect(LOTTOS.length).toBe(expectedNumber);
    LOTTOS.forEach((lotto) => {
      expect(lotto instanceof Lotto).toBeTruthy();
    });
  });
});
