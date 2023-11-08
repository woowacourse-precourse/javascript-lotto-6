import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PICK, MIN_PURCHASE_AMOUNT, WIN_PRIZE } from "./constant.js";

class Computer {
  printPurchaseCount(purchaseAmount){
    this.purchaseCount = Math.floor(purchaseAmount / MIN_PURCHASE_AMOUNT);
  
    Console.print(String(this.purchaseCount).concat("개를 구매했습니다."));
  }

  makeLottoList(){
    let currentPurchaseCount = 0;
    let lottoList = [];
    
    while (currentPurchaseCount < this.purchaseCount) {
      lottoList.push(Computer.buyLotto());
      currentPurchaseCount += 1;
    }
    
    return lottoList;
  }

  static buyLotto(){
    return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  makeResultArray(lottoList, winNumbers, bonusNumber){
    let resultArray = [];
    lottoList.forEach((lotto) => {
      resultArray.push(lotto.checkWin(winNumbers, bonusNumber));
    });
    return resultArray;
  }

  printFinalResult(lottoList, winNumbers, bonusNumber, purchaseAmount){
    const resultArray = this.makeResultArray(lottoList, winNumbers, bonusNumber);
    const total_result = this.distinctGrade(resultArray)
    Console.print("당첨 통계\n---");
    Console.print(`${LOTTO_PICK.DRAW_UNITS - 3}개 일치 (${WIN_PRIZE.fifth.toLocaleString()}원) - ${total_result.fifth}개`);
    Console.print(`${LOTTO_PICK.DRAW_UNITS - 2}개 일치 (${WIN_PRIZE.fourth.toLocaleString()}원) - ${total_result.fourth}개`);
    Console.print(`${LOTTO_PICK.DRAW_UNITS - 1}개 일치 (${WIN_PRIZE.third.toLocaleString()}원) - 0개 - ${total_result.third}개`);
    Console.print(`${LOTTO_PICK.DRAW_UNITS - 1}개 일치, 보너스 볼 일치 (${WIN_PRIZE.second.toLocaleString()}원) - ${total_result.second}개`);
    Console.print(`${LOTTO_PICK.DRAW_UNITS}개 일치 (${WIN_PRIZE.first.toLocaleString()}원) - ${total_result.first}개`);
    Console.print(`총 수익률은 ${this.calculateEarningRate(purchaseAmount, total_result)}%입니다.`)
  }
  
  distinctGrade(resultArray){
    let total_result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    resultArray.forEach((result) => {
      this.gradingLotto(result, total_result);
    })
    
    return total_result;
  }

  gradingLotto(result, total_result){
    if (result.main === LOTTO_PICK.DRAW_UNITS) total_result.first += 1;
    if (result.main === LOTTO_PICK.DRAW_UNITS - 1 && result.bonus) total_result.second += 1;
    if (result.main === LOTTO_PICK.DRAW_UNITS - 1 && !result.bonus) total_result.third += 1;
    if (result.main === LOTTO_PICK.DRAW_UNITS - 2) total_result.fourth += 1;
    if (result.main === LOTTO_PICK.DRAW_UNITS - 3) total_result.fifth += 1;
  }

  calculateEarningRate(purchaseAmount, total_result){
    let total_prize_money = 0;
    Object.keys(total_result).forEach((grade) => {
      total_prize_money += total_result[grade] * WIN_PRIZE[grade];
    });
    return (Math.round(total_prize_money / purchaseAmount * 100 * 100) / 100).toLocaleString();
  }
}

export default Computer;