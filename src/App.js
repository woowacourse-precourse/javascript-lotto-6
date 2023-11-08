import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {}
  async play() {
    const LOTTO_NUM = await this.getLottoMoney();
    const LOTTO_ARRAY = await this.getLottoObject(LOTTO_NUM);
    const WIN_NUM = await this.getWinningNum();
    const BONUS_NUM = await this.getBonusNum(WIN_NUM);
    this.printResult(LOTTO_ARRAY, WIN_NUM, BONUS_NUM);
  }

  async getLottoMoney() {
    let validData = false;
    let money;

    while (!validData) {
      try {
        money = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        if (isNaN(Number(money))) {
          throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
        }

        if (money % 1000 != 0) {
          throw new Error(
            "[ERROR] 로또 구입 금액은 1000으로 나누어져야 합니다."
          );
        }

        validData = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return Number(money) / 1000;
  }

  async getLottoObject(LOTTO_NUM) {
    const ARR = [];
    for (let i = 0; i < LOTTO_NUM; i++) {
      const NEWLOTTO = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
      ARR.push(NEWLOTTO);
    }

    MissionUtils.Console.print(`\n${LOTTO_NUM}개를 구매했습니다.`);
    ARR.forEach((obj) => {
      const LOTTO = obj.getNumbers;
      MissionUtils.Console.print(
        `[${LOTTO[0]}, ${LOTTO[1]}, ${LOTTO[2]}, ${LOTTO[3]}, ${LOTTO[4]}, ${LOTTO[5]}]`
      );
    });

    return ARR;
  }

  async getWinningNum() {
    const WINNING_NUM = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    if (WINNING_NUM.includes(" ")) {
      throw new Error(
        "[ERROR] 당첨 번호를 입력할 때, 띄어쓰기를 하면 안 됩니다."
      );
    }
    //const regex = /^\d+(,\d+){5}$/;

    //if(!regex.test(WINNING_NUM)) { throw new Error("[ERROR] 당첨 번호는 숫자,숫자,숫자,숫자,숫자,숫자 의 형태로 입력해야 합니다."); }
    const WINNING_NUM_ARR = WINNING_NUM.split(",").map(Number);
    if (WINNING_NUM_ARR.length != 6)
      throw new Error("[ERROR] 숫자는 6개를 입력하셔야 합니다.");

    WINNING_NUM_ARR.forEach((num) => {
      if (num < 1 || num > 45 || isNaN(num)) {
        throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이로 입력해야 합니다.");
      }
    });

    const UNIQUEARR = [...new Set(WINNING_NUM_ARR)];
    if (UNIQUEARR.length !== WINNING_NUM_ARR.length) {
      throw new Error(
        "[ERROR] 당첨 번호는 중복되지 않은 숫자로 입력해야 합니다."
      );
    }

    return WINNING_NUM_ARR;
  }

  async getBonusNum(WIN_NUM) {
    const BONUS = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const BONUS_NUMBER = parseInt(BONUS, 10);

    if (isNaN(BONUS)) throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (BONUS_NUMBER < 1 || BONUS_NUMBER > 45)
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자입니다.");
    if (WIN_NUM.includes(BONUS_NUMBER))
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안됩니다."
      );

    return BONUS_NUMBER;
  }

  async printResult(LOTTO_ARRAY, WIN_NUM, BONUS_NUM) {
    const WIN = [0, 0, 0, 0, 0, 0];
    LOTTO_ARRAY.forEach((lotto) => {
      WIN[lotto.compareNumbers(WIN_NUM, BONUS_NUM)]++;
    });

    const EARN =
      ((WIN[1] * 5000 +
        WIN[2] * 50000 +
        WIN[3] * 1500000 +
        WIN[4] * 30000000 +
        WIN[5] * 2000000000) *
        100) /
      (LOTTO_ARRAY.length * 1000);

    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${WIN[1]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${WIN[2]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${WIN[3]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${WIN[4]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${WIN[5]}개`);
    MissionUtils.Console.print(`총 수익률은 ${EARN}%입니다.`);
  }
}

export default App;
