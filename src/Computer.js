import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { MIN_PURCHASE_AMOUNT } from "./constant.js";

class Computer {
  printPurchaseCount(purchaseAmount){
    this.purchaseCount = Math.floor(purchaseAmount / MIN_PURCHASE_AMOUNT);
    const message = String(this.purchaseCount).concat("개를 구매했습니다.");
    Console.print(message);
  }

  makeLottoList(){
    let currentPurchaseCount = 0;
    let lottoList = [];
    
    while (currentPurchaseCount < this.purchaseCount) {
      lottoList.push(Computer.buyLotto());
      currentPurchaseCount += 1;
    }
    
    return lottoList;
  }

  static buyLotto(){
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}

export default Computer;