import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Game {
  #lottos = [];

  #winningNumbers = [];

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

  async getWinningNumbers() {
    try {
      const inputWinningNumbers =
        await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

      const winningNumbers = this.validateWinningNumbers(inputWinningNumbers);

      this.#winningNumbers = inputWinningNumbers
        .split(",")
        .map((num) => parseInt(num, 10));

      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  validateWinningNumbers(input) {
    // 입력 문자열을 콤마로 분리
    const numbers = input.split(",");

    // 콤마로 분리된 요소가 6개가 아니면 에러를 throw
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    // 콤마로 분리된 각 요소를 정수로 변환
    const parsedNumbers = numbers.map((num) => parseInt(num, 10));

    // 모든 요소가 숫자인지 확인
    if (parsedNumbers.some((num) => Number.isNaN(num))) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    }
    return parsedNumbers;
  }
}

export default Game;
