import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import Bonus from "./Bonus";

class App {
  async play() {
    const lottoCount = await this.getMoneyReturnCount();
    console.log("lottoCount", lottoCount);
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    const userLotto = this.generateAndPrintLotto(lottoCount);
    const winningLotto = await this.getWinningLotto();
    const bonusLotto = await this.getBonusLotto(winningLotto);
    this.getResult(lottoCount, userLotto, winningLotto, bonusLotto);
  }

  getResult(lottoCount, userLotto, winningLotto, bonusLotto) {
    const resultArray = [];
    for(let i=0; i<lottoCount; i++) {
      const oneLotto = userLotto[i];
      const result = this.getResultInOneLotto(oneLotto, winningLotto, bonusLotto);
      resultArray.push(result);
    }
    const profit = this.getProfit(resultArray, lottoCount);
    this.printResult(resultArray, profit)
  }

  printResult(result, prof) {
    MissionUtils.Console.print(`당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result.filter(e=>e===5).length}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result.filter(e=>e===4).length}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result.filter(e=>e===3).length}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.filter(e=>e===2).length}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result.filter(e=>e===1).length}개`)
    MissionUtils.Console.print(`총 수익률은 ${prof}%입니다.`)
  }

  getResultInOneLotto(oneLotto, winningLotto, bonusLotto) {
    let count = 0;
    let isBonus = false;
    for(let i=0; i<6; i++) {
      const oneNum = oneLotto[i];
      if(winningLotto.includes(oneNum)) count++;
    }
    if(oneLotto.includes(bonusLotto)) isBonus = true;

    return this.getRank(count, isBonus)
  }

  getRank(winningCount, bonus) {
    if(winningCount===6) return 1;
    if(winningCount===5 && bonus) return 2;
    if(winningCount===5) return 3;
    if(winningCount===4) return 4;
    if(winningCount===3) return 5;
    else return 0;    
  }

  getProfit(result, count) {
    const sum = 0;
    result.forEach(rank=>{
      if(rank===1) sum+=2000000000;
      else if(rank===2) sum+=30000000;
      else if(rank===3) sum+=1500000;
      else if(rank===4) sum+=50000;
      else if(rank===5) sum+=5000;
    })
    const profit = (count*100 / sum) * 100;
    return profit.toFixed(1);
  }
  

  async getBonusLotto(winning) {
    const bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    try {
      const bonus = new Bonus(bonusNumber, winning);
      if(bonus) return bonus;
    } catch(error) {
      console.error(error.message);
      // this.getBonusLotto(winning);
    }
  }

  async getWinningLotto() {
    const winningNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    console.log("winningNumber", winningNumber)
    try {
      const winnigArray = winningNumber.split(",").map(Number);
      console.log("winnigArray", winnigArray)

      const lotto = new Lotto(winnigArray);
      if(lotto) return winnigArray;
    } catch(error) {
      console.error(error.message);
      // this.getWinningLotto();
    }
  }

  async getMoneyReturnCount() {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(money%1000 !== 0) throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    return Math.floor(money/1000);
  }

  generateAndPrintLotto(count) {
    const lottoArray = [];
    for(let i=0; i<count; i++) {
      const oneLotto = this.generateLotto();
      MissionUtils.Console.print(oneLotto);
      lottoArray.push(oneLotto);
    }
    console.log("lottoArray 모든", lottoArray)
    return lottoArray;
  }

  generateLotto() {
    const array = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    array.sort((a,b)=>a-b);
    return array
  }
  
}

export default App;
