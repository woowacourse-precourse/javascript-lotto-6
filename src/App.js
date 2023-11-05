import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class App {
  async play() {

    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    //TODO: 예외처리
    
    const lottoCnt = Number(purchaseAmountInput)/1000;

    Console.print(`${lottoCnt}개를 구매했습니다.\n`);
    for(let i = 0; i<lottoCnt; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
     numbers.sort((a,b)=>a-b);
      Console.print(numbers) //TODO: 로또에 메서드 넣기
      const lotto = new Lotto(numbers);
    }

    const winningNum = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const bonusNum = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    
  }
}
export default App;
