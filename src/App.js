import { Console, Random } from "@woowacourse/mission-utils";
import {INPUT, OUTPUT, OUTPUT_ERROR} from "./text.js";
import Lotto from "./Lotto.js";
import {validate} from "@babel/core/lib/config/validation/options.js";
class App {
  constructor() {
    this.purchase = 0;
    this.lotto = [];
    this.winning_num = [];
    this.bonus = 0;
    this.result = {
      3: 0,
      4: 0,
      5: 0,
      '5b': 0,
      6: 0
    }
  }
  async play() {
    await this.inputPurchaseAmount();
    this.printLottoCnt();
    const PURCHASE_LOTTO = await this.generateLottos();
    await this.inputWinningNum();
    await this.inputBonusNum();
    await this.calculateResult();
    await this.printResult();
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (isNaN(Number(MONEY))) {
      throw new Error('[ERROR] 숫자를 입력하세요');
    }
    if (+MONEY % 1000 !== 0) {
      throw new Error(OUTPUT_ERROR.money_err);
    }
    if(MONEY === ''){
      throw new Error("[ERROR] 값이 입력되지 않았습니다.");
    }
    this.purchase=MONEY/1000;

  }
  printLottoCnt() {
    Console.print(`${this.purchase}${OUTPUT.lottos_cnt}`);
  }
  async generateLottos() {
    let lottoList = [];
    for (let i =0; i < this.purchase; i++) {
      const LOTTO_NUMS = Random.pickUniqueNumbersInRange(1,45,6).sort((x,y) => {
        return x - y;
      });
      Console.print(`[${LOTTO_NUMS.join(', ')}]`);
      lottoList.push(LOTTO_NUMS);
    }
    this.lotto = lottoList;

  }
  async inputWinningNum() {
    const USER_INPUT = (await Console.readLineAsync(`\n${INPUT.input_winning}\n`)).split(',');
    const LOTTO = new Lotto(USER_INPUT);
    this.winning_num = USER_INPUT;
  }
  async inputBonusNum() {
    const USER_INPUT = await Console.readLineAsync(`\n${INPUT.input_bonus}\n`);
    if (this.validBonus(USER_INPUT)) {
      this.bonus = USER_INPUT;
    }
  }
  validBonus(bonus) {
    if (this.winning_num.includes(bonus)) {
      throw new Error(OUTPUT_ERROR.bonus_err);
    }
    else {
      return true;
    }
  }
  async calculateResult() {
    this.lotto.forEach(ballSet => {
      const winNum = ballSet.filter(ball => this.winning_num.includes(ball)).length;
      const bonusNum = ballSet.includes(this.bonus) ? 1 : 0;

      switch (true) {
        case winNum === 6 && bonusNum === 0:
          this.result[3]++;
          break;
        case winNum === 5 && bonusNum === 1:
          this.result[4]++;
          break;
        case winNum === 5:
          this.result[5]++;
          break;
        case winNum === 4:
          this.result['5b']++;
          break;
        case winNum === 3:
          this.result[6]++;
          break;
      }
    });
  }

  async printResult() {
    const TOTAL_PROFIT = this.result[3] * 5000 +
      this.result[4] * 50000 + this.result[5] * 1500000 +
      this.result['5b'] * 30000000 + this.result[6] * 2000000000;
    const TOTAL_INVEST = this.purchase*1000;
    const profitFormatted = ((TOTAL_PROFIT - TOTAL_INVEST) / TOTAL_INVEST) * 100;
    Console.print(OUTPUT.winner_status);
    Console.print(`${OUTPUT.three_correct}${this.result[3] + '개'}`);
    Console.print(`${OUTPUT.four_correct}${this.result[4] + '개'}`);
    Console.print(`${OUTPUT.five_correct}${this.result[5] + '개'}`);
    Console.print(`${OUTPUT.five_bonus_correct}${this.result['5b'] + '개'}`);
    Console.print(`${OUTPUT.six_correct}${this.result[6] + '개'}`);
    Console.print(`총 수익률은 ${profitFormatted.toFixed(2)}%입니다.`);
  }
}

export default App;
