import { MissionUtils } from "@woowacourse/mission-utils";

export async function purchaseTickets() {
  try {
    let purchaseAmount = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    purchaseAmount = Number(purchaseAmount);
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000으로 나누어 떨어져야 합니다.");
    }
    return purchaseAmount;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return await purchaseTickets();
  }
}

class App {
  async play() {}
}

export default App;
