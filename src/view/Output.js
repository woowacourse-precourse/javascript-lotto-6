import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/Message.js";


class Output {
    
    PurchaseInformation(lottoInformations) {
      Console.print(MESSAGE.output.purchaseInformation(lottoInformations));
    }
  
    Statistics(totalResult, rate) {
      Console.print(MESSAGE.output.statistics(totalResult, rate));
    
    }
    print(message) {
      Console.print(message);
    }
  }
  
  export default Output;
  
  
    