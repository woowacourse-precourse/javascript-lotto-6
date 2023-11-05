import { Console, Random } from '@woowacourse/mission-utils';

class Controller {
  constructor(view = View) {
    this.view = new view();
    this.lotto;
    this.money;
    this.buyNum;
    this.lottoArrays;
  }
  async buyLotto() {
    const money = await this.view.inputPay();
    this.validatePay(money);
    this.generateRandomArrays();
    this.view.printBuy(this.buyNum, this.lottoArrays);
  }
  run() {
    this.buyLotto();
  }
  validatePay(money) {
    if (isNaN(money)) throw new Error('[Error]');
    if ((money * 1) % 1000 !== 0) throw new Error('[Error]');
    this.money = money;
    this.buyNum = money / 1000;
  }
  generateRandomArrays() {
    const generateArr = () => Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lottoArrays = Array.from({ length: this.buyNum }, generateArr);
  }
  validateBonus() {}
}

export default Controller;

class View {
  async inputPay() {
    const input = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
    return input;
  }

  async inputWinNumbers() {}

  async inputBonusNumber() {}

  printBuy(num, lottoArr) {
    Console.print(`\n${num}개를 구매했습니다.`);
    lottoArr.forEach(lotto => Console.print(lotto));
  }

  printResult(resultArr, money) {
    Console.print('당첨 통계');
    Console.print('---');
  }
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.length);
    const tempSet = new Set(numbers);
    if (tempSet.size !== numbers.legnth) throw new Error(ERROR.duplicate);
  }

  // TODO: 추가 기능 구현
  get winNumber() {
    return this.#numbers;
  }
}
