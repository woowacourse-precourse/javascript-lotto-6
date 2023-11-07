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

  generateRandomLottoNum(NUM_TICKETS) {
    const tickets = [];
    [...Array(NUM_TICKETS)].forEach((_, cnt) => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      tickets.push(lotto);
    })
    
    return tickets;
  }

  async getWinningNum() {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winning_number = new Lotto(input.split(',').map(Number));

    return winning_number;
  }

  async play() {
    const MONEY = await this.getUserMoney();
    const NUM_TICKETS = parseInt(MONEY) / 1000;
    MissionUtils.Console.print(`\n${NUM_TICKETS}개를 구매했습니다.`);

    const tickets = this.generateRandomLottoNum(NUM_TICKETS);
    tickets.forEach(ticket => {
      ticket.print_num();
    })
    //사용자로부터 당첨 번호 입력 받기
    const winning_number = await this.getWinningNum();
    winning_number.print_num();

  }
}

export default App;
