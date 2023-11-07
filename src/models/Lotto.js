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
}

export default Lotto;
