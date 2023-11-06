import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from "./Message.js";

class UserInput{
  #money;
  #winningNumbers;
  #bonusNumber;

  async getInputMoney(){
    const inputMoney = Number(await MissionUtils.Console.readLineAsync(MESSAGE.inputMoney));
    this.#checkMoneyValidation(inputMoney);
    this.#money = inputMoney;
    return this.#money;
  }
  
  async getInputWinningNumbers(){
    const inputNumbers = (await MissionUtils.Console.readLineAsync(MESSAGE.inputWinningNumbers)).split(',').map((element) => Number(element));
    this.#checkWinningsNumbersValidation(inputNumbers);
    this.#winningNumbers = inputNumbers;
    return this.#winningNumbers;
  }

  async getInputBonusNumber(){
    const inputBonusNumber = Number(await MissionUtils.Console.readLineAsync(MESSAGE.inputBonusNumber));
    this.#checkBonusNumberValidation(inputBonusNumber);
    this.#bonusNumber = inputBonusNumber;
    return this.#bonusNumber;
  }

  #checkMoneyValidation(inputMoney){
    if(inputMoney % 1000){
      throw new Error(ERROR_MESSAGE.notMultiplesOf1000);
    }
    if(isNaN(inputMoney)){
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }

  #checkWinningsNumbersValidation(inputNumbers){
    if(inputNumbers.length !== 6){
      throw new Error(ERROR_MESSAGE.notSixNumbers);
    }
    inputNumbers.forEach((number) => {
      if(isNaN(number)){
        throw new Error(ERROR_MESSAGE.notNumber);
      }
      if(number <= 0 || number > 45){
        throw new Error(ERROR_MESSAGE.notLottoNumbers);
      }
    })
    const set = new Set(inputNumbers);
    if(set.size !== 6){
      throw new Error(ERROR_MESSAGE.notUniqueNumbers);
    }
  }

  #checkBonusNumberValidation(bonusNumber){
    if(isNaN(bonusNumber)){
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if(bonusNumber <= 0 || bonusNumber > 45){
      throw new Error(ERROR_MESSAGE.notLottoNumbers);
    }
  }
}

export default UserInput;
