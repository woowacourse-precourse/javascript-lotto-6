import readline from "readline";
import Lotto from "./Lotto.js";
import { Random, Console } from "@woowacourse/mission-utils";

class Input {
  static async inputMoney() {
    try {
      const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const purchaseAmount = parseInt(money, 10);

      if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
        Console.print("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
        process.exit(1);
      } else {
        const count = purchaseAmount / 1000;
        const message = `${count}개를 구매했습니다.`;
        Console.print(message);

        for (let i = 0; i < count; i++) {
          const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
          Console.print(`[${lottoNumbers.join(", ")}]`);
        }
      }
    } catch (error) {
      Console.print(`${error.message}`);
      process.exit(1);
    }
  }

  static async inputNumber() {
    try {
      const number = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      const lottoNumbers = number
        .split(",")
        .map((number) => parseInt(number, 10));
      const lotto = new Lotto(lottoNumbers);
    } catch (error) {
      Console.print(`${error.message}`);
      process.exit(1);
    }
  }

  static async bonusNumber() {
    try {
      const numberString = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      const bonusNumber = parseInt(numberString, 10);
      Lotto.validateBonusNumber([bonusNumber]); // 배열로 감싸야 함
    } catch (error) {
      Console.print(`${error.message}`);
      process.exit(1);
    }
  }
}

export default Input;
