import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../../src/view/OutputView.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("수익률 계산 테스트", () => {
  test("소수점 둘째자리에서 반올림(1)", () => {
    const price = 3000;
    const prize = 55000;

    const logSpy = getLogSpy();

    OutputView.printLottoRate(price, prize);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1833.3"));
  });

  test("소수점 둘째자리에서 반올림(2)", () => {
    const price = 6000;
    const prize = 55000;

    const logSpy = getLogSpy();

    OutputView.printLottoRate(price, prize);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("916.7"));
  });

  test("소수점 첫째자리까지 0으로 나오는지", () => {
    const price = 1000;
    const prize = 10000;

    const logSpy = getLogSpy();

    OutputView.printLottoRate(price, prize);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1000.0"));
  });
});
