import {printLottoResult} from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("로또 결과 출력 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })
    
      test("로또 당첨 번호와 구매 로또 번호를 비교하여 당첨 결과와 수익률을 출력한다.", () => {
        const logSpy = getLogSpy();
        
        const purchaseTickets = 8000;
        const lottoResult = [0, 0, 0, 0, 1];
        const logs = [
          "당첨 통계",
          "---",
          "3개 일치 (5,000원) - 1개",
          "4개 일치 (50,000원) - 0개",
          "5개 일치 (1,500,000원) - 0개",
          "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
          "6개 일치 (2,000,000,000원) - 0개",
          "총 수익률은 62.5%입니다."
        ];
    
        printLottoResult(lottoResult, purchaseTickets);
    
        logs.forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
      });
  });