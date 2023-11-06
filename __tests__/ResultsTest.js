import { lottoReader, lottoResultsPrinter, totalRate } from "../src/App.js" 
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

  test("당첨 번호와 로또 번호를 비교한다. 보너스 번호를 점검한다.", () => {
    const lotto = [1, 3, 5, 14, 22, 45];
    const winninglotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 45;
    const output = [3,1];

    const result = lottoReader(lotto,winninglotto,BONUS_NUMBER);

    expect(result).toEqual(output);
  });

  test("당첨 내역을 모두 출력한다.", () => {
    const logSpy = getLogSpy();
    
    const results = [1,0,0,0,0];
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개"
    ];

    lottoResultsPrinter(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
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