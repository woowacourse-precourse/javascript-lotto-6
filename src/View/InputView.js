import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';
import InputValidator from '../utils/InputValidator.js';

class InputView {
  constructor() {
    this.winningNumberArray = [];
  }

  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async promptPurchaseAmount() {
    while(true) {
      try {
        const purchaseAmount = await this.getUserInput(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
  
        const userMoney = Number(purchaseAmount);
        console.log('userMoney: ', userMoney);
        InputValidator.validatePurchaseAmount(userMoney);

        return userMoney;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }

  async promptWinningNumbers() {
    while(true) {
      try {
        const winningNumbers = await this.getUserInput(GAME_MESSAGES.ENTER_WINNING_NUMBERS);
        const winningNumbersArray = winningNumbers.split(',').map((number) => number.trim());
      
        this.winningNumberArray = winningNumbersArray;
  
        InputValidator.validateLottoWinningNumber(winningNumbersArray);

        return winningNumbersArray;
      } catch(error) {
        Console.print(error);
      }
    }

  }

  async promptBonusNumber() {
    while(true){
      try {
        const bonusNumber = await this.getUserInput(GAME_MESSAGES.ENTER_BONUS_NUMBER);
        
        InputValidator.validateLottoBonusNumber(this.winningNumberArray, Number(bonusNumber));

        return bonusNumber;
      } catch(error) {
        Console.print(error);
      }
    }
  }
}

export default InputView;
