import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";

const Output = {
  printTicketCount(ticketCount) {    
    Console.print(`\n${ticketCount}개를 구매했습니다.`)            
  },

  printLottoNumbers(lotto) {
    Console.print(`[${Parser.joinWithComma(lotto)}]`);      
  },

  printRank(rank) {    
    Console.print(`\n당첨 통계\n---`)
    Console.print(`3개 일치 (5,000원) - ${rank[4]}개`)
    Console.print(`4개 일치 (50,000원) - ${rank[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rank[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[1]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rank[0]}개`);             
  },

  printProfitRate(profitRate) {    
    Console.print(`총 수익률은 ${Parser.toFixedOneDecimal(profitRate)}%입니다.`);    
  }
}

export default Output;