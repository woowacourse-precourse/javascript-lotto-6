import { Random } from '@woowacourse/mission-utils';
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
    const MONEY = await this.View.input(INPUT.purchase);
    this.purchaseLotto(Number(MONEY));
    this.View.printPurchaseResult(this.buyNum, this.lottoArrays);
  }

  async inputWinNumber() {
    const WIN_NUMS = (await this.View.input(INPUT.win)).trim();
    this.setWinNumber(WIN_NUMS);
  }

  async inputBonus() {
    const BONUS = await this.View.input(INPUT.bonus);
    this.setBonusNum(Number(BONUS));
  }

  async run() {
    const LOT_RESULT = this.evaluate(this.lottoArrays, this.bonus);
    const LOT_CNT = this.Lotto.lotCount(LOT_RESULT);
    const RETURN_RATE = this.Lotto.calculateReturnRate(LOT_CNT, this.money);
    this.View.printLottoResult(LOT_CNT, RETURN_RATE);
  }

  purchaseLotto(money) {
    this.validatePay(money);
    this.money = money;
    this.buyNum = money / UNIT;
    this.generateRandomLottoArrays();
  }

  validatePay(money) {
    if (isNaN(money)) throw new Error(ERROR.invalidValue); // 가격 : 숫자 아님
    if (money % UNIT !== 0) throw new Error(ERROR.invalidUnit); // 가격 : UNIT 단위가 아님
    if (money <= 0) throw new Error(ERROR.invalidValue); // 가격 : 0이하
  }

  generateRandomLottoArrays() {
    const singleRandomArray = () => Random.pickUniqueNumbersInRange(1, 45, 6);
    const UNSORTED = Array.from({ length: this.buyNum }, singleRandomArray);
    this.lottoArrays = UNSORTED.map(arr => arr.sort((a, b) => a - b));
  }

  setWinNumber(winNums) {
    const mapToInt = winNums.split(',').map(item => Number(item));
    this.Lotto = new Lotto(mapToInt);
  }

  setBonusNum(bonus) {
    this.validateBonus(this.Lotto.getWinNumber, bonus);
    this.bonus = bonus;
  }

  validateBonus(winNums, bonus) {
    if (winNums.includes(bonus)) throw new Error(ERROR.duplicate); // 보너스 : 중복 검사
    if (isNaN(bonus)) throw new Error(ERROR.invalidValue); // 보너스 : 값 타입 검사
    if (1 > bonus || 45 < bonus) throw new Error(ERROR.outOfRange); // 보너스 : 값 검사
  }

  evaluate(users, bonus) {
    return users.map(item => this.Lotto.lot(item, bonus));
  }
}

export default Controller;
