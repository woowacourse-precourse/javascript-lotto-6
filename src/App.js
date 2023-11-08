import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";

class App {
  checkValidMoney(MONEY) {
    if(MONEY === null) throw new Error('[ERROR] 금액을 입력받지 못했습니다.');
    if(MONEY <= 0) throw new Error('[ERROR] 잘못된 금액을 입력하셨습니다.');
    if(MONEY % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1000원 단위로 입력해주세요.');
  }

  stringToNum(str) {
    const num = Number(str);
    if(isNaN(num)) throw new Error('[ERROR] 숫자를 입력해야합니다.');

    return num;
  }

  async getUserMoney() {
    let MONEY;
    try {
      const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      MONEY = this.stringToNum(input);
      this.checkValidMoney(MONEY);
    } catch(error) {
      MissionUtils.Console.print(error.message);
      MONEY = await this.getUserMoney();
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
    const input = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winning_number = new Lotto(input.split(',').map(Number));
    return winning_number;
  }

  async getBonusNum(winning_number) {
    const num = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    if(
      num === null
      || num.match(/\D/)
      || isNaN(parseInt(num))
      || parseInt(num) < 1 
      || parseInt(num) > 45
      || winning_number.hasBonusNumber(parseInt(num))
    ) {
      throw new Error('[ERROR] 잘못된 번호를 입력하셨습니다.');
    }

    return parseInt(num);
  }

  winningStats(winning_number, bonus_number, tickets) {
    const winning_stats = {
      3: 0,
      4: 0,
      5: 0,
      'bonus': 0,
      6: 0,
    };

    tickets.forEach((ticket) => {
      const match_num = ticket.countMatchNumber(winning_number);
      const has_bonus_num = ticket.hasBonusNumber(bonus_number);

      if(match_num >= 3) {
        winning_stats[has_bonus_num ? (match_num === 5 ? 'bonus' : match_num) : match_num] += 1;
      }
    });

    return winning_stats;
  }

  printWinningStats(winning_stats) {
    const prize = new Map([
      [3, '3개 일치 (5,000원)'],
      [4, '4개 일치 (50,000원)'],
      [5, '5개 일치 (1,500,000원)'],
      ['bonus', '5개 일치, 보너스 볼 일치 (30,000,000원)'],
      [6, '6개 일치 (2,000,000,000원)']
    ]);
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');

    prize.forEach((value, key) => {
      MissionUtils.Console.print(`${value} - ${winning_stats[key]}개`);
    });

  }

  calcProfitRate(MONEY, winning_stats) {
    const pirze_money = {
      3: 5000,
      4: 50000,
      5: 1500000,
      'bonus': 300000000,
      6: 2000000000,
    };
    let total_money = 0;
    let profit_rate = 0;

    for(const key in winning_stats) {
      if(winning_stats[key]) {
        total_money += winning_stats[key] * pirze_money[key];
      }
    }

    profit_rate = (total_money / MONEY) * 100;
    profit_rate = profit_rate.toFixed(1);
    profit_rate = profit_rate.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    MissionUtils.Console.print(`총 수익률은 ${profit_rate}%입니다.`);
  }

  async play() {
    const MONEY = await this.getUserMoney();
    const NUM_TICKETS = parseInt(MONEY) / 1000;
    MissionUtils.Console.print(`${NUM_TICKETS}개를 구매했습니다.`);

    const tickets = this.generateRandomLottoNum(NUM_TICKETS);
    tickets.forEach(ticket => {
      ticket.printNum();
    })
    const winning_number = await this.getWinningNum();
    const bonus_number = await this.getBonusNum(winning_number);
    
    const winning_stats = this.winningStats(winning_number, bonus_number, tickets);
    this.printWinningStats(winning_stats);
    this.calcProfitRate(MONEY, winning_stats);
  }
}

export default App;
