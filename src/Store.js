import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import * as MoneyConstants from "./constants/MoneyConstants";
import * as MessageConstants from "./constants/MessageConstants.js";
import * as LottoConstants from "./constants/LottoConstant.js";

class Store {
  #money;
  #lottoList;

  constructor() {
    this.#money = 0;
    this.#lottoList = [];
  }

  static #moneyValidate(money) {
    if (isNaN(money)) {
      throw new Error(MessageConstants.NOT_MONEY_ERROR_MESSAGE);
    }
    if (money % MoneyConstants.LOTTO_MONEY_UNIT !== 0) {
      throw new Error(MessageConstants.UNIT_ERROR_MESSAGE);
    }
  }

  static async inputMoney() {
    try {
      const money = await Console.readLineAsync(
        MessageConstants.MONEY_INPUT_MESSAGE
      );
      Store.#moneyValidate(money);
      return money;
    } catch (error) {
      throw error;
    }
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
    const lottoAmount = this.#money / MoneyConstants.LOTTO_MONEY_UNIT;
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
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        LottoConstants.LOWER_LIMIT,
        LottoConstants.UPPER_LIMIT,
        LottoConstants.NUMBER_COUNT
      );
      this.#lottoList.push(new Lotto(lottoNumbers.sort((a, b) => a - b)));
    }
    this.#printLottoList();
  }

  #numberValidate(number, winningNumbersMap) {
    if (isNaN(number)) {
      throw new Error(MessageConstants.NOT_NUMBER_ERROR_MESSAGE);
    }
    if (
      number < LottoConstants.LOWER_LIMIT ||
      number > LottoConstants.UPPER_LIMIT
    ) {
      throw new Error(MessageConstants.OUT_OF_RANGE_ERROR_MESSAGE);
    }
    if (winningNumbersMap.has(number)) {
      throw new Error(MessageConstants.DUPLICATE_NUMBER_ERROR_MESSAGE);
    }
    winningNumbersMap.set(number, true);
  }

  #winningNumbersValidate(winningNumbers, winningNumbersMap) {
    winningNumbersMap.clear();
    if (winningNumbers.length !== LottoConstants.NUMBER_COUNT) {
      throw new Error(MessageConstants.INVALID_NUM_COUNT_ERROR_MESSAGE);
    }
    for (const number of winningNumbers) {
      this.#numberValidate(number, winningNumbersMap);
      winningNumbersMap.set(number, true);
    }
  }

  #bonusNumberValidate(bonusNumber, winningNumbersMap) {
    if (isNaN(bonusNumber)) {
      throw new Error(MessageConstants.NOT_NUMBER_ERROR_MESSAGE);
    }
    if (
      bonusNumber < LottoConstants.LOWER_LIMIT ||
      bonusNumber > LottoConstants.UPPER_LIMIT
    ) {
      throw new Error(MessageConstants.OUT_OF_RANGE_ERROR_MESSAGE);
    }
    if (winningNumbersMap.has(bonusNumber)) {
      throw new Error(MessageConstants.DUPLICATE_BONUS_ERROR_MESSAGE);
    }
  }

  async inputWinningNumbers(winningNumbersMap) {
    while (true) {
      try {
        const winningNumbersInput = await Console.readLineAsync(
          MessageConstants.NUMBER_INPUT_MESSAGE
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
          MessageConstants.BONUS_INPUT_MESSAGE
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
      [1, MessageConstants.FIRST_RANK_MESSAGE],
      [2, MessageConstants.SECOND_RANK_MESSAGE],
      [3, MessageConstants.THIRD_RANK_MESSAGE],
      [4, MessageConstants.FOURTH_RANK_MESSAGE],
      [5, MessageConstants.FIFTH_RANK_MESSAGE],
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
      [1, MoneyConstants.FIRST_PRIZE],
      [2, MoneyConstants.SECOND_PRIZE],
      [3, MoneyConstants.THIRD_PRIZE],
      [4, MoneyConstants.FOURTH_PRIZE],
      [5, MoneyConstants.FIFTH_PRIZE],
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

  printLottoResult(rankCountMap) {
    const profitRate = this.calculateProfitRate(rankCountMap);
    Console.print(MessageConstants.RESULT_PRINT_MESSAGE);
    Console.print(Store.generateWinningMessage(rankCountMap));
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Store;
