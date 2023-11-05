import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/Message.js";


class Output {
    
    PurchaseInformation(lottoInformations) {
      Console.print(MESSAGE.output.purchaseInformation(lottoInformations));
    }
  
    Statistics(totalLottoResult, profitRate) {
      Console.print(MESSAGE.output.statistics(totalLottoResult, profitRate));
    
    }
    print(message) {
      Console.print(message);
    }
  }
  
  export default Output;
  
  
    