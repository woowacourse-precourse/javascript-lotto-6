import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  WINNING_MONEN_VALUE,
} from "./constants/constants";
import Lotto from "./Lotto";
import generateLottoNumbers from "./utils/generateLottoNumbers";

class System {
  saveLottoNumbers() {
    let lotto;
    while (true) {
      try {
        lotto = generateLottoNumbers();
        break;
      } catch (error) {
        console.error(error.message); // 중복이 있으면 예외 메시지를 출력
      }
    }

    return lotto;
  }

  async purchaseLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.saveLottoNumbers();
      lottos.push(lotto);
    }
    return lottos;
  }

  async getLotto() {
    let lotto;
    while (true) {
      const lottoNumbers = await this.#inputLottoNumbers();
      try {
        lotto = new Lotto(lottoNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return lotto;
  }

  async #inputLottoNumbers() {
    const userInput = await Console.readLineAsync(INPUT_MESSAGE.lottoNumber);
    const lottoNumbers = userInput.split(",").map(Number);

    return lottoNumbers;
  }

  async getBonusNumber(lotto) {
    let bonusNumber = 0;
    const lottoNumbersSet = new Set(lotto.getNumbers());
    while (true) {
      try {
        bonusNumber = await this.#fetchValidBonusNumber();
        this.#isDuplicateLottoNumber(bonusNumber, lottoNumbersSet);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  async #fetchValidBonusNumber() {
    const inputBonusNumber = await this.#getInputBonusNumber();
    const bonusNumber = Number(inputBonusNumber);
    this.#validateBonusNumber(bonusNumber);
    return bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (Object.is(bonusNumber, NaN)) {
      throw new Error(ERROR_MESSAGE.invalidMoneyError);
    }
  }

  async #getInputBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumber
    );
    return inputBonusNumber;
  }

  #isDuplicateLottoNumber(bonusNumber, lottoNumbersSet) {
    if (lottoNumbersSet.has(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplicateLottoNumber);
    }
  }

  getWinningCounts(lottos, winningNumbers, bonusNumber) {
    const winningCounts = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    this.#calculateLottoStats(
      lottos,
      winningNumbers,
      winningCounts,
      bonusNumber
    );
    return winningCounts;
  }

  #calculateLottoStats(lottos, winningNumbers, winningCounts, bonusNumber) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchedCount = lotto.getMatchedCount(winningNumbers);
      const lottoNumbersSet = new Set(lottoNumbers);
      const hasBonusNumber = lottoNumbersSet.has(bonusNumber);

      if (matchedCount === 6) winningCounts.first += 1;
      else if (matchedCount === 5 && hasBonusNumber) winningCounts.second += 1;
      else if (matchedCount === 5) winningCounts.third += 1;
      else if (matchedCount === 4) winningCounts.fourth += 1;
      else if (matchedCount === 3) winningCounts.fifth += 1;
    });
    return winningCounts;
  }

  calculateTotalWinningMoney(winningCounts) {
    let prize = 0;
    Object.entries(winningCounts).forEach(([key, value]) => {
      prize += value * WINNING_MONEN_VALUE[key];
    });

    return prize;
  }

  calculateProfitPercentage(money, prize) {
    const percentage = ((prize / money) * 100).toFixed(1);
    return percentage;
  }
}

export default System;
