import { MissionUtils } from "@woowacourse/mission-utils";
import { userPriceInput, userWinningInput, userBonusInput } from './input.js';
import { printCnt, printLottoNumber } from './print.js';
import { printWinningList, printROI } from './result.js';
import { checkWinning } from './utils.js';

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
    const lotto = printLottoNumber(count);

    while (true) {
      try {
        winNumber = await userWinningInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // throw error;
      }
    }

    while (true) {
      try {
        const bonusNumber = await userBonusInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const winList = [0, 0, 0, 0, 0];
    lotto.map((l) => {
      const idx = checkWinning(l, winNumber, bonusNumber);
      winList[idx] = winList[idx] + 1;
    });

    printWinningList(winList);
    printROI(winList, count);
  }
}
  

export default App;
