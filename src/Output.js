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
    if(key ==="3") {
      Console.print(OUTPUT_MSG.WIN_RESULT)
      Console.print(OUTPUT_MSG.LINE)
      Console.print(`${MATCH_DATA.THREE} ${value}개`)
    }
    
    if(key === "4") Console.print(`${MATCH_DATA.FOUR} ${value}개`)
    if(key === "5") Console.print(`${MATCH_DATA.FIVE} ${value}개`)
    if(key === "bonus") Console.print(`${MATCH_DATA.BONUS} ${value}개`)
    if(key === "6") Console.print(`${MATCH_DATA.SIX} ${value}개`)
  }
}

export default Output