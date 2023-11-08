import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import Bonus from "./Bonus";

class App {
  async play() {
    const lottoCount = await this.getMoneyReturnCount();
    console.log("lottoCount", lottoCount);
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    const userLotto = this.generateAndPrintLotto();
    const winningLotto = this.getWinningLotto();
    const bonusLotto = this.getBonusLotto(winningLotto);
    this.getResult(lottoCount, userLotto, winningLotto, bonusLotto);
  }

  getResult(lottoCount, userLotto, winningLotto, bonusLotto) {
    const resultArray = [];
    for(let i=0; i<lottoCount; i++) {
      const oneLotto = userLotto[i];
      const result = this.getResultInOneLotto(oneLotto, winningLotto, bonusLotto);
      resultArray.push(result);
    }
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

  getProfit() {

  }
  

  async getBonusLotto(winning) {
    const bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonus = new Bonus(bonusNumber, winning);
    if(bonus) return bonus;
  }

  async getWinningLotto() {
    const winningNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winnigArray = winningNumber.split(",").map(Number);
    try {
      const lotto = new Lotto(winnigArray);
      if(lotto) return winnigArray;
    } catch(error) {
      console.error(error.message);
      this.getWinningLotto();
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
    return lottoArray;
  }

  generateLotto() {
    const array = [];
    for(let i=0; i<6; i++) {
      const num = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      array.push(num);
    }
    array.sort((a,b)=>a-b);
    return array
  }
  
}

export default App;
