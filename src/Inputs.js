import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

class Inputs {
  returnPurchaseAmount() {
    return this.getPromptedAmount();
  }

  async getPromptedAmount() {
    try {
      const purchaseAmount = await this.getInput('구입금액을 입력해 주세요.');
      return Validation.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedAmount();
    }
  }

  getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default Inputs;

// returnWinningNumbers(){

// }

// async getPromptedWinningNumbers(){
//   try{

//   }catch(error){
//     Console.print(error.message);
//     return this.getPromptedWinningNumbers
//   }
// }
