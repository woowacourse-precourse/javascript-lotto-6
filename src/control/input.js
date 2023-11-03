import { MESSAGE } from "../const/message";
import { MissionUtils } from "@woowacourse/mission-utils";

export default class inputNumbers{
    async getNumbers(){
      const winningNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.WINNING_NUMBER);
      this.winning = this.checkWinningNumbers(winningNumbers);
    }
  
    checkWinningNumbers(winningNumbers){
      const checkWinningNumber = winningNumbers.spilt(",").map(Number);
  
      if(!winningNumbers.includes(',')) {throw new Error(ERROR.NO_COMMA)};
      if(winningNumbers.length !== 6) { throw new Error(ERROR.SIX)};
      this.checkNumberError(checkWinningNumber);
      return checkWinningNumber;
    } 
  
    async getBonusNumbers(){
      const bonusNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.BONUS_NUMBER);
      this.bonus = this.checkBonusNumbers(bonusNumbers);
    }
    checkBonusNumbers(bonusNumbers){
      const checkBonusNumber = bonusNumbers.spilt(",").map(Number);
  
      if(bonusNumbers.includes(',')) {throw new Error(ERROR.INPUT_COMMA)};
      this.checkNumberError(checkBonusNumber);
      return checkBonusNumber;
    }
    checkNumberError(numbers){
      if(!Number.isInteger(numbers)) {throw new Error(ERROR.INTEGER)};
      if(numbers < 1) {throw new Error(ERROR.ONE)};
      if(numbers > 45) {throw new Error(ERROR.FORTY_FIVE)};
    }
  }
  