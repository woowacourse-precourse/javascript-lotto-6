import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Game {
  #lottos = [];

  constructor(lotteryNumbers) {
    this.createLotto(lotteryNumbers);
  }

  createLotto(lotteryNumbers) {
    Console.print(`\n${lotteryNumbers}개를 구매했습니다.`);
    this.#lottos = this.createLottoNumbers(lotteryNumbers);
  }

  createLottoNumbers(number) {
    const lottos = [];
    for (let i = 0; i < number; i += 1) {
      const numbers = this.getRandomNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
      Console.print(`[${numbers.join(", ")}]`);
    }
    Console.print("");

    return lottos;
  }

  getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  printLottoNumbers(lottoNumbers) {
    for (let i = 0; i < lottoNumbers.length; i += 1) {
      const lottoNumbersToString = `[${lottoNumbers[i].join(", ")}]`;
      Console.print(lottoNumbersToString);
    }
  }
}

export default Game;
