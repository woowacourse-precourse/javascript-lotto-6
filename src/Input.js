import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

export class Input {
  // 입력 받는 기능
  async getMoney() {
    const money = await Console.readLineAsync(MESSAGES.HOW_MUCH + "\n");

    return money;
  }
}
