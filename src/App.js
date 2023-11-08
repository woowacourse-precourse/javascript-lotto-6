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

export async function enterWinningNumbers() {
  try {
    let winningNumbers = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    let winningNumbersArray = winningNumbers.split(",").map(Number);
    if (
      winningNumbersArray.length !== new Set(winningNumbersArray).size ||
      winningNumbersArray.length !== 6 ||
      winningNumbersArray.some((number) => number < 1) ||
      winningNumbersArray.some((number) => number > 45)
    ) {
      throw new Error("[ERROR] 올바른 당첨 번호 형식이 아닙니다.");
    }
    return winningNumbersArray;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return await enterWinningNumbers();
  }
}

export async function enterBonusNumber() {
  try {
    let bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
      );
    bonusNumber = Number(bonusNumber);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
    return bonusNumber;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return await enterBonusNumber();
  }
}

class App {
  async play() {}
}

export default App;
