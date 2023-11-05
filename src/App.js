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
      fifth_prize:0,
      totalPrice:0,
    };
  }
  async play() {

    let validPurchaseAmount = false;
    let purchaseAmountInput;
    
    while (!validPurchaseAmount) {
      try {
        purchaseAmountInput = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
    
        Console.print(purchaseAmountInput);
    
        if (isNaN(Number(purchaseAmountInput))) {
          throw new Error("[ERROR] 구매 금액은 유효한 숫자여야 합니다.");
        }
    
        if (Number(purchaseAmountInput) % 1000 !== 0) {
          throw new Error("[ERROR] 구매 금액은 1,000원 단위이어야 합니다.");
        }
    
        validPurchaseAmount = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    
    const lottoCnt = Number(purchaseAmountInput)/1000;

    Console.print(`${lottoCnt}개를 구매했습니다.`);
    for(let i = 0; i<lottoCnt; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a,b)=>a-b);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
    const winningNumbersInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNums = winningNumbersInput.split(',').map(number => Number(number.trim()));
    const bonusNum = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    //TODO: 함수로 빼기 countMatchingNum
    for(let i = 0; i<lottoCnt; i++){
      const res = this.lottos[i].result(winningNums, bonusNum);

      switch (res.cnt){
        case 3:
          this.statistics.fifth_prize++;
          this.statistics.totalPrice+=5000;
          break;
        case 4:
          this.statistics.fourth_prize++;
          this.statistics.totalPrice+=50000;
          break;
        case 5:
          if(res.hasBonus) {
            this.statistics.second_prize++;
            this.statistics.totalPrice+=30000000;
            break;
          }
          this.statistics.third_prize++;
          this.statistics.totalPrice+=1500000;
          break;
        case 6:
          this.statistics.first_prize++;
          this.statistics.totalPrice+=2000000000;
          break;
        default:
          break;
      }
    }
    const roundedProfitPercentage = (Number(this.statistics.totalPrice)/Number(purchaseAmountInput)*100).toFixed(1);
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.statistics.fifth_prize}개`);
    Console.print(`4개 일치 (50,000원) - ${this.statistics.fourth_prize}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.statistics.third_prize}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.statistics.second_prize}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.statistics.first_prize}개`);
    Console.print(`총 수익률은 ${roundedProfitPercentage}%입니다.`);
  }
}
export default App;
