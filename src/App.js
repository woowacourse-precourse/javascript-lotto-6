import { MissionUtils } from "@woowacourse/mission-utils";
import { userPriceInput, userWinningInput, userBonusInput } from './input.js';
import { printCnt, printLottoNumber } from './print.js';
import { printWinningList, printROI } from './result.js';
import { checkWinning } from './utils.js';
import Lotto from "./Lotto.js";

class App {
  async play() {
    let count, change, winNumber;
    while (true) {
      try {
        [count, change] = await userPriceInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // throw error;
      }
    }

    printCnt(count, change);
    const lottos = generateLottos(count);
    printLottoNumber(lottos);

    while (true) {
      try {
        winNumber = await userWinningInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // throw error;
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await userBonusInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const winList = checkAllLottos(lottos, winNumbers, bonusNumber);
    printWinningList(winList);
    printROI(winList, count);
  }
}
  

export default App;
