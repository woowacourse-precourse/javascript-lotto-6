import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG, MATCH_DATA } from './constant/message.js';

class Output {
  
  async printPurchaseAmonut() {
    await Console.print(OUTPUT_MSG.PURCHASE_AMOUNT)
  }

  async printLottoArray(amount, array) {
    Console.print(`\n${amount}${OUTPUT_MSG.PURCHASE_ITEM_COUNT}`)
    
    array.forEach((lotto) => {
      const arraytoString = `[${lotto.join(', ')}]`; 
      Console.print(arraytoString);
    });
  }

  async printWinnerNumber() {
    await Console.print(OUTPUT_MSG.WINNER_NUMBER)
  }

  async printBonusNumber() {
    await Console.print(OUTPUT_MSG.WINNER_BOUNS_NUMBER)
  }

  async printLottoResult(key, value) {
    if (key === "3") {
      Console.print(`\n${OUTPUT_MSG.WIN_RESULT}\n${OUTPUT_MSG.LINE}`)
      Console.print(`${MATCH_DATA.THREE} ${value}개`);
    } else if (key === "4") {
      Console.print(`${MATCH_DATA.FOUR} ${value}개`);
    } else if (key === "5") {
      Console.print(`${MATCH_DATA.FIVE} ${value}개`);
    } else if (key === "bonus") {
      Console.print(`${MATCH_DATA.BONUS} ${value}개`);
    } else if (key === "6") {
      Console.print(`${MATCH_DATA.SIX} ${value}개`);
    }
  }
  
  async printYieldCalculation(total) {
    await Console.print(`${OUTPUT_MSG.TOTAL_MONEY} ${total}${OUTPUT_MSG.PERCENT}`)
  }
}

export default Output