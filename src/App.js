import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto, Bonus } from "./Lotto.js";

const number = new Lotto();
const bonus = new Bonus();
class App {
  #numbers;
  bonus;
  pickNumber;

  constructor() {
    this.#numbers = [];
    this.bonus = 0;
    this.pickNumber = [];
  }

  async play() {
    //가격 입력 받음
    const price = MissionUtils.Console.readlineAsync();

    // 내 로또 번호 입력 받음
    this.pickNumber = MissionUtils.Console.readlineAsync();

    //로도 껼과 계산
    const result = this.calResult();

    //결과 출력
    this.printResult();
    //입력받은 가격에 대해 로또 생성
    this.buyLottos();

    //당첨 번호 입력
    this.enterWinningNum();
  }

  //로또 구매 및 장수만큼 로또 번호 생성
  buyLottos(price) {
    const numOfLottos = Math.floor(price / 1000);
    MissionUtils.Console.print(`${numOfLottos}개를 구매했습니다.`);
    
    }
  }

  //로또 결과 계산 함수
  calResult() {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+1": 30000000,
      6: 2000000000,
    };
  }

  //결과 출력 함수
  printResults() {}

  //수익률 계산 함수
  calProfitRate() {}

  //당첨 번호 입력 함수
  enterWinningNumber() {
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    this.lottos;
  }
  //보너스 번호 입력 함수
  enterBonusNumber() {
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    this.bonus;
  }


export default App;
