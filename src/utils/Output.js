import { Console } from "@woowacourse/mission-utils";

const Output = {
  printTicketCount(ticketCount) {    
    Console.print(`\n${ticketCount}개를 구매했습니다.`)            
  },

  printLottoNumbers(lotto) {
    Console.print(`[${lotto.join(', ')}]`);      
  }
}

export default Output;