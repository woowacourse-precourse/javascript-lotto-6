import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const LOTTO_PRICE = 1000;

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
  // 구입 금액 관련 함수들
  async inputCost() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.costValid(input);
    this.#cost = input;
  }
  costValid(input) {
    const numberInput = Number(input);
    if (!(Number.isInteger(numberInput) && input % LOTTO_PRICE === 0 && input > 0)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  // lotto 생성 관련 함수들
  lottoGenerater() {
    for (let i = 0; i < this.#cost / LOTTO_PRICE; i++) {
      this.#lottos.push(this.makeLotto());
    }
  }
  makeLotto() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  showLottoList() {
    MissionUtils.Console.print(`${this.#cost / LOTTO_PRICE}개를 구매했습니다.`);

    this.#lottos.map((lotto) => {
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }
  // 당첨 번호 관련 함수들
  async inputWinnerNum() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    this.#winningNum = new Lotto(input.split(",").map(Number));
    MissionUtils.Console.print(this.#winningNum.getNumbers());
  }
  // 보너스 번호 관련 함수들
  async inputExtraNum() {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    this.extraNumValid(input);
    this.#extraNum = input;
  }
  extraNumValid(input) {
    const numberInput = Number(input);
    if (!(Number.isInteger(numberInput) && input > 0)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async play() {
    await this.inputCost();
    this.lottoGenerater();
    this.showLottoList();
    await this.inputWinnerNum();
    await this.inputExtraNum();
  }
}

export default App;
