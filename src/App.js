//import { MissionUtils } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";
function getRandom(num,arr){
  for(let i =0;i<num;i++){
    let pick = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
    pick.sort((a,b)=>(a-b));
    arr[i]=pick;
    MissionUtils.Console.print(pick);
  }
}

class App {
  async play() {
    let price = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    
    if(price%1000 !== 0){
      throw new Error("[ERROR] 구입 금액이 잘못되었습니다.");
    }

    let times = price/1000;
    MissionUtils.Console.print("\n" + times + "개를 구매했습니다.");
    var numArr = new Array(times);

    getRandom(numArr.length,numArr);
  }
}

export default App;
