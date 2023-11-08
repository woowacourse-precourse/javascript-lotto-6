import Consumer from "./Consumer.js";
import User from "./User.js";
import Lotto from "./Lotto.js";
import Provider from "./Provider.js";
import LottoMachine from "./LottoMachine.js";
import { Console } from "@woowacourse/mission-utils";
import { evalRateTable } from "./constants/index.js";

export default class Computer {
  user;
  consumer;
  provider;
  lotto;

  constructor() {
    this.user = User.createUser();
  }

  static createComputer() {
    return new this();
  }

  #initConsumerProvider(purchaseAmount) {
    this.consumer = Consumer.createConsumer(purchaseAmount);
    this.provider = Provider.createProvider();
  }

  async #initLottoMachine(correctNumbers, bonusNumber) {
    this.lottoMachine = LottoMachine.createLottoMachine(correctNumbers, bonusNumber);
  }

  async simulateLotto() {
    try {
      const purchaseAmount = await this.user.promptPurchaseAmount();
      this.#initConsumerProvider(purchaseAmount);
      this.#buyLottos(purchaseAmount);
      this.user.printLottosCount(this.consumer.lottos);
      this.user.printLottos(this.consumer.lottos);
      const correctNumbers = await this.user.promptCorrectNumber();
      const bonusNumber = await this.user.promptBounusNumber();
      this.#initLottoMachine(correctNumbers, bonusNumber);
      this.#evalLottos(purchaseAmount);
    } catch (error) {
      Console.print(`[ERROR]: ${error.message}`);
    }
  }

  #buyLottos(purchaseAmount) {
    const lottosCount = this.provider.countLottos(purchaseAmount);
    this.consumer.consumeLottos(
      Array(lottosCount).fill(null).map(() => {
        return Lotto.createLotto(this.provider.provideLotto()).getNumbers();
      })
    );
  }

  #evalLottos(purchaseAmount) {
    const lottoCase = Array(evalRateTable.length).fill(0);
    this.consumer.lottos.forEach(lotto => {
      const { correctCnt, bonus } = this.#countLottoAnswer(lotto, this.lottoMachine.getCorrectNumbers(), this.lottoMachine.getBonusNumber());
      if (correctCnt === 6) {
        lottoCase[4] += 1;
        return;
      }
      if (correctCnt === 5 && bonus === true) {
        lottoCase[3] += 1;
        return;
      }
      if (correctCnt === 5) {
        lottoCase[2] += 1;
        return;
      }
      if (correctCnt === 4) {
        lottoCase[1] += 1;
        return;
      }
      if (correctCnt === 3) {
        lottoCase[0] += 1;
        return;
      }
    })
    this.user.printEvalResult(lottoCase, this.#calRateOfReturn(lottoCase, purchaseAmount));
  }

  #countLottoAnswer(lotto, correctNumber, bonusNumber) {
    let correctCnt = 0;
    let bonus = false;
    lotto.forEach(number => {
      if (bonusNumber === number)
        bonus = true;
      if (correctNumber.includes(number))
        correctCnt += 1;
    })
    return { correctCnt, bonus };
  }

  #calRateOfReturn(lottoCase, purchaseAmount) {
    let sum = 0;
    lottoCase.forEach((type, index) => {
      sum += type * evalRateTable[index];
    });
    return (sum / purchaseAmount * 100).toFixed(2).replace(/\.?0+$/, '');
  }
}
