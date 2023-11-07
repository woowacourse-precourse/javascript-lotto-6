import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const LOTTO_PRICE = 1000;
const FIRST = 2000000000;
const SECOND = 30000000;
const THIRD = 1500000;
const FOURTH = 50000;
const FIFTH = 5000;

class App {
  #cost;
  #lottos;
  #winningNum;
  #bonusNum;
  #winningDetail;
  #rateOfReturn;

  constructor() {
    this.#cost = 0;
    this.#lottos = [];
    this.#winningNum = [];
    this.#bonusNum = 0;
    this.#winningDetail = [0, 0, 0, 0, 0];
    this.#rateOfReturn = 0;
  }
  // 구입 금액 관련 함수들
  async inputCost() {
    try {
      const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.costValid(input);
      this.#cost = input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputCost();
    }
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
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
  }
  showLottoList() {
    MissionUtils.Console.print(`${this.#cost / LOTTO_PRICE}개를 구매했습니다.`);
    this.#lottos.map((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
  // 당첨 번호 관련 함수들
  async inputWinnerNum() {
    try {
      const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      this.#winningNum = new Lotto(input.split(",").map(Number));
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputWinnerNum();
    }
  }
  // 보너스 번호 관련 함수들
  async inputBonusNum() {
    try {
      const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      this.bonusNumValid(input);
      this.checkInOrigin(input);
      this.#bonusNum = input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputBonusNum();
    }
  }
  bonusNumValid(input) {
    const numberInput = Number(input);
    if (!(Number.isInteger(numberInput) && input > 0 && input < 46)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  checkInOrigin(input) {
    const numberInput = Number(input);
    this.#winningNum.getNumbers().map((num) => {
      if (num === numberInput) throw new Error("[ERROR] 이미 선택된 번호입니다.");
    });
  }
  // 구입한 로또와 당첨 번호 비교 관련 함수
  checkLottos() {
    let matchWinnerNum = 0;
    let matchBonusNum = 0;
    this.#lottos.map((lotto) => {
      matchWinnerNum = lotto.getNumbers().filter((num) => this.#winningNum.getNumbers().includes(num)).length;
      matchBonusNum = lotto.getNumbers().filter((num) => num === this.#bonusNum).length;
      this.checkWinningDetail(matchWinnerNum, matchBonusNum);
    });
  }
  checkWinningDetail(matchWinnerNum, matchBonusNum) {
    if (matchWinnerNum === 6) this.#winningDetail[4]++;
    if (matchWinnerNum === 5 && matchBonusNum === 1) this.#winningDetail[3]++;
    if (matchWinnerNum === 5 && matchBonusNum === 0) this.#winningDetail[2]++;
    if (matchWinnerNum === 4) this.#winningDetail[1]++;
    if (matchWinnerNum === 3) this.#winningDetail[0]++;
  }
  //당첨 내역 출력 관련 함수
  showWinningDetail() {
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (${FIFTH.toLocaleString("en-US")}원) - ${this.#winningDetail[0]}개`);
    MissionUtils.Console.print(`4개 일치 (${FOURTH.toLocaleString("en-US")}원) - ${this.#winningDetail[1]}개`);
    MissionUtils.Console.print(`5개 일치 (${THIRD.toLocaleString("en-US")}원) - ${this.#winningDetail[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${SECOND.toLocaleString("en-US")}원) - ${this.#winningDetail[3]}개`);
    MissionUtils.Console.print(`6개 일치 (${FIRST.toLocaleString("en-US")}원) - ${this.#winningDetail[4]}개`);
  }
  calculateRateOfReturn() {
    this.#rateOfReturn =
      ((FIFTH * this.#winningDetail[0] +
        FOURTH * this.#winningDetail[1] +
        THIRD * this.#winningDetail[2] +
        SECOND * this.#winningDetail[3] +
        FIRST * this.#winningDetail[4]) /
        this.#cost) *
      100;
  }
  printRateOfReturn() {
    MissionUtils.Console.print(`총 수익률은 ${parseFloat(this.#rateOfReturn.toFixed(1)).toLocaleString("en-US")}%입니다.`);
  }

  async play() {
    await this.inputCost();
    this.lottoGenerater();
    this.showLottoList();
    await this.inputWinnerNum();
    await this.inputBonusNum();
    this.checkLottos();
    this.showWinningDetail();
    this.calculateRateOfReturn();
    this.printRateOfReturn();
  }
}

export default App;
