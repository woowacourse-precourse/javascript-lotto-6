import { Console } from "@woowacourse/mission-utils";

class App {
  async start() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Math.floor(price / 1000);
  }

  async play() {
    const count = await this.start();
    Console.print(count + "개를 구매했습니다.");
  }
}

export default App;
