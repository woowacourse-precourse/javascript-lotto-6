import { Console } from "@woowacourse/mission-utils";

class View {
  async getLottoPurchaseAmount() {
    return await this.readLine("구입금액을 입력해 주세요.\n");
  }

  async readLine(query) {
    return await Console.readLineAsync(query);
  }
}
