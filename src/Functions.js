import {Console,Random } from "@woowacourse/mission-utils";
 const ERROR_MESSAGE = "[ERROR] 금액이 1000원 단위가 아닙니다.";
 const BUY_MESSAGE ="개를 구매했습니다.";
class Functions {
  lottoRandomNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return Array.from(randomNumbers);
  }
 

  buyLottoByAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE);
    }

    const lottoList = [];
    const numberOfLottos = amount / 1000;
    Console.print(`${numberOfLottos}`+BUY_MESSAGE);
    for (let i = 0; i < numberOfLottos; i++) {
      const random = this.lottoRandomNumber();
      random.sort((a,b)=> a-b);
      lottoList.push(random);
      Console.print(random);
    }

    return lottoList;
  }
}

export default Functions;
