import {Console,Random } from "@woowacourse/mission-utils";
 const ERROR_MESSAGE = "[ERROR] 금액이 1000원 단위가 아닙니다.";
 const BUY_MESSAGE ="개를 구매했습니다.";
class Functions {
  lottoRandomNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return Array.from(randomNumbers);
  }
 
  validateAmount(amount){
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }
  printNumberLottos(amount){
 const numberOfLottos = amount / 1000;
 Console.print(`${numberOfLottos}` + BUY_MESSAGE);
  }

  buyLottoByAmount(amount) {
    this.validateAmount(amount);
    this.printNumberLottos(amount);
    const lottoList = [];
    for (let i = 0; i < amount/1000; i++) {
      const random = this.lottoRandomNumber();
      random.sort((a,b)=> a-b);
      lottoList.push(random);
      Console.print(random);
    }

    return lottoList;
  }
}

export default Functions;
