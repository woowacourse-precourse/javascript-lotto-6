import { Console } from "@woowacourse/mission-utils";

class Output {
    static printLottos(lottos) {
      Console.print(`${lottos.length}개를 구매했습니다.`);
      lottos.forEach(lotto => {
        Console.print(lotto.getNumbers().join(', '));
      });
    }
  
    static printResult(result, purchaseAmount) {
      Console.print('당첨 통계');
      Console.print('---');
      Console.print(`3개 일치 (5,000원) - ${result.threeMatchCount}개`);
      Console.print(`4개 일치 (50,000원) - ${result.fourMatchCount}개`);
      Console.print(`5개 일치 (1,500,000원) - ${result.fiveMatchCount}개`);
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.fiveWithBonusCount}개`);
      Console.print(`6개 일치 (2,000,000,000원) - ${result.sixMatchCount}개`);
  
      const totalRatio = ((result.totalPrize - purchaseAmount) / purchaseAmount) * 100;
      Console.print(`총 수익률은 ${totalRatio.toFixed(1)}%입니다.`);
    }
  }
  
  export default Output;