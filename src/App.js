import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Lotto from './Lotto.js';

const CURRENCY_UNIT = 1000;
const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;
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
    const parsedPurchaseAmount = parseInt(inputPurchaseAmount, 10);

    this.validateAskPurchaseAmount(parsedPurchaseAmount);

    this.createMyLottoList(parsedPurchaseAmount);
    this.printMyLottoList();

    const lotteryNumbers = await input.askLotteryNumbers();
    const lotto = new Lotto(lotteryNumbers);

    const bonusNumber = await input.askLotteryBonusNumber();
    const parsedBonusNumber = Number(bonusNumber);
    lotto.validateBonusNumber(parsedBonusNumber);

    const winningResult = lotto.getWinningList(
      this.myLottoList,
      parsedBonusNumber
    );

    this.printWinningResult(winningResult);

    const lottoROI = this.getLottoROI(parsedPurchaseAmount, winningResult);
    this.printLottoROI(lottoROI);
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

  printWinningResult({ first, second, third, fourth, fifth }) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(
      `3개 일치 (${FIFTH_PRIZE.toLocaleString()}원) - ${fifth.length}개`
    );
    Console.print(
      `4개 일치 (${FOURTH_PRIZE.toLocaleString()}원) - ${fourth.length}개`
    );
    Console.print(
      `5개 일치 (${THIRD_PRIZE.toLocaleString()}원) - ${third.length}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${SECOND_PRIZE.toLocaleString()}원) - ${
        second.length
      }개`
    );
    Console.print(
      `6개 일치 (${FIRST_PRIZE.toLocaleString()}원) - ${first.length}개`
    );
  }

  getLottoROI(purchaseAmount, winningResult) {
    const { first, second, third, fourth, fifth } = winningResult;

    const prize =
      first.length * FIRST_PRIZE +
      second.length * SECOND_PRIZE +
      third.length * THIRD_PRIZE +
      fourth.length * FOURTH_PRIZE +
      fifth.length * FIFTH_PRIZE;

    const lottoROI = Math.round((prize / purchaseAmount) * 1000) / 10;

    return lottoROI;
  }

  printLottoROI(lottoROI) {
    Console.print(`총 수익률은 ${lottoROI}%입니다.`);
  }
}

export default App;
