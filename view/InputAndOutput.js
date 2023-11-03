import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/common/OutputMessage";

class InputAndOutput{
    
    constructor(){

    }

    async inputPurchaseAmount(){
        const PURCHASE_AMOUNT = await Console.print(`${MESSAGE.PURCHASE_NUMBER_INPUT}\n`);
        
    }
}
export default InputAndOutput;

// class Lotto {
//     #numbers;
  
//     constructor(numbers) {
//       this.#validate(numbers);
//       this.#numbers = numbers;
//     }
  
//     #validate(numbers) {
//       if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NUMBER_COUNT);
//       if (numbers.length !== new Set(numbers).length) throw new Error(ERROR_MESSAGE.NUMBER_DUPLICATE);
//       if (typeof numbers !== number) throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
//     }
//     // TODO: 추가 기능 구현
//   }
  
//   export default Lotto;