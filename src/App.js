import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";

class App {
  async getUserMoney() {
    const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if(
      MONEY === null 
      || MONEY.match(/\D/) 
      || parseInt(MONEY) % 1000 != 0
    ) {
      throw new Error('[ERROR] 잘못된 금액을 입력하셨습니다.');
    }

    return MONEY;
  }

  async play() {
    //사용자로부터 구입 금액 입력 받기
    const MONEY = await this.getUserMoney();
    const NUM_TICKETS = parseInt(MONEY) / 1000;
    MissionUtils.Console.print(`${NUM_TICKETS}개를 구매했습니다.`)
    //사용자로부터 당첨 번호 입력 받기
    //const winning_number = getWinningNum();
  }
}

export default App;
