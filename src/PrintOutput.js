import { Console, Random } from "@woowacourse/mission-utils";
import ValidateLottoNumSet from "./ValidateLottoNumSet";

class PrintOutput {
  constructor() {
    this.lottoNumSets = [];
    this.newLottoNumSets = [];
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
  }

  calculateWinningDetails = (sixNum, bonusNum, lottoNumSets) => {
    // 구현
  }

  printWinningDetails = () => {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winning1}개`);
    Console.print(`4개 일치 (50,000원) - ${winning2}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winning3}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winning4}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winning5}개`);
  }
  
  printTotalReturn = () => {
    // 함수 구현
  }
}

export default PrintOutput;