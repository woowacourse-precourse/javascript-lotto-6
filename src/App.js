import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  // 구입 금액 입력받기
  async inputMoney() {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    }
    return money;
  }
  // 로또 발행
  publishLotto(money) {
    const lottoCount = money / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      lottos.push(randomNumbers);
    }
    return lottos;
  }
  // 구매한 로또 수량 및 번호 출력
  printLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    for (let i=0; i<lottos.length; i++) {
      MissionUtils.Console.print(lottos[i])
    }
  }
}

export default App;
