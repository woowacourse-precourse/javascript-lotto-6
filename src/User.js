import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/index.js";

export default class User {
  constructor() {

  }

  static createUser() {
    return new this();
  }

  async promptPurchaseAmount() {
    return await Console.readLineAsync(GAME_MESSAGE.purchaseAmount);
  }

  printLottosCount(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach(lotto => {
      let temp = '[';
      lotto.forEach((number, idx) => {
        temp += (idx !== lotto.length - 1 ? number + ', ' : number);
      })
      temp += ']';
      Console.print(temp);
    })
  }

  async promptCorrectNumber() {
    return await Console.readLineAsync(GAME_MESSAGE.correctNumbers);
  }

  async promptBounusNumber() {
    return await Console.readLineAsync(GAME_MESSAGE.bounusNumber);
  }

  printEvalResult(lottoCase, rate) {
    Console.print(GAME_MESSAGE.evalResult.start);
    Console.print(GAME_MESSAGE.evalResult.correctNum.three + ' - ' + lottoCase[0] + '개');
    Console.print(GAME_MESSAGE.evalResult.correctNum.four + ' - ' + lottoCase[1] + '개');
    Console.print(GAME_MESSAGE.evalResult.correctNum.five + ' - ' + lottoCase[2] + '개');
    Console.print(GAME_MESSAGE.evalResult.correctNum.fiveWithBonus + ' - ' + lottoCase[3] + '개');
    Console.print(GAME_MESSAGE.evalResult.correctNum.six + ' - ' + lottoCase[4] + '개');
    Console.print(GAME_MESSAGE.evalResult.result + rate + '%입니다.');
  }
}
