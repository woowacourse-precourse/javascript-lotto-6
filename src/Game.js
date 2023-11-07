import { Console, Random } from "@woowacourse/mission-utils";

export async function getMoney() {
  let moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  if (isNaN(Number(moneyInput))) {
    throw new Error("[ERROR]");
  }

  if (Number(moneyInput) % 1000 !== 0) {
    throw new Error("[ERROR]");
  }

  return Number(moneyInput);
}
