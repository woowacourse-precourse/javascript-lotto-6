import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js"

class App {
  async play() {
    let buyCost;
    while(true){
      try{
        buyCost = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if(!Number.isFinite(Number(buyCost))) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if(Number(buyCost) % 1000 !== 0){
          throw new Error("[ERROR] 구입급액은 1,000원 단위로 나누어 떨어져야 합니다.");
        }
        break;
      } catch(error){
        
      }
    }
  }
}

export default App;
