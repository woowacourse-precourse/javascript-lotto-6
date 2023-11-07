import { MissionUtils } from "@woowacourse/mission-utils";
import { WinNumber } from "../LottoResult/WinNumber.js";
import Lotto from "../Lotto.js";
import { BonusNumber } from "../LottoResult/BonusNumber.js";

export class CreateWinNum {
    constructor(lottoNum) {
        this.lottoNum = lottoNum;
        this.winNumber = new WinNumber();
    }

    async start() {
        const winNumbers = await this.winNumber.winnumber();
        const bonusNumber = new BonusNumber(winNumbers);
        const bonusNum = await bonusNumber.bonusNumber();
        const winResult = this.checkWinning(this.lottoNum, { normal: winNumbers, bonus: bonusNumber });

        this.printWinResult(winResult);
    }

    checkWinning(lottoNum, winNumbers) {
        let winResult = {
          3: 0,
          4: 0,
          5: 0,
          '5+bonus': 0,
          6: 0,
        };
      
        lottoNum.forEach(lotto => {
          const matchCount = lotto.match(winNumbers.normal);
          if (matchCount < 3) return;
      
          if (matchCount === 5 && lotto.getNumbers().includes(winNumbers.bonus)) {
            winResult['5+bonus']++;
          } else {
            winResult[matchCount]++;
          }
        });
      
        return winResult;
      }

    printWinResult(winResult) {
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${winResult[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${winResult[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winResult[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winResult['5+bonus']}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winResult[6]}개`);
    }
}
/*
const lottoGame = new CreateWinNum();
lottoGame.start();
*/