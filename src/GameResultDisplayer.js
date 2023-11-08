import { Console } from "@woowacourse/mission-utils";

class GameResultDisplayer {
  #gameResult;

  constructor(gameResult) {
    this.#gameResult = gameResult;
  }

  show() {
    Console.print("실행결과\n---");
    Console.print(`3개 일치 (5,000원) - ${this.#gameResult.result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#gameResult.result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#gameResult.result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        this.#gameResult.result["5+1"]
      }개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.#gameResult.result[6]}개`
    );
    Console.print(`총 수익률은 ${this.#gameResult.profit.toFixed(1)}%입니다.`);
  }
}

export default GameResultDisplayer;
