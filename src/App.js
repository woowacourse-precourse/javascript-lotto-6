//import { MissionUtils } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

function getRandom(num,arr){
  for(let i =0;i<num;i++){
    let pick = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
    pick.sort((a,b)=>(a-b));
    arr[i]=pick;
    MissionUtils.Console.print(pick);
  }
}

function priceError(input){
  if(input%1000 !== 0){
    throw new Error("[ERROR] 구입 금액이 잘못되었습니다.");
  }
}

function lottoNum(input,arr){    
    for(const char of input){
      const num = parseInt(char);
      if(!isNaN(num)){
        arr.push(num);
      }
      if(num>45||num<1){
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
}

function bonusError(input){
  if(input>45 || input<1){
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
}


class App {
  async play() {
    let price = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    
    priceError(price);

    let times = price/1000;
    MissionUtils.Console.print("\n" + times + "개를 구매했습니다.");
    var numArr = new Array(times);

    getRandom(numArr.length,numArr);

    const inputArr=[];
    const userInput = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    lottoNum(userInput,inputArr);

    const lotto = new Lotto(inputArr);
    
    const bonus = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    bonusError(bonus);

    //lotto.compare(inputArr,bonus);
  }
}

export default App;
