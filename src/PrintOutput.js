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

  printWinningDetails = () => {
    // 함수 구현
  }
  
  printTotalReturn = () => {
    // 함수 구현
  }
}

export default PrintOutput;