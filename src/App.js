import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const LOTTO_PRICE = 1000;
const PRIZES = {
  6: 2000000000,
  "5+1": 30000000,
  5: 1500000,
  4: 50000,
  3: 5000,
  꽝: 0,
};

class App {
  async play() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = parseInt(
          await Console.readLineAsync("구입금액을 입력해 주세요. \n"),
          10
        );
        if (!isValidAmount(purchaseAmount)) {
          throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottoCount = Math.floor(purchaseAmount / LOTTO_PRICE);
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = PickLottoNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        );
        if (!/^\d+(,\d+)*$/.test(winningNumbersInput)) {
          throw new Error(
            "[ERROR] 당첨 번호는 쉼표(,)로만 구분된 숫자여야 합니다."
          );
        }

        winningNumbers = winningNumbersInput
          .split(",")
          .map((number) => parseInt(number.trim(), 10));

        if (winningNumbers.some((num) => isNaN(num))) {
          throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
        }
        if (!isValidWinningNumbers(winningNumbers)) {
          throw new Error(
            "[ERROR] 당첨 번호는 1~45 범위의 숫자 6개여야 합니다."
          );
        }
        if (hasDuplicate(winningNumbers)) {
          throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        const bonusNumberInput = await Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
        );
        if (!/^\d+$/.test(bonusNumberInput)) {
          throw new Error(
            "[ERROR] 보너스 번호는 숫자 한 개만 입력해야 합니다."
          );
        }

        bonusNumber = parseInt(bonusNumberInput.trim(), 10);

        if (winningNumbers.includes(bonusNumber)) {
          throw new Error(
            "[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다."
          );
        }
        if (!isValidNumber(bonusNumber)) {
          throw new Error(
            "[ERROR] 보너스 번호는 1~45 범위의 숫자 1개여야 합니다."
          );
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const results = lottos.map((lotto) => {
      const numbers = lotto.getNumbers();
      const matchCount = numbers.filter((number) =>
        winningNumbers.includes(number)
      ).length;
      const bonusMatch = numbers.includes(bonusNumber);

      if (matchCount === 6) return "6";
      if (matchCount === 5 && bonusMatch) return "5+1";
      if (matchCount === 5) return "5";
      if (matchCount === 4) return "4";
      if (matchCount === 3) return "3";
      return "꽝";
    });

    const resultCounts = results.reduce((countByResult, result) => {
      countByResult[result] = (countByResult[result] || 0) + 1;
      return countByResult;
    }, {});

    const prizeMessages = [
      `3개 일치 (5,000원) - ${resultCounts["3"] || 0}개`,
      `4개 일치 (50,000원) - ${resultCounts["4"] || 0}개`,
      `5개 일치 (1,500,000원) - ${resultCounts["5"] || 0}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCounts["5+1"] || 0}개`,
      `6개 일치 (2,000,000,000원) - ${resultCounts["6"] || 0}개`,
    ];

    Console.print("\n당첨 통계\n---");
    prizeMessages.forEach((message) => Console.print(message));

    let totalPrizeMoney = 0;

    Object.keys(resultCounts).forEach((prize) => {
      if (PRIZES.hasOwnProperty(prize)) {
        totalPrizeMoney += PRIZES[prize] * resultCounts[prize];
      }
    });

    const investment = lottoCount * LOTTO_PRICE;
    const roi = ((totalPrizeMoney - investment) / investment) * 100;

    Console.print(`총 수익률은 ${roi.toFixed(2)}% 입니다.`);
  }
}

const PickLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

// 예외 처리를 위한 유효성 검사 함수들
// 1. 구입 금액이 1,000원 단위인지 검사
function isValidAmount(amount) {
  return amount % 1000 === 0;
}

// 2. 당첨 번호와 보너스 번호에 1~45 범위의 값을 입력했는지 검사
function isValidNumber(number) {
  return !isNaN(number) && number >= 1 && number <= 45;
}

// 3. 당첨 번호에 7개 이상의 숫자를 입력했는지 검사
function isValidWinningNumbers(numbers) {
  return numbers.length === 6 && numbers.every(isValidNumber);
}

// 4. 중복 입력 여부 검사
function hasDuplicate(numbers) {
  return new Set(numbers).size !== numbers.length;
}

export default App;
