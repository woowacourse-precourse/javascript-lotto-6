import { lottoReader, lottoResultPrinter } from "../src/App.js" 
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};


describe("당첨 통계 테스트", () => {
  test("당첨 번호와 로또 번호를 비교한다.", () => {
    const lotto = [1, 3, 5, 14, 22, 45];
    const winninglotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const output = [3,0];

    const result = lottoReader(lotto,winninglotto,BONUS_NUMBER);

    expect(result).toEqual(output);
  });

  test.each([
    [[3,0],1,"3개 일치 (5,000원) - 1개"],
    [[4,0],2,"4개 일치 (50,000원) - 2개"],
    [[6,0],1,"6개 일치 (2,000,000,000원) - 1개"]
  ])("당첨 내역을 출력한다.", (resultsInputs, countInputs, logs) => {
    const logSpy = getLogSpy();

    lottoResultPrinter(resultsInputs, countInputs);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(logs));
  });

  test.each([
    [[5,0],3,"5개 일치 (1,500,000원) - 3개",],
    [[5,1],1,"5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"]
  ])("2등과 3등 당첨 내역을 출력한다.", (resultsInputs, countInputs, logs) => {
    const logSpy = getLogSpy();

    lottoResultPrinter(resultsInputs, countInputs);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(logs));
  });

  test("총 수익률을 출력한다.", () => {
    const logSpy = getLogSpy();

    const inputMoney = 8000;
    const totalPrize = 5000;
    const log = "62.5%";

    totalRate(inputMoney, totalPrize);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});