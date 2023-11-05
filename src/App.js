import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_INPUT_MESSAGE,
  LOTTO_OUTPUT_MESSAGE,
  ERROR_MESSAGE,
} from "./constants.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    //----------------- LOTTO CLASS
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputCost
    );

    if (purchaseCost % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.isInvaildUnit);
    }
    //-----------------

    let lottoArr = await this.createLotto(purchaseCost);

    //-----------------
    const enterWinnigNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputWinnigNum
    );

    const winningNum = enterWinnigNum.split(",");

    if (winningNum.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.isOnlySixNum}`);
    }
    //-----------------

    const verifyNumber = /^[0-9]+$/;

    //-----------------
    for (let i = 0; i < winningNum.length; i++) {
      if (verifyNumber.test(winningNum[i]) === false) {
        throw new Error(`${ERROR_MESSAGE.isNotNumber}`);
      }
    }

    for (let i = 0; i < winningNum.length; i++) {
      if (winningNum[i] > 45 || winningNum[i] < 1) {
        throw new Error(`${ERROR_MESSAGE.isIncorrecRage}`);
      }
    }

    //-----------------
    const bonusNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputBonusNum
    );

    let totalWinPrize = 0;
    const winningObj = {
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    };

    for (let i = 0; i < lottoArr.length; i++) {
      const lottoNums = lottoArr[i];
      let isBonus = false;

      const winning = lottoNums.filter((ele) =>
        winningNum.includes(String(ele))
      );

      if (winning.length < 3) continue;
      if (winning.length === 5) isBonus = lottoNums.includes(Number(bonusNum));

      const winningPrize = this.getPrize(winning.length, isBonus);
      totalWinPrize += winningPrize;

      winningObj[winningPrize]++;
    }

    MissionUtils.Console.print(LOTTO_OUTPUT_MESSAGE.winningStatistics);
    for (const key in winningObj) {
      MissionUtils.Console.print(
        `${LOTTO_OUTPUT_MESSAGE.matches(key)}${winningObj[key]}개`
      );
    }
    let rateOfReturn = ((totalWinPrize / purchaseCost) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  //----------------- LOTTO
  async createLotto(purchaseCost) {
    const numOfLotto = purchaseCost / 1000;
    const tellNumOfLotto = await MissionUtils.Console.print(
      `${numOfLotto}${LOTTO_OUTPUT_MESSAGE.numOfLotto}`
    );
    const lottoArr = [];

    for (let i = 0; i < numOfLotto; i++) {
      let lottoNum = await MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );

      const printLottNum = await MissionUtils.Console.print(
        `[${lottoNum.join(", ")}]`
      );

      const lotto = new Lotto(lottoNum);

      lottoArr.push(lottoNum);
    }

    return lottoArr;
  }
  //----------------- LOTTO

  getPrize(count, isBonus = false) {
    if (isBonus) return 30000000;
    if (count === 3) return 5000;
    if (count === 4) return 50000;
    if (count === 5) return 1500000;
    if (count === 6) return 200000000;
    return 0;
  }

  async matchLottoNum() {}
}

export default App;
