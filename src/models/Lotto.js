import { GameSetting, Print } from "../constants/constant.js";
import { OutputView } from "../views/OutputView.js";

class Lotto {
  constructor() {
    this.matchThree = 0;
    this.matchFour = 0;
    this.matchFive = 0;
    this.matchFiveBonus = 0;
    this.matchSix = 0;
    this.totalPrize = 0;
  }

  matchLottoNumbers(user_Number, lottery_Number, bonus_Number) {
    const MATCH_COUNT = user_Number.filter((number) => lottery_Number.includes(number)).length;
    const IS_BONUS_MATCH = user_Number.includes(bonus_Number);

    switch (MATCH_COUNT) {
      case 3:
        this.matchThree++;
        break;
      case 4:
        this.matchFour++;
        break;
      case 5:
        if (IS_BONUS_MATCH) {
          this.matchFiveBonus++;
          break;
        }
        this.matchFive++;
        break;
      case 6:
        this.matchSix++;
        break;
    }
  }

  printTotalPrize(TIKET) {
    OutputView.print(Print.end_Game);
    this.processPrize(this.matchThree, GameSetting.prize_5st, Print.prize_5st);
    this.processPrize(this.matchFour, GameSetting.prize_4nd, Print.prize_4nd);
    this.processPrize(this.matchFive, GameSetting.prize_3rd, Print.prize_3rd);
    this.processPrize(this.matchFiveBonus, GameSetting.prize_2th, Print.prize_2th);
    this.processPrize(this.matchSix, GameSetting.prize_1th, Print.prize_1th);
    OutputView.print(Print.totalPrizeFirst + this.profitRate(TIKET) + Print.totalPrizeEnd);
  }

  processPrize(matchCount, prizeValue, printState) {
    this.totalPrize += matchCount * prizeValue;
    OutputView.print(printState + matchCount + GameSetting.countOfMatches);
  }

  profitRate(TIKET) {
    if (this.totalPrize) {
      return ((this.totalPrize / (TIKET * GameSetting.lotto_Price)) * 100).toFixed(1);
    }
    return this.totalPrize;
  }
}

export default Lotto;
