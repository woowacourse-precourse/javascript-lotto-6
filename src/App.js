import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const LOTTO_NUM = await this.getLottoMoney();
    const LOTTO_ARRAY = await this.getLottoObject(LOTTO_NUM);


  }

  async getLottoMoney(){
    const LOTTO_MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(LOTTO_MONEY % 1000 !== 0){
      throw new Error("[ERROR] 로또 구입 금액은 1000으로 나누어 떨어져야 합니다.");
    }
    return LOTTO_MONEY / 1000;
  }

  async getLottoObject(LOTTO_NUM){
    const ARR = [];
    for(let i = 0; i < LOTTO_NUM; i++){
      const NEWLOTTO = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      ARR.push(NEWLOTTO);
    }

    MissionUtils.Console.print(`\n${LOTTO_NUM}개를 구매했습니다.`);
    ARR.forEach(obj => {
      MissionUtils.Console.print(obj.getNumbers);
    });

    return ARR;
  }
}

export default App;
