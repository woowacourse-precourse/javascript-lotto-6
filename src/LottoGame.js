import { Random } from "@woowacourse/mission-utils";
import IO from "./IO.js";
import Validation from "./Validation.js";
import Lotto from "./Lotto.js";

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
    const amountStr = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
    Validation.isNumber(amountStr, '[ERROR] 구입 금액은 0으로 시작하지 않는 숫자 형식입니다.');

    const amount = Number(amountStr);
    Validation.isDivisible(amount);

    const lottoNum = this.calculateLottomNum(amount);
    IO.printMsg(`\n${lottoNum}개를 구매했습니다.`);

    for(let i = 0; i < lottoNum; i++){
      const tempLotto = new Lotto(this.pickLottoNums());
      this.#lottos.push(tempLotto);
      IO.printMsg(tempLotto.formatNumbers());
    }

    const winningStr = await IO.receiveUserInput('\n당첨 번호를 입력해 주세요.\n');
    const winningArr = winningStr.split(',');
    Validation.isValidLen(winningArr);
    Validation.isDuplicate(winningArr);
    winningArr.forEach(el => Validation.isNumber(el, '[ERROR] 당첨 번호는 \,으로 구분되는 6개의 숫자 형식입니다.'));
    winningArr.forEach(el => Validation.isValidLottoNum(el));
    this.#winnings = winningArr.map(el => {return Number(el)});

    const bonusStr = await IO.receiveUserInput('\n보너스 번호를 입력해 주세요.\n');
    Validation.isNumber(bonusStr, '[ERROR] 보너스 번호는 하나의 숫자 형식입니다.');
    
    this.#bonus = Number(bonusStr);
    Validation.isValidLottoNum(this.#bonus);
    Validation.isBonusInWinning(this.#winnings, this.#bonus);

    const resultObj = this.checkMatching();

    IO.printMsg('\n당첨 통계\n---');
    IO.printMsg(`3개 일치 (5,000원) - ${resultObj.threeMatches}개`);
    IO.printMsg(`4개 일치 (50,000원) - ${resultObj.fourMatches}개`);
    IO.printMsg(`5개 일치 (1,500,000원) - ${resultObj.fiveMatches}개`);
    IO.printMsg(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultObj.fiveMatchesAndBonus}개`);
    IO.printMsg(`6개 일치 (2,000,000,000원) - ${resultObj.sixMatches}개`);
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
}

export default LottoGame;