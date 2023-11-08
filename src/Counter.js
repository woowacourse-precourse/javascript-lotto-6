import Lotto from "./Lotto.js";
import { model } from "./Model.js";
import { MissionUtils, Random } from "@woowacourse/mission-utils";
import { errorComments } from "./Comment.js";

const LOTTO_PRICE = 1000;

export class Counter {
  #money;

  constructor(money) {
    this.#inputMoneyValidater(money);
    this.#inputMoneyDivideValidater(money);

    this.#money = money;
    model.totalMoney = money;

    this.counts = money/LOTTO_PRICE
    model.counts = this.counts;

    this.list = [];
    this.#publish(this.counts);
  }

  #inputMoneyValidater(money) {
    if (/^[+]?[1-9]\d*$/.test(money)) {
      return Number(money);
    } 
    throw new Error(errorComments.counter[0]);
  }

  #inputMoneyDivideValidater(money) {
    let price = LOTTO_PRICE;
    if (money%price !== 0) {
      throw new Error(errorComments.counter[1]);
    }
  }

  lottoCountPrinter() {
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${this.counts}개를 구매했습니다.`);
  }

  #publish(counts) {
    model.lottoNumbers = [];
    
    for (let num = 0; num < counts; num++) {
      const newLotto = this.#createNewLotto();
      this.list.push(newLotto);
    }
  }

  #createNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(newNumbers);
  }

  lottosPrinter() {
    this.list.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
}