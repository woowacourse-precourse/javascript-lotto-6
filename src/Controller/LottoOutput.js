import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE_OUTPUT, PRIZE } from "../constants/Constant";

class LottoOutput {
  constructor() {
    this.lottoNumArr = [];
    this.matchThree = 0;
    this.matchFour = 0;
    this.matchFive = 0;
    this.matchBonus = 0;
    this.matchSix = 0;
    this.rate = 0;
  }

  lottoCnt(money) {
    let lottoCnt = money / 1000;
    Console.print(`${lottoCnt}개를 구매했습니다.`);
    this.printLottoNum(lottoCnt);
  }

  printLottoNum(userCnt) {
    for (let i = 0; i < userCnt; i++) {
      const lottoRandomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoRandomNum.sort((a, b) => a - b);

      Console.print(lottoRandomNum);
      this.lottoNumArr.push(lottoRandomNum);
    }
  }

  checkWinCnt(winningNum, bonusNum) {
    for (let i = 0; i < this.lottoNumArr.length; i++) {
      let winningCount = this.lottoNumArr[i].filter((x) =>
        winningNum.includes(x)
      ).length;

      let IS_BONUS = false;
      if (this.lottoNumArr[i].includes(bonusNum)) IS_BONUS = true;

      this.matchWinCnt(winningCount, IS_BONUS);
    }
  }

  matchWinCnt(winningCount, IS_BONUS) {
    switch (winningCount) {
      case 3:
        this.matchThree++;
        break;
      case 4:
        this.matchFour++;
        break;
      case 5:
        if (IS_BONUS) {
          this.matchBonus++;
          break;
        }
        this.matchFive++;
        break;
      case 6:
        this.matchSix++;
        break;
    }
  }

  printWinning(winningNum, bonusNum) {
    this.checkWinCnt(winningNum, bonusNum);

    Console.print(MESSAGE_OUTPUT().WINNING_OUTPUT);
    Console.print(MESSAGE_OUTPUT(this.matchThree).WINNING_THREE);
    Console.print(MESSAGE_OUTPUT(this.matchFour).WINNING_FOUR);
    Console.print(MESSAGE_OUTPUT(this.matchFive).WINNING_FIVE);
    Console.print(MESSAGE_OUTPUT(this.matchBonus).WINNING_BONUS);
    Console.print(MESSAGE_OUTPUT(this.matchSix).WINNING_SIX);
  }

  printRate(money) {
    let sums =
      this.matchThree * PRIZE.PRIZE_THREE +
      this.matchFour * PRIZE.PRIZE_FOUR +
      this.matchFive * PRIZE.PRIZE_FIVE +
      this.matchBonus * PRIZE.PRIZE_BONUS +
      this.matchSix * PRIZE.PRIZE_SIX;
    this.rate = ((sums / money) * 100).toFixed(1);

    Console.print(MESSAGE_OUTPUT(this.rate).RATE);
  }
}

export default LottoOutput;
