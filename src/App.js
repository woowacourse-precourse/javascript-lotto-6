import { Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';
import Output from './Output.js';

const CURRENCY_UNIT = 1000;
const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;

class App {
  purchaseCount;
  myLottoList;
  winningResult;

  constructor() {
    this.purchaseCount = 0;
    this.myLottoList = [];
    this.winningResult = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
    };
    this.input = new Input();
    this.output = new Output();
  }

  async play() {
    await this.start();

    this.output.printMyLottoList(this.purchaseCount, this.myLottoList);

    const inputWinningLotto = await this.input.askLotteryNumbers();
    const winningLotto = new WinningLotto(inputWinningLotto);

    const inputBonusLotto = await this.input.askLotteryBonusNumber();
    winningLotto.validateBonusLotto(inputBonusLotto);

    const winningLottoNumbers = winningLotto.getWinningLotto();

    this.myLottoList.forEach((myLotto) => {
      const count = myLotto.getWinningCount(winningLottoNumbers);
      myLotto.checkWinningResult(
        count,
        Number(inputBonusLotto),
        this.winningResult
      );
    });

    this.output.printWinningResult(this.winningResult);

    const lottoROI = this.getLottoROI(this.purchaseCount, this.winningResult);
    this.output.printLottoROI(lottoROI);
  }

  async start() {
    const inputPurchaseAmount = await this.input.askPurchaseAmount();
    const parsedPurchaseAmount = Number(inputPurchaseAmount);

    this.validateAskPurchaseAmount(parsedPurchaseAmount);

    this.createMyLottoList(parsedPurchaseAmount);
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
    this.purchaseCount = parsedPurchaseAmount / CURRENCY_UNIT;

    let count = 0;
    while (count < this.purchaseCount) {
      const lottoNumbers = this.createLottoNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);

      this.myLottoList.push(lotto);

      count += 1;
    }
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottoROI(purchaseAmount, winningResult) {
    const { first, second, third, fourth, fifth } = winningResult;

    const prize =
      first.length * FIRST_PRIZE +
      second.length * SECOND_PRIZE +
      third.length * THIRD_PRIZE +
      fourth.length * FOURTH_PRIZE +
      fifth.length * FIFTH_PRIZE;

    const lottoROI = Math.round(prize / purchaseAmount) / 10;

    return lottoROI;
  }
}

export default App;
