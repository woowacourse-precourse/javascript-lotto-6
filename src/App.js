import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const LOTTO_NUM = await this.getLottoMoney();
    const LOTTO_ARRAY = await this.getLottoObject(LOTTO_NUM);
    const WIN_NUM = await this.getWinningNum();
    const BONUS_NUM = await this.getBonusNum(WIN_NUM);
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

  async getWinningNum(){
    const WINNING_NUM = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const regex = /^\d+(,\d+){5}$/;
    if(!regex.test(WINNING_NUM)) throw new Error("[ERROR] 당첨 번호는 숫자,숫자,숫자,숫자,숫자,숫자 의 형태로 입력해야 합니다.");

    const WINNING_NUM_ARR = WINNING_NUM.split(',').map(Number);
    WINNING_NUM_ARR.forEach(num => {
      if(num < 1 || num > 45) throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이로 입력해야 합니다.");
    });

    const UNIQUEARR = [...new Set(WINNING_NUM_ARR)];
    if(UNIQUEARR.length !== WINNING_NUM_ARR.length) throw new Error("[ERROR] 당첨 번호는 중복되지 않은 숫자로 입력해야 합니다.");

    MissionUtils.Console.print(WINNING_NUM_ARR);

    return WINNING_NUM_ARR;
  }

  async getBonusNum(WIN_NUM){
    const BONUS = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const BONUS_NUMBER = parseInt(BONUS, 10);

    if(isNaN(BONUS_NUMBER)) throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if(BONUS_NUMBER < 1 || BONUS_NUMBER > 45) throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자입니다.");
    if(!WIN_NUM.includes(BONUS_NUMBER))throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안됩니다.");
    
    return BONUS_NUMBER;
  }
}

export default App;
