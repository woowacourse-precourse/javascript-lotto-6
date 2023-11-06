import { Console, Random } from "@woowacourse/mission-utils";
import { BUY_LOTTO, LOTTO_COUNT, PRINT_PURCHASE_LOTTO, WINNING_OUTCOME, INPUT_WINNING_NUMBER,  GENERATE_BONUS_NUM, RATIO_OF_RETURN} from "./GameComment.";
import Lotto from "./Lotto";
class App {
  #OUTCOMES = [5000, 50000, 1500000, 30000000, 2000000000];
  #price;
  #count;
  validPrice() {
     if(isNaN(this.#price)) {
      Console.print("[ERROR]");
      return -1;
     }
    if(this.#price%1000) throw new Error("[ERROR]");
    return this.#price/1000;
  }

  drawLotto(lottoContainer) {
    let drawResult = "";
    let arr = [11,1,-1,0,4,10];
    for(let i=0; i<this.#count; i++) {
      const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoContainer[i] = new Lotto(lottoNums.sort((a,b)=>a-b));
      drawResult += PRINT_PURCHASE_LOTTO(lottoNums);
    }
    Console.print(drawResult);
  }

  printTotalOutcome(result) {
    let totalOutcome = 0;
    result.forEach((v, i) => totalOutcome += v * this.#OUTCOMES[i]);
    const ratio = Math.round((totalOutcome/this.#price * 100) *10)/10;
    Console.print(RATIO_OF_RETURN(ratio));
  }

  lottoResult(lottoContainer, winningNums, bonusNum) {
    const result = Array.from({length :5}).fill(0);
    lottoContainer.forEach(lotto=> {
      const count = lotto.matchNums(winningNums, bonusNum, result, this.#price);
      if(count >= 0) result[count] += 1;
    });
    Console.print(WINNING_OUTCOME(result));
    this.printTotalOutcome(result);
  }

  async geterateWinNums() {
    const input = await Console.readLineAsync(INPUT_WINNING_NUMBER);
    return new Lotto(input.split(",").map(Number));
  }

  async buyLotto() {
    while(true) {
      this.#price = await Console.readLineAsync(BUY_LOTTO);
      this.#count = this.validPrice();
      if(this.#count >= 0) break;
    }
  }

  async play() {
    await this.buyLotto();
    Console.print(LOTTO_COUNT(this.#count));
    const lottoContainer = Array.from(this.#count).fill(null);
    this.drawLotto(lottoContainer);
    const winningNums = (await this.geterateWinNums()).getNumbers();
    const bonusNum = await Console.readLineAsync(GENERATE_BONUS_NUM);
    this.lottoResult(lottoContainer, winningNums, bonusNum);
  }
}

export default App;
