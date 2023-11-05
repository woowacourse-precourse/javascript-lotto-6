import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_INPUT_MESSAGE,
  LOTTO_OUTPUT_MESSAGE,
  ERROR_MESSAGE,
} from "./constants.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputCost
    );

    if (purchaseCost % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.isInvaildUnit);
    }

    let lottoArr = await this.createLotto(purchaseCost);

    const enterWinnigNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputWinnigNum
    );

    const winningNum = enterWinnigNum.split(",");

    if (winningNum.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.isOnlySixNum}`);
    }

    const verifyNumber = /^[0-9]+$/;

    for (let i = 0; i < winningNum.length; i++) {
      if (verifyNumber.test(winningNum[i]) === false) {
        throw new Error(`${ERROR_MESSAGE.isNotwNumber}`);
      }
    }

    for (let i = 0; i < winningNum.length; i++) {
      if (winningNum[i] > 45 || winningNum[i] < 1) {
        throw new Error(`${ERROR_MESSAGE.isIncorrecRage}`);
      }
    }

    const bonusNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputBonusNum
    );

    console.log(winningNum, bonusNum, lottoArr);

    const a = lottoArr.map((ele) =>
      ele.filter((item) => winningNum.includes(String(item)))
    );

    const b = a.map((ele) => ele.length);

    console.log(b);
  }

  async matchLotto(winningNum, bonusNum, lottoArr) {
    // for(let i=0; i<lottoArr.length; i++){
    //   winningNum.filter()
    // }
  }

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

      const printLottNum = await MissionUtils.Console.print(lottoNum);

      const lotto = new Lotto(lottoNum);

      lottoArr.push(lottoNum);
    }

    return lottoArr;
  }

  async matchLottoNum() {}
}

export default App;
