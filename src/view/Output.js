import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/Message.js";


class Output {
    
    printLottoPurchaseInformation(lottoInformations) {
      Console.print(MESSAGE.output.purchaseInformation(lottoInformations));
    }
  
    printStatistics(totalLottoResult, profitRate) {
      Console.print(MESSAGE.output.statistics(totalLottoResult, profitRate));
    }
  }
  
  export default Output;
  
  
    