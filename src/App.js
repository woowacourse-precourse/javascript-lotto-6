import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const LOTTO_PRICE = 1000;
const FIRST = 2000000000;
const SECOND = 30000000;
const THIRD = 1500000;
const FOURTH = 50000;
const FIFTH = 5000;

class App {
  cost;
  lottos;
  winningNum;
  bonusNum;
  winningDetail;
  rateOfReturn;

  constructor() {
    this.cost = 0;
    this.lottos = [];
    this.winningNum = [];
    this.bonusNum = 0;
    this.winningDetail = [0, 0, 0, 0, 0]; // 5등,4등,3등,2등,1등의 개수이다.
    this.rateOfReturn = 0;
  }
  // 구입 금액 관련 함수들
  async inputCost() {
    while (true) {
      try {
        const input = await this.getInputCost();
        this.costValid(input);
        this.cost = input;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
  async getInputCost() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(input);
  }
  costValid(input) {
    if (!(Number.isInteger(input) && input % LOTTO_PRICE === 0 && input > 0)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  // lotto 생성 관련 함수들
  generateLottos() {
    const numberOfLottos = this.cost / LOTTO_PRICE;
    for (let i = 0; i < numberOfLottos; i++) {
      this.lottos.push(this.makeLotto());
    }
  }
  makeLotto() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
  }
  //로또 목록 보여주는 함수
  showLottoList() {
    const numberOfLottos = this.cost / LOTTO_PRICE;
    MissionUtils.Console.print(`${numberOfLottos}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
  // 당첨 번호 관련 함수들
  async inputWinnerNum() {
    while (true) {
      try {
        const input = await this.getInputWinnerNum();
        this.winningNum = new Lotto(input); // lotto 객체로 만들어줌으로서 유효성 검사
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
  async getInputWinnerNum() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input.split(",").map(Number);
  }
  // 보너스 번호 관련 함수들
  async inputBonusNum() {
    while (true) {
      try {
        const input = await this.getInputBonusNum();
        this.bonusNumValid(input);
        this.bonusNum = input;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
  async getInputBonusNum() {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Number(input);
  }
  bonusNumValid(input) {
    this.wrongFormmat(input);
    this.checkInOrigin(input);
  }
  wrongFormmat(input) {
    if (!(Number.isInteger(input) && input > 0 && input < 46)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
  checkInOrigin(input) {
    this.winningNum.getNumbers().forEach((num) => {
      if (num === input) throw new Error("[ERROR] 이미 선택된 번호입니다.");
    });
  }
  // 구입한 로또와 당첨 번호 비교 함수
  checkLottos() {
    let matchWinnerNum = 0;
    let matchBonusNum = 0;
    this.lottos.forEach((lotto) => {
      matchWinnerNum = lotto.getNumbers().filter((num) => this.winningNum.getNumbers().includes(num)).length; //구입한 로또와 일치하는 당첨 번호의 수
      matchBonusNum = lotto.getNumbers().filter((num) => num === this.bonusNum).length; //구입한 로또와 일치하는 보너스 번호의 수
      this.checkWinningDetail(matchWinnerNum, matchBonusNum);
    });
  }
  //등수 확인하는 함수
  checkWinningDetail(matchWinnerNum, matchBonusNum) {
    if (matchWinnerNum === 3) this.winningDetail[0]++;
    if (matchWinnerNum === 4) this.winningDetail[1]++;
    if (matchWinnerNum === 5 && matchBonusNum === 0) this.winningDetail[2]++;
    if (matchWinnerNum === 5 && matchBonusNum === 1) this.winningDetail[3]++;
    if (matchWinnerNum === 6) this.winningDetail[4]++;
  }
  //당첨 내역 출력 관련 함수
  showWinningDetail() {
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (${FIFTH.toLocaleString("ko-KR")}원) - ${this.winningDetail[0]}개`);
    MissionUtils.Console.print(`4개 일치 (${FOURTH.toLocaleString("ko-KR")}원) - ${this.winningDetail[1]}개`);
    MissionUtils.Console.print(`5개 일치 (${THIRD.toLocaleString("ko-KR")}원) - ${this.winningDetail[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${SECOND.toLocaleString("ko-KR")}원) - ${this.winningDetail[3]}개`);
    MissionUtils.Console.print(`6개 일치 (${FIRST.toLocaleString("ko-KR")}원) - ${this.winningDetail[4]}개`);
  }
  // 수익률 계산 함수
  calculateRateOfReturn() {
    this.rateOfReturn =
      ((FIFTH * this.winningDetail[0] +
        FOURTH * this.winningDetail[1] +
        THIRD * this.winningDetail[2] +
        SECOND * this.winningDetail[3] +
        FIRST * this.winningDetail[4]) /
        this.cost) *
      100;
  }
  // 수익률 출력 함수
  printRateOfReturn() {
    MissionUtils.Console.print(`총 수익률은 ${parseFloat(this.rateOfReturn.toFixed(1)).toLocaleString("ko-KR")}%입니다.`);
  }

  async play() {
    await this.inputCost();
    this.generateLottos();
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
