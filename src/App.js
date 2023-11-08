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

export function calculateTicketCount(purchaseAmount) {
  let ticketCount = purchaseAmount / 1000;
  return ticketCount;
}

export function generateLottoTickets(ticketCount) {
  let lottoTickets = [];
  for (let i = 0; i < ticketCount; i++) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    lottoTickets.push(sortedNumbers);
  }
  return lottoTickets;
}

class App {
  async play() {}
}

export default App;
