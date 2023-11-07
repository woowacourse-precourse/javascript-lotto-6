//import { MissionUtils } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

function getRandom(num,arr){
  for(let i =0;i<num;i++){
    let pick = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
    pick.sort((a,b)=>(a-b));
    arr[i]=pick;
    MissionUtils.Console.print("["+arr[i][0]+", "+arr[i][1]+", "+arr[i][2]+", "+arr[i][3]+", "+arr[i][4]+", "+arr[i][5]+"]");
    //MissionUtils.Console.print(pick);
  }
}

function priceError(input){
  if(isNaN(input)||input%1000 !== 0||input<=0){
    throw new Error("[ERROR]");
  }
}

function getPrice(price){
    try{
      priceError(price);
    }catch(err){
      MissionUtils.Console.print(err.message);
     
    }
}

function lottoNum(input){    
  var arr=input.split(',').map(function(item){
    return parseInt(item);
  });
  for(let i =0;i<arr.length;i++){
    if(arr[i]>45 || arr[i]<1){
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  return arr;
}

function bonusError(input,arr){
  if(input>45 || input<1){
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
  if(arr.includes(input)){
    throw new Error("[ERROR] 보너스 번호가 잘못되었습니다.");
  }
  
}


class App {
  async play() {
    let price="";
    while(true){
      price= await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
      try{
        priceError(price);
      }catch(err){
        MissionUtils.Console.print(err.message);
        continue;
      }
      break;
    }
    
    let times = price/1000;   
    MissionUtils.Console.print("\n" + times + "개를 구매했습니다.");
    var numArr = new Array(times);

    getRandom(numArr.length,numArr);

    let userInput="";
    var inputArr=[];
  
    while(true){
      try{
        userInput = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        inputArr = lottoNum(userInput);
        const lotto = new Lotto(inputArr);
      }catch(err){
        MissionUtils.Console.print(err.message);
        continue;
      }
      break;
    }
    
    const lotto = new Lotto(inputArr);

    let bonus="";
    while(true){
      bonus = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      bonus = parseInt(bonus);
      try{
        bonusError(bonus,inputArr);
      }
      catch(err){
        MissionUtils.Console.print(err.message);
        continue;
      }
      break;
    }

    var result = [0,0,0,0,0];
    for(let i=0;i<numArr.length;i++){
      lotto.compare(numArr[i],bonus,result);
    }

    lotto.printResult(result);
    lotto.printPrice(lotto.lottoSum(result),price);
  }
}

export default App;
