import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';
import Output from './Output.js';
import PurchaseAmount from './PurchaseAmount.js';

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
  winningLotto;

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
    const inputPurchaseAmount = await this.start();
    const purchaseAmount = inputPurchaseAmount.getPurchaseAmount();

    this.myLottoList = this.createMyLottoList(purchaseAmount);

    this.output.printMyLottoList(this.purchaseCount, this.myLottoList);

    this.winningLotto = await this.inputLottoNumber();

    const inputBonusLotto = await this.askLotteryBonusNumber(this.winningLotto);

    const winningLottoNumbers = this.winningLotto.getWinningLotto();

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
    let inputPurchaseAmount;
    while (true) {
      try {
        inputPurchaseAmount = await this.input.askPurchaseAmount();
        return new PurchaseAmount(inputPurchaseAmount);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputLottoNumber() {
    let inputLottoNumber;
    while (true) {
      try {
        inputLottoNumber = await this.input.askLotteryNumbers();
        return new WinningLotto(inputLottoNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async askLotteryBonusNumber() {
    let inputBonusLotto;
    try {
      inputBonusLotto = await this.input.askLotteryBonusNumber();
      this.winningLotto.validateBonusLotto(inputBonusLotto);
      return inputBonusLotto;
    } catch (error) {
      Console.print(error.message);

      await this.askLotteryBonusNumber();
    }
  }

  createMyLottoList(parsedPurchaseAmount) {
    this.purchaseCount = parsedPurchaseAmount / CURRENCY_UNIT;
    const myLottoList = [];

    let count = 0;
    while (count < this.purchaseCount) {
      const lottoNumbers = this.createLottoNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);

      myLottoList.push(lotto);

      count += 1;
    }
    return myLottoList;
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
