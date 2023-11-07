import { MissionUtils } from "@woowacourse/mission-utils";
import { isDuplicate, isNumberInRange, isSixLength, isValidAmount } from "./utils/vaildator.js";
import { inputAmount, inputBonnusNum, inputWinningNum } from "./view/Input.js";
import { printLottoCount, printLottoNum, printLottoResult, printRate } from "./view/Output.js";
import Lotto from "./Lotto.js";
import { generateLottoNum } from "./utils/generateRandomNum.js";

class App {
  async play() {
    const amount = await inputAmount();
    isValidAmount(amount);
    MissionUtils.Console.print('');

    const count = amount/1000;
    printLottoCount(count);

    const lottoNums = [];

    // 로또 번호 생성
    for(let i=0; i<count; i++){
      lottoNums.push(generateLottoNum());
    }

    const lottos = lottoNums.map(lotto => new Lotto(lotto));

    for(const lotto of lottos){
      printLottoNum(lotto.getNumbers());
    }
    MissionUtils.Console.print('');
 

    const winningNums = await inputWinningNum();
    isDuplicate(winningNums) || isNumberInRange(winningNums) || isSixLength(winningNums);
    MissionUtils.Console.print('');

    const bonusNum = await inputBonnusNum();
    winningNums.push(bonusNum);
    isDuplicate(winningNums);
    winningNums.pop();
    MissionUtils.Console.print('');

    let countReusult = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0
    };

    lottos.forEach((lotto) => {
      const { winningCnt, bonusHit } = lotto.comapareNumbers(winningNums, bonusNum);
      
      if(winningCnt > 2) {
        if(bonusHit) countReusult.bonus++;
        else countReusult[winningCnt]++;
      }
    })

    printLottoResult(countReusult);
    const rate = this.rateCalculator(countReusult, amount);
    printRate(rate);
  }

  rateCalculator(result, amount){
    let prize = 0;
    prize += result["3"] * 5000;
    prize += result["4"] * 50000;
    prize += result["5"] * 1500000;
    prize += result["bonus"] * 3000000;
    prize += result["6"] * 2000000000;

    return (prize / amount * 100).toFixed(1)
  }
}

export default App;

const app = new App();
app.play();