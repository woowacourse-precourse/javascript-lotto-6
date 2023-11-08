import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE_OUTPUT } from "../constants/Constant";

class LottoOutput {
  constructor() {
    this.lottoNumArr = [];
  }

  lottoCnt(money) {
    Console.print(`${money / 1000}개를 구매했습니다.`);
    this.printLottoNum(Number(money / 1000));
  }

  printLottoNum(userCnt) {
    for (let i = 0; i < userCnt; i++) {
      const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(lottoNum);
      this.lottoNumArr.push(lottoNum);
    }
  }

  printWinning(winningNum, bonusNum) {
    let [matchThree, matchFour, matchFive, matchBonus, matchSix] = 0;

    for (let i = 0; i < this.lottoNumArr.length; i++) {
      let winningCount = this.lottoNumArr[i].filter((x) =>
        winningNum.includes(x)
      ).length;

      let IS_BONUS = false;
      if (this.lottoNumArr[i].includes(bonusNum)) {
        IS_BONUS = true;
      }

      switch (winningCount) {
        case 3:
          matchThree++;
          break;
        case 4:
          matchFour++;
          break;
        case 5:
          if (IS_BONUS) {
            matchBonus++;
            break;
          }
          matchFive++;
          break;
        case 6:
          matchSix++;
          break;
      }
    }

    Console.print(MESSAGE_OUTPUT.WINNING_OUTPUT);
    Console.print(MESSAGE_OUTPUT.WINNING_THREE(matchThree));
    Console.print(MESSAGE_OUTPUT.WINNING_FOUR(matchFour));
    Console.print(MESSAGE_OUTPUT.WINNING_FIVE(matchFive));
    Console.print(MESSAGE_OUTPUT.WINNING_BONUS(matchBonus));
    Console.print(MESSAGE_OUTPUT.WINNING_SIX(matchSix));
  }
}

export default LottoOutput;
