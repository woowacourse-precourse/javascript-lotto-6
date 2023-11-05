import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #cost;
  #winningNum;
  #extraNum;
  #lottos;

  constructor() {
    this.#cost = 0;
    this.#winningNum = [];
    this.#extraNum = 0;
    this.#lottos = [];
  }

  async inputCost() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.costValid(input);
  }
  costValid(input) {
    if (/\d/.test(input) && input % 1000 === 0 && input > 0) {
      this.#cost = input;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  lottoGenerater() {
    for (let i = 0; i < this.#cost / 1000; i++) {
      this.#lottos.push(this.makeLotto());
    }
  }
  makeLotto() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  showLottoList() {
    this.#lottos.map((lotto) => {
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }

  async play() {
    await this.inputCost();
    this.lottoGenerater();
    this.showLottoList();
  }
}

export default App;
