import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const LOTTO_LENGTH = 6;

class App {
  async play() {
    const userMoney = await this.playUserRequest("구입금액을 입력해 주세요.\n");

    const lottos = this.createLottos(userMoney);
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => MissionUtils.Console.print("[" + lotto.getNumbers().join(", ") + "]"));
    MissionUtils.Console.print("");

    const winningNumbers = await this.playUserRequest(
      "당첨 번호를 입력해 주세요.\n"
    );
    const bonusNumbers = await this.playUserRequest(
      "보너스 번호를 입력해 주세요.\n",
      winningNumbers
    );
    const results = this.winningLotto(lottos, winningNumbers, bonusNumbers);
    const profitRate = this.calculateProfit(userMoney, results);
    const profit = this.formatProfit(profitRate);
    this.printConsoleUI(results, profit);
  }

  async playUserRequest(prompt, winningNumbers) {
    switch (prompt) {
      case "구입금액을 입력해 주세요.\n":
        return await this.getUserMoney(prompt);
      case "당첨 번호를 입력해 주세요.\n":
        return await this.getWinningNumber(prompt);
      case "보너스 번호를 입력해 주세요.\n":
        return await this.getBonusNumber(prompt, winningNumbers);
      default:
        throw new Error("[ERROR]");
    }
  }

  async getUserInput(msg) {
    return await MissionUtils.Console.readLineAsync(msg);
  }

  async getValidatedInput(promptMsg, validateFn, winningNumbers) {
    let firstAttempt = true;

    while (true) {
      try {
        const userInput = await this.getUserInput(
          firstAttempt ? promptMsg : ""
        );
        firstAttempt = false;

        return validateFn(userInput, winningNumbers);
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }
  }

  async getUserMoney(promptMsg) {
    return await this.getValidatedInput(promptMsg, this.checkMoneyValidate);
  }

  async getWinningNumber(promptMsg) {
    return await this.getValidatedInput(
      promptMsg,
      this.checkLottoNumberValidate
    );
  }

  async getBonusNumber(promptMsg, winningNumbers) {
    return await this.getValidatedInput(
      promptMsg,
      this.checkBonusNumberValidate,
      winningNumbers
    );
  }

  checkMoneyValidate(userInput) {
    let userMoney = parseInt(userInput, 10);

    if (isNaN(userMoney) || userMoney % 1000 !== 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return userMoney;
  }

  checkLottoNumberValidate(userInput) {
    const errorMessage =
      "[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 6자리 숫자여야 합니다.";
    let numbers = userInput.split(",").map((number) => {
      let num = parseInt(number, 10);
      if (isNaN(num) || num <= 0 || num > 45) {
        throw new Error(errorMessage);
      }

      return num;
    });

    if (new Set(numbers).size !== LOTTO_LENGTH) {
      throw new Error(errorMessage);
    }

    return numbers;
  }

  checkBonusNumberValidate(userInput, winningNumbers) {
    const bonusNumber = parseInt(userInput, 10);

    if (
      isNaN(bonusNumber) ||
      bonusNumber <= 0 ||
      bonusNumber > 45 ||
      winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 당첨 번호와 중복되지 않은 숫자여야 합니다."
      );
    }

    return bonusNumber;
  }

  createLottos(money) {
    let count = money / 1000;
    let lottos = [];

    while (count > 0) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      let lotto = new Lotto(numbers.sort((a, b) => a - b));
      lottos.push(lotto);
      count -= 1;
    }
    return lottos;
  }

  winningLotto(lottos, winningNumbers, bonusNumber) {
    let results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((number) =>
        winningNumbers.includes(number)
      ).length;
      const isBonusMatched = lotto.getNumbers().includes(bonusNumber);

      switch (matchCount) {
        case 6:
          results.first += 1;
          break;
        case 5:
          results[isBonusMatched ? "second" : "third"] += 1;
          break;
        case 4:
          results.fourth += 1;
          break;
        case 3:
          results.fifth += 1;
          break;
      }
    });

    return results;
  }

  calculateProfit(userMoney, results) {
    const prizeMoney = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };
  
    let totalPrize = 0;
    for (const rank in results) {
      totalPrize += results[rank] * prizeMoney[rank];
    }
  
    let profitRate = (totalPrize/ userMoney) * 100;
    
    return profitRate;
  };

  formatProfit(profitRate) {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(profitRate / 100);
  };

  printConsoleUI(results, profit) {
    MissionUtils.Console.print("\n당첨통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);
    MissionUtils.Console.print(`총 수익률은 ${profit}입니다.`);
  }
}

export default App;
