import InputOutput from "./InputOutput";
import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
  winMessages = [
    "",
    "6개 일치 (2,000,000,000원) - ",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    "5개 일치 (1,500,000원) - ",
    "4개 일치 (50,000원) - ",
    "3개 일치 (5,000원) - ",
  ];

  winPrizes = [0, 2000000000, 30000000, 1500000, 50000, 5000, 0];

  async getInputLoop(inputFunction, param = []) {
    while (true) {
      try {
        const result = await inputFunction(...param);
        return result;
      } catch (error) {
        InputOutput.print(error.message);
      }
    }
  }

  calculateLottoCountFromMoney(money) {
    const lottoCount = money / 1000;
    InputOutput.print(`${lottoCount}개를 구매했습니다.`);
    return lottoCount;
  }

}

export default Game;
