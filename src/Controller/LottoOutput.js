import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE_OUTPUT } from "../constant/Constant";

class LottoOutput {
  lottoCnt(money) {
    Console.print(`${money / 1000}개를 구매했습니다.`);
    this.printLottoNum(Number(money / 1000));
  }

  printLottoNum(userCnt) {
    const lottoNumArr = [];
    for (let i = 0; i < userCnt; i++) {
      const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(lottoNum);
      lottoNumArr.push(lottoNum);
    }
  }

  printWinning() {
    let [matchThree, matchFour, matchFive, matchBonus, matchSix] = 0;

    Console.print(MESSAGE_OUTPUT.WINNING_OUTPUT);
    Console.print(MESSAGE_OUTPUT.WINNING_THREE(matchThree));
    Console.print(MESSAGE_OUTPUT.WINNING_FOUR(matchFour));
    Console.print(MESSAGE_OUTPUT.WINNING_FIVE(matchFive));
    Console.print(MESSAGE_OUTPUT.WINNING_BONUS(matchBonus));
    Console.print(MESSAGE_OUTPUT.WINNING_SIX(matchSix));
  }
}

export default LottoOutput;
