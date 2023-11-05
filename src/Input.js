// Input.js
import readline from "readline";
import Lotto from "./Lotto.js";

class Input {
  static async inputMoney() {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("구입금액을 입력해 주세요.\n", (money) => {
        const purchaseAmount = parseInt(money, 10);

        if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
          console.error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
          rl.close();
          reject();
        } else {
          const count = purchaseAmount / 1000;
          const message = `${count}개를 구매했습니다.`;
          console.log(message);
          rl.close();
          resolve(purchaseAmount);
        }
      });
    });
  }

  static async inputNumber() {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("당첨 번호를 입력해 주세요.\n", (number) => {
        const lottoNumbers = number.split(",").map((num) => parseInt(num, 10));

        try {
          const lotto = new Lotto(lottoNumbers);
          rl.close();
          resolve(lottoNumbers);
        } catch (error) {
          rl.close();
          reject(error);
        }
      });
    });
  }
}

export default Input;
