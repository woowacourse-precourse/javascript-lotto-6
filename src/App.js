import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = [];
    this.statistics = {
      first_prize: 0,
      second_prize: 0,
      third_prize: 0,
      fourth_prize: 0,
      fifth_prize:0
    };
  }
  async play() {

    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    //TODO: 예외처리, 매직넘버
    
    const lottoCnt = Number(purchaseAmountInput)/1000;

    Console.print(`${lottoCnt}개를 구매했습니다.\n`);
    for(let i = 0; i<lottoCnt; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a,b)=>a-b);
      Console.print(numbers) //TODO: 로또에 메서드 넣기
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }

    const winningNum = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const bonusNum = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    //TODO: 함수로 빼기 countMatchingNum
    for(let i = 0; i<lottoCnt; i++){
      const res = this.lottos[i].result(winningNum, bonusNum);
      switch (res.cnt){
        case 3:
          this.statistics.fifth_prize++;
          break;
        case 4:
          this.statistics.fourth_prize++;
          break;
        case 5:
          if(res.hasBonus) this.statistics.second_prize++;
          else this.statistics.third_prize++;
          break;
        case 6:
          this.statistics.first_prize++;
          break;
        default:
          break;
      }
    }
  }
}
export default App;
