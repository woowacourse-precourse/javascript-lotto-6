import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const GAME = new lottoGame();
    const LOTTO_COUNT = await GAME.lottoMoneyInput();
    GAME.lottoCount(LOTTO_COUNT);
  }
}

class lottoGame {
  async lottoMoneyInput(){
    const LOTTO_MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(LOTTO_MONEY % 1000 !== 0){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if(LOTTO_MONEY.match(/[^0-9]/)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return LOTTO_MONEY/1000;
  }

  lottoCount(LOTTO_COUNT){
    MissionUtils.Console.print(`${LOTTO_COUNT}개를 구매했습니다.`);
    let lottoArr = [];
    for(let i = 0 ; i < LOTTO_COUNT; i++){
      let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a-b);
      lottoArr.push(lottoNumber);
      MissionUtils.Console.print(lottoNumber);
    }
  }



}

export default App;
