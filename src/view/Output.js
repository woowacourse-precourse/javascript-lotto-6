import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/Message.js";


class Output {
    
    printLottoPurchaseInformation(lottoInformations) {
      Console.print(MESSAGE.Output.purchaseInformation(lottoInformations));
    }
  
    printStatistics(totalLottoResult, profitRate) {
      Console.print(MESSAGE.Output.outstatistics(totalLottoResult, profitRate));
    }
  }
  
  export default Output;
  
  
    