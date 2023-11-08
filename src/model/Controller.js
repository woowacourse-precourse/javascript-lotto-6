import { Random, Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT } from '../lib/Prompt.js';
import { UNIT } from '../lib/constant.js';
import View from './View.js';
import Lotto from './Lotto.js';

class Controller {
  constructor() {
    this.View = new View();
    this.Lotto;

    this.bonus;
    this.money;
    this.buyNum;
    this.lottoArrays;
  }

  async inputPurchase() {
    while (true) {
      try {
        const MONEY = await this.View.input(INPUT.purchase);
        this.validatePay(MONEY);
        this.purchaseLotto(Number(MONEY));
        this.View.printPurchaseResult(this.buyNum, this.lottoArrays);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputWinNumber() {
    while (true) {
      try {
        const WIN_NUMS = await this.View.input(INPUT.win);
        this.setWinNumber(WIN_NUMS);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonus() {
    while (true) {
      try {
        const BONUS = await this.View.input(INPUT.bonus);
        this.setBonusNum(BONUS);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async run() {
    const LOT_RESULT = this.evaluate(this.lottoArrays, this.bonus);
    const LOT_CNT = this.Lotto.lotCount(LOT_RESULT);
    const RETURN_RATE = this.Lotto.calculateReturnRate(LOT_CNT, this.money);
    this.View.printLottoResult(LOT_CNT, RETURN_RATE);
  }

  purchaseLotto(money) {
    this.money = money;
    this.buyNum = money / UNIT;
    this.generateRandomLottoArrays();
  }

  validatePay(money) {
    if (String(money).includes('.')) throw new Error(ERROR.invalidValue);
    if (isNaN(money) || money <= 0) throw new Error(ERROR.invalidValue); // 가격 : 숫자 아님 호ㄱ은 0이하
    if (money % UNIT !== 0) throw new Error(ERROR.invalidUnit); // 가격 : UNIT 단위가 아님
  }

  generateRandomLottoArrays() {
    const singleRandomArray = () => Random.pickUniqueNumbersInRange(1, 45, 6);
    const UNSORTED = Array.from({ length: this.buyNum }, singleRandomArray);
    this.lottoArrays = UNSORTED.map(arr => arr.sort((a, b) => a - b));
  }

  setWinNumber(winNums) {
    this.validateDot(winNums);
    const mapToInt = winNums.split(',').map(item => Number(item));
    this.Lotto = new Lotto(mapToInt);
  }

  setBonusNum(bonus) {
    this.validateDot(bonus);
    this.validateBonus(this.Lotto.getWinNumber, Number(bonus));
    this.bonus = Number(bonus);
  }

  validateBonus(winNums, bonus) {
    if (winNums.includes(bonus)) throw new Error(ERROR.duplicate); // 보너스 : 중복 검사
    if (isNaN(bonus)) throw new Error(ERROR.invalidValue); // 보너스 : 값 타입 검사
    if (1 > bonus || 45 < bonus) throw new Error(ERROR.outOfRange); // 보너스 : 값 검사
  }

  validateDot(string) {
    if (String(string).includes('.')) throw new Error(ERROR.invalidValue);
  }

  evaluate(users, bonus) {
    return users.map(item => this.Lotto.lot(item, bonus));
  }
}

export default Controller;
