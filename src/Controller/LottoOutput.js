import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE_OUTPUT } from "../constants/Constant";

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
    Console.print(MESSAGE_OUTPUT().WINNING_OUTPUT);
    Console.print(MESSAGE_OUTPUT(this.matchThree).WINNING_THREE);
    Console.print(MESSAGE_OUTPUT(this.matchFour).WINNING_FOUR);
    Console.print(MESSAGE_OUTPUT(this.matchFive).WINNING_FIVE);
    Console.print(MESSAGE_OUTPUT(this.matchBonus).WINNING_BONUS);
    Console.print(MESSAGE_OUTPUT(this.matchSix).WINNING_SIX);
  }

  printRate(money) {
    let sums =
      this.matchThree * 5000 +
      this.matchFour * 50000 +
      this.matchFive * 1500000 +
      this.matchBonus * 30000000 +
      this.matchSix * 2000000000;
    this.rate = ((sums / money) * 100).toFixed(1);

    Console.print(MESSAGE_OUTPUT(this.rate).RATE);
  }
}

export default LottoOutput;
