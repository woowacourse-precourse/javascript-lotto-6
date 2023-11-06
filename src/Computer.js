import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { MIN_PURCHASE_AMOUNT } from "./constant.js";

class Computer {
  makeLottoList(purchaseAmount){
    let purchaseCount = 0;
    let lottoList = [];

    while (purchaseCount < Math.floor(purchaseAmount / MIN_PURCHASE_AMOUNT)) {
      lottoList.push(Computer.buyLotto());
      purchaseCount += 1
    }
    return lottoList;
  }

  static buyLotto(){
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}

export default Computer;