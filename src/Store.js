import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Store {
  #money;
  #lottoList;

  constructor() {
    this.#money = 0;
    this.#lottoList = [];
  }

  static async inputMoney() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    // 예외 처리
    if (isNaN(money)) {
      throw new Error("[ERROR] 1,000원 단위의 숫자를 입력해주세요.");
    }
    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 올바르지 않은 금액입니다. 1,000원 단위로 입력해주세요."
      );
    }
    return money;
  }

  async receivePayment() {
    let isMoneyPaid = false;
    while (!isMoneyPaid) {
      try {
        this.#money = await Store.inputMoney();
        isMoneyPaid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  calculateLottoAmount() {
    const lottoAmount = this.#money / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    return lottoAmount;
  }

  #printLottoList() {
    for (const lotto of this.#lottoList) {
      lotto.printNumbers();
    }
  }

  issueLotto() {
    const lottoAmount = this.calculateLottoAmount();
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoList.push(new Lotto(lottoNumbers.sort((a, b) => a - b)));
    }
    this.#printLottoList();
  }

  #winningNumbersValidate(winningNumbers, winningNumbersMap) {
    winningNumbersMap.clear();
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 숫자는 6개여야 합니다.");
    }
    for (const number of winningNumbers) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해주세요.");
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      if (winningNumbersMap.has(number)) {
        throw new Error("[ERROR] 중복 번호 없이 입력해주세요.");
      }
      winningNumbersMap.set(number, true);
    }
  }

  #bonusNumberValidate(bonusNumber, winningNumbersMap) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해주세요.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbersMap.has(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호과 중복되지 않는 번호를 입력해주세요.");
    }
  }

  async inputWinningNumbers(winningNumbersMap) {
    while (true) {
      try {
        const winningNumbersInput = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const winningNumbers = Array.from(winningNumbersInput.split(",")).map(
          Number
        );
        this.#winningNumbersValidate(winningNumbers, winningNumbersMap);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonusNumber(winningNumbersMap) {
    while (true) {
      try {
        const bonusNumberInput = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );
        const bonusNumber = Number(bonusNumberInput);
        this.#bonusNumberValidate(bonusNumber, winningNumbersMap);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static calculateRank(compareResult) {
    if (compareResult.sameNumberCount === 6) {
      return 1;
    }
    if (compareResult.sameNumberCount === 5) {
      if (compareResult.bonusIsSame === true) {
        return 2;
      }
      return 3;
    }
    if (compareResult.sameNumberCount === 4) {
      return 4;
    }
    if (compareResult.sameNumberCount === 3) {
      return 5;
    }
  }

  calculateRankStatistics(winningNumbers, bonusNumber) {
    const rankCountMap = new Map();
    for (let rank = 1; rank < 6; rank++) {
      rankCountMap.set(rank, 0);
    }
    for (const lotto of this.#lottoList) {
      const compareResult = lotto.compareNumbers(winningNumbers, bonusNumber);
      const rank = Store.calculateRank(compareResult);
      if (!isNaN(rank)) {
        let rankCount = rankCountMap.get(rank) + 1;
        rankCountMap.set(rank, rankCount);
      }
    }
    return rankCountMap;
  }

  static generateWinningMessage(rankCountMap) {
    let winningMessage = "";
    const messageByRank = new Map([
      [1, "6개 일치 (2,000,000,000원)"],
      [2, "5개 일치, 보너스 볼 일치 (30,000,000원)"],
      [3, "5개 일치 (1,500,000원)"],
      [4, "4개 일치 (50,000원)"],
      [5, "3개 일치 (5,000원)"],
    ]);

    for (let rank = 5; rank > 0; rank--) {
      winningMessage += `${messageByRank.get(rank)} - ${rankCountMap.get(
        rank
      )}개\n`;
    }
    return winningMessage;
  }

  static #caculateProfit(rankCountMap) {
    let lottoProfit = 0;
    const profitByRank = new Map([
      [1, 2000000000],
      [2, 30000000],
      [3, 1500000],
      [4, 50000],
      [5, 5000],
    ]);
    for (let rank = 5; rank > 0; rank--) {
      const rankCount = rankCountMap.get(rank);
      lottoProfit += profitByRank.get(rank) * rankCount;
    }
    return lottoProfit;
  }

  calculateProfitRate(rankCountMap) {
    let profitRate;
    const lottoProfit = Store.#caculateProfit(rankCountMap);
    profitRate = (lottoProfit / this.#money) * 100;
    return profitRate;
  }
}

export default Store;
