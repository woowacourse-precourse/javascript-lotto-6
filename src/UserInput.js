import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_CONSTANTS, MESSAGE, ERROR_MESSAGE } from "./Message.js";

class UserInput{
  #money;
  #winningNumbers;
  #bonusNumber;

  async getInputMoney(){
    while(true){
      try{
        const inputMoney = Number(await MissionUtils.Console.readLineAsync(MESSAGE.money));
        this.#checkMoneyValidation(inputMoney);
        this.#money = inputMoney;
        return [this.#money, this.#money / LOTTO_CONSTANTS.unitMoney];
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }
  
  async getInputWinningNumbers(){
    while(true){
      try{
        const inputNumbers = (await MissionUtils.Console.readLineAsync(MESSAGE.winningNumbers)).split(',').map((element) => Number(element));
        const lotto = new Lotto(inputNumbers);
        this.#winningNumbers = lotto.getLotto();
        return this.#winningNumbers;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getInputBonusNumber(){
    while(true){
      try{
        const inputBonusNumber = Number(await MissionUtils.Console.readLineAsync(MESSAGE.bonusNumber));
        this.#checkBonusNumberValidation(inputBonusNumber);
        this.#bonusNumber = inputBonusNumber;
        return this.#bonusNumber;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }

  #checkMoneyValidation(inputMoney){
    if(isNaN(inputMoney)){
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if(!inputMoney || inputMoney % LOTTO_CONSTANTS.unitMoney){
      throw new Error(ERROR_MESSAGE.notMultiplesOf1000);
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
