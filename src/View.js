import { Console } from "@woowacourse/mission-utils";
import InputError from "./InputError.js";

class View {
  constructor() {}

  async getPrice() {
    const INPUT = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +INPUT;
  }

  async getWinninNumber() {
    const INPUT = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return INPUT.split(",");
  }

  async getBonusNumber() {
    const INPUT = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return +INPUT;
  }
}

export default View;
