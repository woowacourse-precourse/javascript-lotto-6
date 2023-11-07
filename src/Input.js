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
        const lottoNumbersArray = [];
        for (let i = 0; i < count; i++) {
          const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
          lottoNumbersArray.push(lottoNumbers);
          Console.print(`[${lottoNumbers.join(", ")}]`);
        }
        return lottoNumbersArray;
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
      
      // Validate lottoNumbers using the Lotto class
      Lotto.validateLottoNumbers(lottoNumbers);
      
      return lottoNumbers;
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
      const bonusNumbers = numberString
        .split(",")
        .map((number) => parseInt(number, 10));
  
      if (bonusNumbers.length !== 1 || isNaN(bonusNumbers[0]) || bonusNumbers[0] < 1 || bonusNumbers[0] > 45) {
        throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 하나의 숫자여야 합니다.");
      }
  
      const bonusNumber = bonusNumbers[0];
      return bonusNumber; // 보너스 번호를 반환
    } catch (error) {
      Console.print(`${error.message}`);
      process.exit(1);
    }
  }
  
}

export default Input;
