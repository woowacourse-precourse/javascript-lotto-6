import { Console, Random } from "@woowacourse/mission-utils";
import { BUY_LOTTO, LOTTO_COUNT, PRINT_PURCHASE_LOTTO, WINNING_OUTCOME, INPUT_WINNING_NUMBER,  GENERATE_BONUS_NUM, RATIO_OF_RETURN} from "./GameComment.";
import Lotto from "./Lotto";
class App {
  validPrice(price) {
     if(isNaN(price)) throw new Error("[ERROR]");
    if(price%1000) throw new Error("[ERROR]");
    return price/1000;
  }

  drawLotto(lottoContainer, count) {
    for(let i=0; i<count; i++) {
      const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoContainer[i] = new Lotto(lottoNums.sort((a,b)=>a-b));
    }

  }

  matchNums (lotto, winningNums, bonusNum, result) {
    let matches = -3;
    winningNums.get().forEach(v=>{
      if(lotto.includes(v)) matches++;
    });
    if(matches < 0) return;
    if(matches === 5 && lotto.includes(bonusNum))  result[matches+1] += 1;
    result[matches] += 1;
    return;
  }

  printTotalOutcome(result, price) {
    const outcomes = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalOutcome = 0;
    result.forEach((v, i) => totalOutcome += v * outcomes[i]);
    const ratio = Math.round((totalOutcome/price * 100) *10)/10;
    Console.print(RATIO_OF_RETURN(ratio));
  }

  lottoResult(lottoContainer, winningNums, bonusNum, price) {
    const result = Array.from({length :5}).fill(0);
    lottoContainer.forEach(v=> {
      const lotto = v.get();
      this.matchNums(lotto, winningNums, bonusNum, result, price);
    });
    Console.print(WINNING_OUTCOME(result));
    this.printTotalOutcome(result, price);
  }

  async geterateWinNums() {
    const input = await Console.readLineAsync(INPUT_WINNING_NUMBER);
    return input.split(",").map(Number);
  }

  async play() {
    const price = await Console.readLineAsync(BUY_LOTTO);
    const count = this.validPrice(price);
    Console.print(LOTTO_COUNT(count));
    const lottoContainer = Array.from(count).fill(null);
    this.drawLotto(lottoContainer, count);
    Console.print(PRINT_PURCHASE_LOTTO(lottoContainer));
    const winningNums = new Lotto(await this.geterateWinNums());
    const bonusNum = await Console.readLineAsync(GENERATE_BONUS_NUM);
    this.lottoResult(lottoContainer, winningNums, bonusNum, price);
  }
}

export default App;
