import { MissionUtils } from "@woowacourse/mission-utils";
import { isDuplicate, isNumberInRange, isSixLength, isValidAmount } from "./utils/vaildator.js";
import { inputAmount, inputBonnusNum, inputWinningNum } from "./view/Input.js";
import { printLottoCount, printLottoNum } from "./view/Output.js";
import Lotto from "./Lotto.js";
import { generateLottoNum } from "./utils/generateRandomNum.js";

class App {
  async play() {
    const amount = await inputAmount();
    isValidAmount(amount);

    const count = printLottoCount(amount);
    const lottoNums = [];

    // 로또 번호 생성
    for(let i=0; i<count; i++){
      lottoNums.push(generateLottoNum());
    }

    const lottos = lottoNums.map(lotto => new Lotto(lotto));

    for(const lotto of lottos){
      printLottoNum(lotto.getNumbers())
    }

    const winningNums = await inputWinningNum();
    isDuplicate(winningNums) || isNumberInRange(winningNums) || isSixLength(winningNums);

    const bonusNum = await inputBonnusNum();
    winningNums.push(bonusNum);
    isDuplicate(winningNums);
    winningNums.pop();
  }
}

export default App;

const app = new App();
app.play();