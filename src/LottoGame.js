import { Random } from "@woowacourse/mission-utils";
import IO from "./IO.js";
import Validation from "./Validation.js";
import Lotto from "./Lotto.js";
import { ERROR_MSG, NORMAR_MSG, WINNING_MONEY, WINNING_RESULT } from "./constants.js";

class LottoGame {
  #lottos;
  #winnings;
  #bonus;

  constructor() {
    this.#lottos = [];
    this.#winnings = [];
    this.#bonus = 0;
  }

  async start() {
    let flag = false;
    
    let amountStr = '';
    let amount = 0;
    do {
      try {
        amountStr = await IO.receiveUserInput(NORMAR_MSG.AMOUNT_INPUT);
        Validation.isNumber(amountStr, ERROR_MSG.AMOUNT_FORMAT_ERROR);
        amount = Number(amountStr);
        Validation.isDivisible(amount);
        
        flag = true;
      } catch(e) {
        IO.printMsg(e.message);
      }
    } while(!flag);


    const lottoNum = this.calculateLottomNum(amount);
    IO.printMsg(`\n${lottoNum}개를 구매했습니다.`);

    for(let i = 0; i < lottoNum; i++){
      const tempLotto = new Lotto(this.pickLottoNums());
      this.#lottos.push(tempLotto);
      IO.printMsg(tempLotto.formatNumbers());
    }

    flag = false;
    let winningStr = '';
    let winningArr = [];

    do {
      try {
        winningStr = await IO.receiveUserInput(NORMAR_MSG.WINNING_INPUT);
        winningArr = winningStr.split(',');
        Validation.isValidLen(winningArr);
        Validation.isDuplicate(winningArr);
        winningArr.forEach(el => Validation.isNumber(el, ERROR_MSG.WINNING_FORMAT_ERROR));
        winningArr.forEach(el => Validation.isValidLottoNum(el));

        flag = true;
      } catch(e) {
        IO.printMsg(e.message);
      }
    } while(!flag);

    
    this.#winnings = winningArr.map(el => {return Number(el)});

    flag = false;
    let bonusStr = '';
    do {
      try {
        bonusStr = await IO.receiveUserInput(NORMAR_MSG.BONUS_INPUT);
        Validation.isNumber(bonusStr, ERROR_MSG.BONUS_FORMAT_ERROR);
        
        this.#bonus = Number(bonusStr);
        Validation.isValidLottoNum(this.#bonus);
        Validation.isBonusInWinning(this.#winnings, this.#bonus);

        flag = true;
      } catch(e) {
        IO.printMsg(e.message);
      }
    } while(!flag);

    const resultObj = this.checkMatching();

    IO.printMsg(WINNING_RESULT.RESULT_MSG);
    IO.printMsg(`${WINNING_RESULT.THREE_HIT} - ${resultObj.threeMatches}개`);
    IO.printMsg(`${WINNING_RESULT.FOUR_HIT} - ${resultObj.fourMatches}개`);
    IO.printMsg(`${WINNING_RESULT.FIVE_HIT} - ${resultObj.fiveMatches}개`);
    IO.printMsg(`${WINNING_RESULT.FIVE_HIT_AND_BONUS} - ${resultObj.fiveMatchesAndBonus}개`);
    IO.printMsg(`${WINNING_RESULT.SIX_HIT} - ${resultObj.sixMatches}개`);

    const profitRate = this.calculateProfitRate(amount, resultObj);
    IO.printMsg(`총 수익률은 ${profitRate}%입니다.`);
  }

  calculateLottomNum(amount) {
    return amount / 1000;
  }

  pickLottoNums() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  countWinningNum(targetArr) {
    let cnt = 0;
    this.#winnings.forEach(el => {
      if(targetArr.includes(el)) cnt += 1;
    })
    return cnt;
  }

  hasBonusNumber(targetArr) {
    if(targetArr.includes(this.#bonus)) return true;
    return false;
  }

  checkMatching() {
    let resObj = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveMatchesAndBonus: 0,
      sixMatches: 0
    }

    this.#lottos.forEach(el => {
      resObj = this.updateResObj(resObj, el.get_numbers);
    });

    return resObj;
  }

  updateResObj(resObj, arr) {
    switch(this.countWinningNum(arr)) {
      case 3:
        resObj.threeMatches += 1;
        break;
      case 4:
        resObj.fourMatches += 1;
        break;
      case 5:
        if (this.hasBonusNumber(arr)) resObj.fiveMatchesAndBonus += 1;
        else resObj.fiveMatches += 1;
        break;
      case 6:
        resObj.sixMatches += 1;
        break;
      default:
        break;
    };

    return resObj;
  }

  calculateProfitRate(amount, resObj) {
    let total = 0;
    total += resObj.threeMatches * WINNING_MONEY.THREE_HIT_MONEY;
    total += resObj.fourMatches * WINNING_MONEY.FOUR_HIT_MONEY;
    total += resObj.fiveMatches * WINNING_MONEY.FIVE_HIT_MONEY;
    total += resObj.fiveMatchesAndBonus * WINNING_MONEY.FIVE_HIT_AND_BONUS_MONEY;
    total += resObj.sixMatches * WINNING_MONEY.SIX_HIT_MONEY;
    
    return ((total / amount) * 100).toFixed(1);
  }
}

export default LottoGame;