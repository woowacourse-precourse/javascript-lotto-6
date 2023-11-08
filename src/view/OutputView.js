import { Console } from "@woowacourse/mission-utils";
import { PRIZE_STRING } from "../constants/Constants";

class OutputView {
  printPurchaseAmount(input) {
    Console.print(`${input}개를 구매했습니다.`);
  }

  printLottoResult(arr) {
    for (const value of arr) {
      Console.print(`[${value.join(', ')}]`);
    }
  }

  printWinningMessage() {
    Console.print("당첨 통계\n---");
  }

  printWinningResult(result) {
    for (const key of ["3", "4", "5", "bonus", "6"]) {
      if (key !== "bonus") {
        this.#printWithoutBonus(key, result[key]);
      } else {
        this.#printWithBonus(key, result[key]);
      }
    }
  }

  printWinningProfit(result) {
    Console.print(`총 수익률은 ${result}%입니다.`);
  }

  #printWithoutBonus(key, value) {
    Console.print(`${key}개 일치 (${PRIZE_STRING[key]}) - ${value}개`);
  }

  #printWithBonus(key, value) {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개`);
  }
}

export default OutputView;
