import { Console, Random } from "@woowacourse/mission-utils";
import ValidateLottoNumSet from "./ValidateLottoNumSet";

class PrintOutput {
  constructor() {
    this.lottoNumSets = [];
  }

  printLottoNumSet = (price) => {
    const quantity = price / 1000;
    Console.print(`${quantity}개를 구매했습니다.`);

    for(let i = 0; i < quantity; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((num1, num2) => num1 - num2);
      this.lottoNumSets.push(lottoNumbers);
    }

    ValidateLottoNumSet(this.lottoNumSets);

    forEach()
  }
}