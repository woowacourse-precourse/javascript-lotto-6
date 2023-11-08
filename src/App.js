import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import ERROR_MESSAGES from "./constants/ErrorMessage.js";
import GAME_MESSAGES from "./constants/GameMessages.js";
import LOTTO_MESSAGES from "./constants/LottoMessages.js";

class App {
  constructor() {
    this.pay = 0;
    this.lottos = [];
    this.winning = [];
    this.bonus = 0;
    this.result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async inputMoney() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(GAME_MESSAGES.INPUT_MONEY);

        this.validate(input);
        this.pay = +input / 1000;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validate(input) {
    if (isNaN(+input)) throw new Error(ERROR_MESSAGES.IS_NUMBER);

    if (+input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.IS_ONE_THOUSAND_WON);
    }

    return true;
  }

  async generateLottoNumber() {
    Console.print(`${this.pay}${GAME_MESSAGES.COUNT_LOTTO}`);
    for (let i = 0; i < this.pay; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      const formattedLotto = `[${lotto.join(", ")}]`;
      Console.print(formattedLotto);
      this.lottos.push(lotto);
    }
  }

  async inputWinning() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(
          GAME_MESSAGES.INPUT_WINNING_NUMBER,
        );
        const winning = input.split(",").map((elem) => +elem);
        const lotto = new Lotto(winning);
        this.winning = winning;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonus() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(
          GAME_MESSAGES.INPUT_BONUS_NUMBER,
        );
        const bonusNum = +input;
        this.bonusValidate(bonusNum);
        this.bonus = bonusNum;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  bonusValidate(bonusNum) {
    if (this.winning.includes(bonusNum)) {
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.");
    }
    if (bonusNum < 1 || bonusNum > 45) {
      throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
    }
  }

  async calWinning() {
    this.lottos.forEach((lotto) => {
      let basicNumber = 0;
      let bonusNumber = 0;

      lotto.forEach((ball) => {
        if (this.winning.includes(ball)) basicNumber += 1;
        if (this.bonusNumber === ball) bonusNumber += 1;
      });

      if (basicNumber === 6 && bonusNumber === 0) this.result[1] += 1;
      if (basicNumber === 5 && bonusNumber === 1) this.result[2] += 1;
      if (basicNumber + bonusNumber === 5) this.result[3] += 1;
      if (basicNumber + bonusNumber === 4) this.result[4] += 1;
      if (basicNumber + bonusNumber === 3) this.result[5] += 1;
    });
  }

  async printResult() {
    const total = this.resultRateOfReturn();

    Console.print(GAME_MESSAGES.WINNING_STATISTICS);
    Console.print(`${LOTTO_MESSAGES.COINCIDE_THREE_NUMBER}${this.result[5]}개`);
    Console.print(`${LOTTO_MESSAGES.COINCIDE_FOUR_NUMBER}${this.result[4]}개`);
    Console.print(`${LOTTO_MESSAGES.COINCIDE_FIVE_NUMBER}${this.result[3]}개`);
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_FIVE_BONUS_NUMBER}${this.result[2]}개`,
    );
    Console.print(`${LOTTO_MESSAGES.COINCIDE_SIX_NUMBER}${this.result[1]}개`);
    Console.print(`총 수익률은 ${total}%입니다.\n`);
  }

  resultRateOfReturn() {
    const money =
      this.result[1] * 2000000000 +
      this.result[2] * 30000000 +
      this.result[3] * 1500000 +
      this.result[4] * 50000 +
      this.result[5] * 5000;
    const buy = this.pay * 1000;
    return Number((money / buy) * 100).toFixed(1);
  }

  async play() {
    await this.inputMoney();
    await this.generateLottoNumber();
    await this.inputWinning();
    await this.inputBonus();
    await this.calWinning();
    await this.printResult();
  }
}

export default App;
