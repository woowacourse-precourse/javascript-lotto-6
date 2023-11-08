import { MissionUtils } from "@woowacourse/mission-utils";
import { WinNumber } from "../LottoInput/WinNumber.js";
import { BonusNumber } from "../LottoInput/BonusNumber.js";
import { LottoChecker } from "../LottoResult/LottoCheck.js";
import calculateProfit from "../LottoResult/calculateProfit.js";

export class CreateWinNum {
    constructor(lottoNum,lottoCount) {
        this.lottoNum = lottoNum;
        this.lottoCount = lottoCount;
        this.winNumber = new WinNumber();
    }

    async start() {
        const winNumbers = await this.winNumber.winnumber();
        const bonusNumber = new BonusNumber(winNumbers);
        const bonusNum = await bonusNumber.bonusNumber();

        const lottoChecker = new LottoChecker(this.lottoNum);
        const winResult = lottoChecker.checkWinning({ normal: winNumbers, bonus: bonusNum });
        const profitRate = calculateProfit(winResult, this.lottoCount);
        this.printWinResult(winResult,profitRate);
        
    }

    printWinResult(winResult,profitRate) {
        MissionUtils.Console.print("당첨 통계\n---");
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${winResult[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${winResult[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winResult[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winResult[6]}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winResult[7]}개`);
        MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
  } 
