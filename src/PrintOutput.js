import { Console, Random } from "@woowacourse/mission-utils";
import validateLottoNumSet from "./validateLottoNumSet.js";

class PrintOutput {
  constructor() {
    this.lottoNumSets = [];
    this.newLottoNumSets = [];
  }

  async print(validNumbers, validBonusNum, lottoNumSets, validPrice) {
    const winningArray = await this.calculateWinningDetails(validNumbers, validBonusNum, lottoNumSets);
    await this.printWinningDetails(winningArray);
    await this.printTotalReturn(winningArray, validPrice);
  }
  
  printLottoNumSet = async (price) => {
    const quantity = price / 1000;
    Console.print(`\n${quantity}개를 구매했습니다.`);

    for(let i = 0; i < quantity; i++) {
      let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((num1, num2) => num1 - num2);
      this.lottoNumSets.push(lottoNumbers);
    }

    this.newLottoNumSets = validateLottoNumSet(this.lottoNumSets);
    this.newLottoNumSets.forEach(lottoNumSet => {
      Console.print(`[${lottoNumSet.join(", ")}]`);
    });

    return this.newLottoNumSets;
  };

  calculateWinningDetails = async (sixNum, bonusNum, lottoNumSets) => {
    let winningArray = [0, 0, 0, 0, 0];

    lottoNumSets.forEach(lottoNumSet => {
      let equalNum = lottoNumSet.filter(num => sixNum.includes(num));
      let equalNumCount = equalNum.length;
      let equalBonusNumCount = 0;
      if (equalNumCount === 5 && lottoNumSet.includes(bonusNum)) equalBonusNumCount = 1;

      if (equalNumCount === 3) winningArray[0]++;
      if (equalNumCount === 4) winningArray[1]++;
      if (equalNumCount === 5 && equalBonusNumCount === 0) winningArray[2]++;
      if (equalNumCount === 5 && equalBonusNumCount === 1) winningArray[3]++;
      if (equalNumCount === 6) winningArray[4]++;
    });
    return winningArray;
  };

  printWinningDetails = async (winningArray) => {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningArray[4]}개`);
  };
  
  printTotalReturn = async (winningArray, purchasePrice) => {
    const priceLevel = [5000, 50000, 1500000, 30000000, 2000000000];
    const winningPrice = winningArray.reduce((total, count, index) => total + count * priceLevel[index], 0);
    const totalReturn = (winningPrice / purchasePrice) * 100;
    const totalReturnNumber = parseFloat(totalReturn.toFixed(2)).toFixed(1);
    
    Console.print(`총 수익률은 ${totalReturnNumber}%입니다.`);
  };
}

export default PrintOutput;