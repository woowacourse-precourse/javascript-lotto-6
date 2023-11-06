import Lotto from "./Lotto.js";
import { model } from "./Model.js";
import { MissionUtils, Random } from "@woowacourse/mission-utils";

const LOTTO_PRICE = 1000;

export class Counter {
  #money;

  constructor(money) {
    this.#inputMoneyValidater(money);
    this.#inputMoneyDivideValidater(money);
    this.#money = money;
    this.counts = money/LOTTO_PRICE
    this.list = [];
    this.#publish(this.counts);
    //model.lottoNumbers = this.list;
    //console.log(this.list);
  }

  #inputMoneyValidater(money) {
    if (/^[+]?[1-9]\d*$/.test(money)) {
      return Number(money);
    } 
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #inputMoneyDivideValidater(money) {
    let price = LOTTO_PRICE;
    if (money%price !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력 가능합니다.");
    }
  }

  lottoCounter() {
    let price = LOTTO_PRICE;
    const lottocounts = this.#money/price;
    model.totalMoney = lottocounts * price;
    return lottocounts
  }

  lottoCountPrinter(counts) {
    this.count = counts
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${counts}개를 구매했습니다.`);
  }

  #publish(counts) {
    for (let num = 0; num < counts; num++) {
      const newLotto = this.createNewLotto();
      this.list.push(newLotto);
      //model.lottoNumbers.push(newLotto)
    }
    //model.lottoNumbers = this.list;
  }

  createNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(newNumbers);
  }

  lottosPrinter() {
    this.list.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
}