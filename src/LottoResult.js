import { Message } from "./Message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoResult {
  constructor(){
    this.result = [0, 0, 0, 0, 0];
    this.earningMoney = 0;
  }

  printResult(previousMoney){
    MissionUtils.Console.print(Message.result);
    this.result.forEach((number, index) => {
      MissionUtils.Console.print(this.calculateEarningMoney(number, index))
    });
    MissionUtils.Console.print(Message.earningRate(this.getEarningRate(previousMoney)));
  }

  calculateEarningMoney(number, index){
    if(index === 0){
      this.earningMoney += 5000 * number;
      return Message.fifthGrade(number);
    }
    if(index === 1){
      this.earningMoney += 50000 * number;
      return Message.fourthGrade(number);
    }
    if(index === 2){
      this.earningMoney += 1500000 * number;
      return Message.thirdGrade(number);
    }
    if(index === 3){
      this.earningMoney += 30000000 * number;
      return Message.secondGrade(number);
    }
    if(index === 4){
      this.earningMoney += 2000000000 * number;
      return Message.firstGrade(number);
    }
  }

  getEarningRate(previousMoney){
    const rate = (this.earningMoney / previousMoney) * 100;
    return rate.toFixed(1);
  }
}

export default LottoResult;