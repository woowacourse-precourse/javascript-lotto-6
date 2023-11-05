import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Validator from './Validator.js';

const Input = {
  async getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      const purchaseAmount = Parser.valueToNumber(input);      
      Validator.purchaseAmount(purchaseAmount);
      return purchaseAmount;      
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();            
    }
  },

  async getWinningNumbers() {
    try {      
      const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      const winningNumbers = Parser.commaSeparatedValuesToNumbers(input);
      Validator.winningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return await this.getWinningNumbers();      
    }
  },

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      const bonusNumber = Parser.valueToNumber(input); 
      Validator.bonusNumber(winningNumbers, bonusNumber);
      return bonusNumber;      
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber(winningNumbers);      
    }
  }
}
  
export default Input;