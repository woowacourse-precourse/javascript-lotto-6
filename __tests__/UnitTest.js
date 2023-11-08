import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

describe("단위 테스트", () => {
  let app;

  beforeAll(() => {
    app = new App();
  });

  test("양의 정수 검증", () => {
    expect(App.isPositiveInteger("3000")).toBeTruthy();
    expect(App.isPositiveInteger("3000.5")).toBeFalsy();
    expect(App.isPositiveInteger("abc")).toBeFalsy();
  });

  test("천 단위 금액", () => {
    expect(App.validateMoney("3000")).toBeTruthy();
    expect(App.validateMoney("3050")).toBeFalsy();
  });

  test("로또 구매", () => {
    const mockLotto = new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6),
    );
    app.lottos = [mockLotto];
    expect(app.lottos).toContain(mockLotto);
  });

  test(",로 구분된 6개의 양의 정수 여부", () => {
    expect(App.isNumbers("1,2,3,4,5,6")).toBeTruthy();
    expect(App.isNumbers("1,2,3,4,5")).toBeFalsy();
    expect(App.isNumbers("1,2,3,4,5,6,7")).toBeFalsy();
  });

  test("1부터 45까지의 정수 여부", () => {
    expect(App.isLottoNumber(1)).toBeTruthy();
    expect(App.isLottoNumber(45)).toBeTruthy();
    expect(App.isLottoNumber(0)).toBeFalsy();
    expect(App.isLottoNumber(46)).toBeFalsy();
  });

  test("6개의 1부터 45까지의 정수 여부", () => {
    expect(App.isLottoNumbers([1, 2, 3, 4, 5, 6])).toBeTruthy();
    expect(App.isLottoNumbers([1, 2, 3, 4, 5, 50])).toBeFalsy();
  });

  test(",로 구분된 6개의 1부터 45까지의 정수 여부", () => {
    expect(App.validateWinningNumbers("1,2,3,4,5,6")).toBeTruthy();
    expect(App.validateWinningNumbers("1,2,3,4,5,50")).toBeFalsy();
  });

  test("당첨 번호와 겹치지 않는 1부터 45까지의 정수 여부", () => {
    let winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
    expect(App.validateBonusNumber(7, winningNumbers)).toBeTruthy();
    expect(App.validateBonusNumber(6, winningNumbers)).toBeFalsy();
  });
});
