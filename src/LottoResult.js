import { MESSAGE } from "./Message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoResult {
  constructor(){
    this.result = [0, 0, 0, 0, 0];
  }

  printResult(){
    MissionUtils.Console.print(MESSAGE.result);
    this.result.forEach((number, index) => {
      MissionUtils.Console.print(this.calculateEarningMoney(number, index))
    });  
  }

  calculateEarningMoney(number, index){
    if(index === 0){
      return MESSAGE.threeSame(number);
    }
    if(index === 1){
      return MESSAGE.fourSame(number);
    }
    if(index === 2){
      return MESSAGE.fiveSame(number);
    }
    if(index === 3){
      return MESSAGE.fiveAndBonusSame(number);
    }
    if(index === 4){
      return MESSAGE.sixSame(number);
    }
  }
}

export default LottoResult;