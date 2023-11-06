import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    const countOfLotto = this.countOfLotto(inputPrice); // 로또 개수 구하기
    Console.print(`${countOfLotto}개를 구매했습니다.`);
  }

  countOfLotto(inputPrice) {
    return inputPrice / 1000;
  }
}

export default App;
