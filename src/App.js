import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let userMoney;
    while (true) {
      try {
        userMoney = await this.getUserMoney("구입금액을 입력해 주세요.\n");
        break;
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }

    const lottos = this.createLottos(userMoney);
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.getNumbers()));
  }

  async getUserInput(msg) {
    return await MissionUtils.Console.readLineAsync(msg);
  }

  async getUserMoney(promptMsg) {
    let firstAttempt = true;

    while (true) {
      try {
        const userInput = await this.getUserInput(
          firstAttempt ? promptMsg : ""
        );
        firstAttempt = false;

        const userMoney = this.checkValidate(userInput);
        return userMoney;
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }
  }

  checkValidate(userInput) {
    let userMoney = parseInt(userInput, 10);

    if (isNaN(userMoney) || userMoney % 1000 !== 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return userMoney;
  }

  createLottos(money) {
    let count = money / 1000;
    let lottos = [];

    while (count > 0) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      let lotto = new Lotto(numbers.sort((a, b) => a - b));
      lottos.push(lotto);
      count -= 1;
    }
    return lottos;
  }
}

export default App;
