import { MissionUtils } from "@woowacourse/mission-utils";

export default class printLottos {
    printWinningStatics() {
      const sum = 0;
      for(let win of Object.values(sameNumbersObject)){
        sum += win;
      }
      const rate = sum/count * 100;
      
      MissionUtils.Console.print(
      `당첨 통계
      ---
      3개 일치 (5,000원) - ${sameNumbersObject['three']}개
      4개 일치 (50,000원) - ${sameNumbersObject['four']}개
      5개 일치 (1,500,000원) - ${sameNumbersObject['five']}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${sameNumbersObject['bonus']}개
      6개 일치 (2,000,000,000원) - ${sameNumbersObject['six']}개
      총 수익률은 ${rate}%입니다.`)
    }
  
  }
  