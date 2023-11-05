import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class App {
  async play() {

    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    //TODO: 예외처리
    
    const lottoCnt = Number(purchaseAmountInput)/1000;
    for(let i = 0; i<lottoCnt; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers)
      const lotto = new Lotto(numbers);
    }
  }
}
export default App;
