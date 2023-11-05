// Input.js
import readline from "readline";

class Input {
  static async inputMoney() {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("구입금액을 입력해 주세요: ", (money) => {
        // 입력 받은 구입금액을 정수로 변환
        const purchaseAmount = parseInt(money, 10);

        if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
          console.error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
          rl.close();
          reject();
        } else {
          rl.close();
          resolve(purchaseAmount);
        }
      });
    });
  }
}

export default Input;
