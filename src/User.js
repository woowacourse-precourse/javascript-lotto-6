import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/index.js";

export default class User {
  static createUser() {
    return new this();
  }

  async promptPurchaseAmount() {
    return await Console.readLineAsync(GAME_MESSAGE.purchaseAmount);
  }

  printLottosCount(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    let result = '';
    lottos.forEach(lotto => {
      result += `[${lotto.join(', ')}]\n`;
    })
    Console.print(result);
  }

  async promptCorrectNumber() {
    return await Console.readLineAsync(GAME_MESSAGE.correctNumbers);
  }

  async promptBounusNumber() {
    return await Console.readLineAsync(GAME_MESSAGE.bounusNumber);
  }
}
