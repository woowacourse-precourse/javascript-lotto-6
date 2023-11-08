import { MissionUtils } from "@woowacourse/mission-utils";
import { userPriceInput, userWinningInput, userBonusInput } from "./input.js";
import { printCnt, printLottoNumber } from "./print.js";
import { printWinningList, printROI } from "./result.js";
import { checkWinning } from "./utils.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const [count, change] = await userPriceInput();
    printCnt(count, change);
    const lottos = generateLottos(count);
    printLottoNumber(lottos);
    const winNumber = await userWinningInput();
    const bonusNumber = await userBonusInput();
    const winList = checkAllLottos(lottos, winNumbers, bonusNumber);
    printWinningList(winList);
    printROI(winList, count);
  }
}

export default App;
