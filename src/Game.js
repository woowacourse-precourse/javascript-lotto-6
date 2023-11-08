import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Game {
  #lottos = [];

  #winningNumbers = [];

  #bonusNumber;

  #bonusCount = 0;

  #matchingNumbers = [];

  #outcome = 0;

  constructor(lotteryNumbers) {
    this.createLotto(lotteryNumbers);
  }

  getOutcome() {
    return this.#outcome;
  }

  calcWinningStatistics() {
    Console.print("\n당첨 통계\n---");
    const matchingNumbers = this.#matchingNumbers;

    const statistics = {
      3: { prize: "5,000원", count: 0, reward: 5000 },
      4: { prize: "50,000원", count: 0, reward: 50000 },
      5: { prize: "1,500,000원", count: 0, reward: 1500000 },
      5.1: { prize: "30,000,000원", count: 0, reward: 30000000 },
      6: { prize: "2,000,000,000원", count: 0, reward: 2000000000 },
    };

    matchingNumbers.forEach((count) => {
      if (count in statistics) {
        statistics[count].count += 1;
        this.#outcome += statistics[count].reward;
      }
    });

    const keys = Object.keys(statistics).sort(
      (a, b) => parseFloat(a) - parseFloat(b),
    );
    for (const key of keys) {
      const stat = statistics[key];
      let message = `${key}개 일치 (${stat.prize}) - ${stat.count}개`;

      if (key === "5.1") {
        message = `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
          this.#bonusCount
        }개`;
        this.#outcome += this.#bonusCount * 30000000;
      }
      Console.print(message);
    }
  }

  countMatchingNumbers() {
    const matchingCounts = this.#lottos.map((lotto) => {
      const lottoNumbers = lotto.getLottoNumbers();

      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumbers.includes(number),
      );

      if (
        matchedNumbers.length === 4 &&
        lottoNumbers.includes(this.#bonusNumber)
      ) {
        this.#bonusCount += 1;
      }

      return matchedNumbers.length;
    });
    this.#matchingNumbers = matchingCounts;
    return matchingCounts;
  }

  createLotto(lotteryNumbers) {
    Console.print(`\n${lotteryNumbers}개를 구매했습니다.`);
    this.#lottos = this.createLottoNumbers(lotteryNumbers);
  }

  createLottoNumbers(number) {
    const lottos = [];
    for (let i = 0; i < number; i += 1) {
      const numbers = this.getRandomNumbers();
      numbers.sort((a, b) => a - b);
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

  async getBonusNumber() {
    try {
      const inputBonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );

      const parsedNumber = parseInt(inputBonusNumber, 10);

      if (Number.isNaN(parsedNumber)) {
        throw new Error("[ERROR] 보너스 번호는 숫자입니다.");
      }
      this.#bonusNumber = parsedNumber;
      return parsedNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }
}

export default Game;
