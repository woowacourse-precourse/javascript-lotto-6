import { GAME_PRIZE, CORRECT_MESSAGE } from "./constant.js";
import LottoMain from "./LottoMain.js";

class IsResult {
  constructor(userLotto,winningNumber,bonusNumber, money) {
    this.userLotto = userLotto;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.userCost = money;
  }

  lottoResult(result, prize) {
    this.lottoMain = new LottoMain();
    this.lottoMain.resultView(result, prize, this.userCost);
  }

  winningResult() {
    const result = {
      1: {match: CORRECT_MESSAGE.FIFTH, price: GAME_PRIZE[5], count: 0},
      2: {match: CORRECT_MESSAGE.FOURTH, price: GAME_PRIZE[4], count: 0},
      3: {match: CORRECT_MESSAGE.THIRD, price: GAME_PRIZE[3], count: 0},
      4: {match: CORRECT_MESSAGE.SECOND, price: GAME_PRIZE[2], count: 0},
      5: {match: CORRECT_MESSAGE.FIRST, price: GAME_PRIZE[1], count: 0},
    }
    this.prizeProcess(result)
  }

  prizeProcess(result) {
    let count = 0
    this.userLotto.forEach((userLotto) => {
      userLotto.forEach((lotto) => {
        if(this.winningNumber.includes(lotto)) count++;
      })
      if(count == 3) result[1].count++;
      if(count == 4) result[2].count++;
      if(count == 5) userLotto.includes(this.bonusNumber) ? result[4].count++ : result[3].count++;
      if(count == 6) result[5].count++;
      count = 0;
    })
    this.prizeCalculate(result)
  }

  prizeCalculate(result) {
    let prize = 0;
    for(let i = 1; i < 6; i++) prize += GAME_PRIZE[i] * result[6 - i].count
    this.lottoResult(result, prize);
  }
}

export default IsResult;