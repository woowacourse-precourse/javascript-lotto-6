import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG, MATCH_DATA } from './constant/message.js';

class Output {
  
  async printPurchaseAmonut() {
    await Console.print(OUTPUT_MSG.PURCHASE_AMOUNT)
  }

  async printLottoArray(amount, array) {
    await Console.print(`\n${amount}${OUTPUT_MSG.PURCHASE_ITEM_COUNT}`)
    for(let i=0; i<array.length; i += 1) {
      Console.print(array[i])
    }
  }

  async printWinnerNumber() {
    await Console.print(OUTPUT_MSG.WINNER_NUMBER)
  }

  async printBonusNumber() {
    await Console.print(OUTPUT_MSG.WINNER_BOUNS_NUMBER)
  }

  async printLottoResult(key, value) {
    const consoleMessages = [];
    if (key === "3") consoleMessages.push(OUTPUT_MSG.WIN_RESULT, OUTPUT_MSG.LINE);
    if (key === "4") consoleMessages.push(MATCH_DATA.FOUR);
    if (key === "5") consoleMessages.push(MATCH_DATA.FIVE);
    if (key === "bonus") consoleMessages.push(MATCH_DATA.BONUS);
    if (key === "6") consoleMessages.push(MATCH_DATA.SIX);
    consoleMessages.push(`${value}개`);
    Console.print(consoleMessages.join(" "));
  }
  
  async printYieldCalculation(total) {
    await Console.print(`${OUTPUT_MSG.TOTAL_MONEY} ${total}${OUTPUT_MSG.PERCENT}`)
  }
}

export default Output