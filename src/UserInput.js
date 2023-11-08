import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { Message, Error_message } from "./Message.js";

class UserInput{
  #money;
  #jackpot;
  #bonusNumber;

  async getInputMoney(){
    while(true){
      try{
        const inputMoney = Number(await MissionUtils.Console.readLineAsync(Message.money));
        this.#validateMoney(inputMoney);
        this.#money = inputMoney;
        return this.#money;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }
  
  async getInputJackpot(){
    while(true){
      try{
        const inputNumbers = (await MissionUtils.Console.readLineAsync(Message.jackpot)).split(',').map((element) => Number(element));
        const lotto = new Lotto(inputNumbers);
        this.#jackpot = lotto.getLotto();
        return this.#jackpot;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getInputBonusNumber(){
    while(true){
      try{
        const inputBonusNumber = Number(await MissionUtils.Console.readLineAsync(Message.bonusNumber));
        this.#validateBonus(inputBonusNumber);
        this.#bonusNumber = inputBonusNumber;
        return this.#bonusNumber;
      } catch(error){
        MissionUtils.Console.print(error.message);
      }
    }
  }

  #validateMoney(inputMoney){
    if(isNaN(inputMoney)){
      throw new Error(Error_message.notANumber);
    }
    if(!inputMoney || inputMoney % 1000){
      throw new Error(Error_message.notMultiplesOf1000);
    }
  }

  #validateBonus(bonusNumber){
    if(isNaN(bonusNumber)){
      throw new Error(Error_message.notANumber);
    }
    if(bonusNumber <= 0 || bonusNumber > 45){
      throw new Error(Error_message.notLottoNumbers);
    }
  }
}

export default UserInput;