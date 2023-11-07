import {MissionUtils} from "@woowacourse/mission-utils";
import MoneyChanger from "../controller/MoneyChanger.js";
import WinNumberConverter from "../controller/WinNumberConverter.js";

class UIUX {
  async inputMoney() {
    const money = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    const changer = new MoneyChanger(money);
    return changer.count;
  }

  async inputNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const userInput = new WinNumberConverter(numbers);
    return userInput.numbers;
  }

  async inputBonus() {
    return await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
  }

  printLottoList() {

  }

  printBlankLine() {
    MissionUtils.Console.print();
  }

  printWinningScore() {
    MissionUtils.Console.print('당첨 통계\n---');
  }
}