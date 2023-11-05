import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";
import * as CONSTANTS from "./constants.js"

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
        purchaseAmountInput = await Console.readLineAsync(CONSTANTS.LOTTO_PURCHASE_MESSAGE);
        if (isNaN(Number(purchaseAmountInput))) {
          throw new Error(CONSTANTS.ERROR_INVALID_NUMBER);
        }
    
        if (Number(purchaseAmountInput) % CONSTANTS.LOTTO_TICKET_PRICE !== 0) {
          throw new Error(CONSTANTS.ERROR_NOT_IN_1000_UNITS);
        }
    
        validPurchaseAmount = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    
    const lottoCnt = Number(purchaseAmountInput)/CONSTANTS.LOTTO_TICKET_PRICE;

    Console.print(`${lottoCnt}개를 구매했습니다.`);
    for(let i = 0; i<lottoCnt; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a,b)=>a-b);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
    const winningNumbersInput = await Console.readLineAsync(CONSTANTS.WINNING_NUMBER_INPUT_MESSAGE);
    const winningNums = winningNumbersInput.split(',').map(number => Number(number.trim()));
    const bonusNum = await Console.readLineAsync(CONSTANTS.BONUS_NUMBER_INPUT_MESSAGE);

    //TODO: 함수로 빼기 countMatchingNum
    for(let i = 0; i<lottoCnt; i++){
      const res = this.lottos[i].result(winningNums, bonusNum);

      switch (res.cnt){
        case 3:
          this.statistics.fifth_prize++;
          this.statistics.totalPrice+=CONSTANTS.MATCH_3;
          break;
        case 4:
          this.statistics.fourth_prize++;
          this.statistics.totalPrice+=CONSTANTS.MATCH_4;
          break;
        case 5:
          if(res.hasBonus) {
            this.statistics.second_prize++;
            this.statistics.totalPrice+=CONSTANTS.MATCH_5_WITH_BONUS;
            break;
          }
          this.statistics.third_prize++;
          this.statistics.totalPrice+=CONSTANTS.MATCH_5;
          break;
        case 6:
          this.statistics.first_prize++;
          this.statistics.totalPrice+=CONSTANTS.MATCH_6;
          break;
        default:
          break;
      }
    }
    const roundedProfitPercentage = (Number(this.statistics.totalPrice)/Number(purchaseAmountInput)*100).toFixed(1);
    Console.print(CONSTANTS.LOTTO_STATISTICS_HEADER);
    Console.print(`${CONSTANTS.PRIZE_3_MATCH}${this.statistics.fifth_prize}개`);
    Console.print(`${CONSTANTS.PRIZE_4_MATCH}${this.statistics.fourth_prize}개`);
    Console.print(`${CONSTANTS.PRIZE_5_MATCH}${this.statistics.third_prize}개`);
    Console.print(`${CONSTANTS.PRIZE_5_MATCH_WITH_BONUS}${this.statistics.second_prize}개`);
    Console.print(`${CONSTANTS.PRIZE_6_MATCH}${this.statistics.first_prize}개`);
    Console.print(`${CONSTANTS.TOTAL_PROFIT_PERCENTAGE}${roundedProfitPercentage}%입니다.`);
  }
}
export default App;
