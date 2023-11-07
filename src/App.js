import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const GAME = new lottoGame();
    const LOTTO_COUNT = await GAME.lottoMoneyInput();
    GAME.lottoCount(LOTTO_COUNT);
    const LOTTO_WIN_NUMBER = await GAME.lottoWinNumber();
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

  async lottoWinNumber(){
    const WIN_NUMBER = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    
    const LOTTO_WIN_NUMBER = WIN_NUMBER.split(",");
    LOTTO_WIN_NUMBER.array.forEach(lottoNum => {
      if(lottoNum < 1){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if(lottoNum > 45){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if(lottoNum.match(/[^0-9]/)){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    });
    
    new Lotto(LOTTO_WIN_NUMBER);
  }


}

export default App;
