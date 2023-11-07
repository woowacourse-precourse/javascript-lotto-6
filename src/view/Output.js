import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';


class Output {
    
    PurchaseInformation(lottoInformations) {
      Console.print(MESSAGE.output.purchaseInformation(lottoInformations));
      console.close();
    }
  
    Statistics(totalResult, rate) {
      Console.print(MESSAGE.output.statistics(totalResult, rate));
      console.close();
    
    }
    print(message) {
      Console.print(message);
      console.close();
    }
  }
  
  export default Output;    