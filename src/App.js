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

    for (let i = 0; i < lottoArr.length; i++) {
      const lottoNums = lottoArr[i];
      let isBonus = false;

      const winning = lottoNums.filter((ele) =>
        winningNum.includes(String(ele))
      );

      if (winning.length < 3) continue;
      if (winning.length === 5) isBonus = lottoNums.includes(Number(bonusNum));

      console.log(this.totalPrize(winning.length, isBonus));
    }

    // const a = lottoArr.map((ele) =>
    //   ele.filter((item) => winningNum.includes(String(item)))
    // );

    // const winningTickets = a.map((ele) => this.totalPrize(ele.length));
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

  totalPrize(count, isBonus = false) {
    if (isBonus) return 30000000;
    switch (count) {
      case 3:
        return 5000;
      case 4:
        return 50000;
      case 5:
        return 1500000;
      case 6:
        return 2000000000;
      default:
        return 0;
    }
  }

  async matchLottoNum() {}
}

export default App;
