import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const PRINT = new lottoPrint();
    const LOTTO_COUNT = PRINT.lottoMoneyInput();

  }
}

class lottoPrint {
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




}

export default App;
