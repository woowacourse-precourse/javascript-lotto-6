import { Console, Random } from "@woowacourse/mission-utils";
import ValidateLottoNumSet from "./ValidateLottoNumSet";

class PrintOutput {
  constructor() {
    this.lottoNumSets = [];
    this.newLottoNumSets = [];
    this.winningArray = [0, 0, 0, 0, 0];
  }

  printLottoNumSet = (price) => {
    const quantity = price / 1000;
    Console.print(`${quantity}개를 구매했습니다.`);

    for(let i = 0; i < quantity; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((num1, num2) => num1 - num2);
      this.lottoNumSets.push(lottoNumbers);
    }

    this.newLottoNumSets = ValidateLottoNumSet(this.lottoNumSets);
    this.newLottoNumSets.forEach(lottoNumSet => {
      Console.print(`[${lottoNumSet.join(", ")}]`);
    });
  };

  calculateWinningDetails = (sixNum, bonusNum, lottoNumSets) => {
    lottoNumSets.forEach(lottoNumSet => {
      const equalNum = lottoNumSet.filter(num => sixNum.includes(num));
      const equalNumCount = equalNum.length;
      const equalBonusNumCount = lottoNumSet.includes(bonusNum) ? 1 : 0;

      if (equalNumCount === 3) this.winningArray[0]++;
      if (equalNumCount === 4) this.winningArray[1]++;
      if (equalNumCount === 5 && equalBonusNumCount === 0) this.winningArray[2]++;
      if (equalNumCount === 5 && equalBonusNumCount === 1) this.winningArray[3]++;
      if (equalNumCount === 6) this.winningArray[4]++;
    });

    return this.winningArray;
  };

  printWinningDetails = (winningArray) => {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningArray[4]}개`);
  };
  
  printTotalReturn = () => {
    // const totalReturn = 
    Console.print(`총 수익률은 ${totalReturn}입니다.`);
  };
}

export default PrintOutput;