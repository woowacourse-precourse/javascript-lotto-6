import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MESSAGE_BONUS_NUMBER,
  MESSAGE_PURCHASING_AMOUNT,
  MESSAGE_PURCHASING_NUMBER,
  MESSAGE_WINNING_NUMBER,
} from "./constants/message";
import Purchase from "./Purchase";
import Issuance from "./Issuance";
import Lotto from "./Lotto";
import Bonus from "./Bonus";

class App {
  async play() {
    const purchasingAmount = await MissionUtils.Console.readLineAsync(
      MESSAGE_PURCHASING_AMOUNT
    );
    const checkedAmount = new Purchase(purchasingAmount);
    MissionUtils.Console.print(
      checkedAmount.getPurchaseCount + MESSAGE_PURCHASING_NUMBER
    );

    const issuance = new Issuance(checkedAmount.getPurchaseCount);
    issuance.printIssuanceNumbers();

    const winningNumber = MissionUtils.Console.readLineAsync(
      MESSAGE_WINNING_NUMBER
    );
    const lotto = new Lotto(winningNumber);

    const bonus = await MissionUtils.Console.readLineAsync(
      MESSAGE_BONUS_NUMBER
    );
    const bonusNumber = new Bonus(bonus, lotto.get());

    const comparedResult = lotto.compareResult(
      issuance,
      bonusNumber.get()
    );
    
    const lottoResult = [0, 0, 0, 0, 0, 0]; // 일치 개수 : [3개, 4개, 5개, 5개 + 보너스. 6개]
    const totalProfits = 0;
    comparedResult.forEach((result) => {
      
      switch (result) {
        case 3: {
          lottoResult[0] += 1;
          totalProfits += 5000;
          break;
        }
        case 4: {
          lottoResult[1] += 1;
          totalProfits += 50000;
          break;
        }
        case 5: {
          lottoResult[2] += 1;
          totalProfits += 1500000;
          break;
        }
        case 5.5: {
          lottoResult[3] += 1;
          totalProfits += 30000000;
          break;
        }
        case 6: {
          lottoResult[4] += 1;
          totalProfits += 2000000000;
          break;
        }
        default:{
          break;
        }
          
      }
    })

  }
}

export default App;
