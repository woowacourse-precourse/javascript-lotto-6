import { MissionUtils } from "@woowacourse/mission-utils";
import { isDuplicate, isNumberInRange, isSixLength, isValidAmount } from "./utils/vaildator.js";
import { inputAmount, inputBonnusNum, inputWinningNum } from "./view/Input.js";
import { printLottoCount, printLottoNum, printLottoResult, printRate } from "./view/Output.js";
import Lotto from "./Lotto.js";
import { generateLottoNum } from "./utils/generateRandomNum.js";
import { PRIZES } from "./constants/constants.js";

class App {
  async play() {

    // 1. 로또 구입 금액 입력
    const amount = await inputAmount();

    try { isValidAmount(amount) }
    catch(err){ MissionUtils.Console.print(err.message); return;}

    const count = this.getLottoCnt(amount);
    const lottos = this.getLottoNums(count);
    const winningNums = await this.getWinningNums();
    const bonusNum = await this.getBonusNum(winningNums);
    const countResult = this.judgmentOfWinning(lottos, winningNums, bonusNum);
    printLottoResult(countResult); // 6. 당첨 내역 출력
    this.rateCalculator(countResult, amount);
  }

  // 2. 로또 수량 계산 및 출력
  getLottoCnt(amount){
    const count = amount/1000;
    printLottoCount(count);

    return count;
  }

  // 3. 로또 번호 생성 및 출력
  getLottoNums(count){
    const lottoNums = [];
    for(let i=0; i<count; i++){
      lottoNums.push(generateLottoNum());
    }

    const lottos = lottoNums.map(lotto => new Lotto(lotto));
    for(const lotto of lottos){
      printLottoNum(lotto.getNumbers());
    }
    return lottos;
  }

  // 4-1. 당첨 번호 입력 받기
  async getWinningNums(){
    const winningNums = await inputWinningNum();
    // 중복 체크
    try { isDuplicate(winningNums) || isNumberInRange(winningNums) || isSixLength(winningNums) }
    catch(err){ MissionUtils.Console.print(err.message); return; }
    
    return winningNums;
  }

  // 4-2. 보너스 번호 입력 받기
  async getBonusNum(winningNums){
    const bonusNum = await inputBonnusNum();
    // 중복 체크
    winningNums.push(bonusNum);
    try { isDuplicate(winningNums); }
    catch(err){ MissionUtils.Console.print(err.message); return; }
    winningNums.pop();

    return bonusNum;
  }

  // 5. 로또 번호 & 당첨 번호 비교 및 판단
  judgmentOfWinning(lottos, winningNums, bonusNum){
    let countReusult = {
      3: 0, 4: 0, 5: 0, bonus: 0, 6: 0,
    };

    lottos.forEach((lotto) => {
      const { winningCnt, bonusHit } = lotto.comapareNumbers(winningNums, bonusNum);
      if(winningCnt > 2) {
        if(bonusHit) countReusult.bonus++;
        else countReusult[winningCnt]++;
      }
    })
    return countReusult;
  }

  // 7. 수익률 계산 및 출력
  rateCalculator(result, amount){
    let prize = 0;
    prize += result["3"] * PRIZES[3];
    prize += result["4"] * PRIZES[4];
    prize += result["5"] * PRIZES[5];
    prize += result["bonus"] * PRIZES["bonus"];
    prize += result["6"] * PRIZES[6];
    
    const rate = (prize / amount * 100).toFixed(1)
    printRate(rate);
  }
}

export default App;