import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Lotto from './Lotto.js';

const CURRENCY_UNIT = 1000;
const input = new Input();

class App {
  purchaseAmount;
  myLottoList;

  constructor() {
    this.purchaseAmount = 0;
    this.myLottoList = [];
  }

  async play() {
    const inputPurchaseAmount = await input.askPurchaseAmount();
    const parsedpurchaseAmount = parseInt(inputPurchaseAmount, 10);

    this.validateAskPurchaseAmount(parsedpurchaseAmount);

    this.createMyLottoList(parsedpurchaseAmount);
    this.printMyLottoList();

    const lotteryNumbers = await input.askLotteryNumbers();
    const lotto = new Lotto(lotteryNumbers);
  }

  validateAskPurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount) || purchaseAmount === 0) {
      throw new Error('[ERROR] 입력된 값을 확인해주세요.');
    }

    if (purchaseAmount % CURRENCY_UNIT) {
      throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    }
  }

  createMyLottoList(parsedPurchaseAmount) {
    this.purchaseAmount = parsedPurchaseAmount / CURRENCY_UNIT;

    let count = 0;
    while (count < this.purchaseAmount) {
      this.myLottoList.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );

      count += 1;
    }

    return this.myLottoList;
  }

  printMyLottoList() {
    Console.print(`${this.purchaseAmount}개를 구매했습니다.`);

    this.myLottoList.forEach((lotto) => Console.print(lotto));
  }
}

export default App;
