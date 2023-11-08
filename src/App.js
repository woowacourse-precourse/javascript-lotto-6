import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  answer;
  lottos;
  bonus;
  threeLottoCorrect;
  fourLottoCorrect;
  fiveLottoCorrect;
  fivePlusOneLottoCorrect;
  sixLottoCorrect;

  constructor() {
    this.answer = [];
    this.lottos = [];
    this.bonus = null;
    this.threeLottoCorrect = 0;
    this.fourLottoCorrect = 0;
    this.fiveLottoCorrect = 0;
    this.fivePlusOneLottoCorrect = 0;
    this.sixLottoCorrect = 0;
  }

  async play() {
    //가격 입력 받음
    const price = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해주세요.\n"
    );

    //입력받은 가격에 대해 로또 생성
    this.buyLottos(price);

    // 내 로또 번호(당첨번호) 입력 받음
    this.answer = (
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n")
    ).split(",");

    //보너스 번호 실행
    this.bonus = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    //당첨 결과 발표 실행
    this.printResult();

    //수익률 결과 발표 실행
    this.calProfitRate(
      price,
      this.threeLottoCorrect,
      this.fourLottoCorrect,
      this.fiveLottoCorrect,
      this.fivePlusOneLottoCorrect,
      this.sixLottoCorrect
    );
  }

  //로또 구매 및 장수만큼 로또 번호 생성
  buyLottos(price) {
    const numOfLottos = Math.floor(price / 1000);
    MissionUtils.Console.print(`${numOfLottos}개를 구매했습니다.`);
    this.generateNumbers(numOfLottos);
  }

  //로또 당첨 번호 생성

  //내가 선택하는 복권 번호
  generateNumbers(numOfLottos) {
    for (let i = 0; i < numOfLottos; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b); // [1,2,3,4,5,6,]
      const lotto = new Lotto(number);
      this.lottos.push(lotto);

      let str = "[";
      for (let i = 0; i < number.length; i++) {
        if (i === number.length - 1) {
          str += String(number[i]) + "]";
        } else {
          str += String(number[i]) + ", ";
        }
      }
      MissionUtils.Console.print(str);
    }
  }

  //결과 출력 함수
  printResult() {
    let count = 0;
    for (const lotto of this.lottos) {
      for (const item of this.answer) {
        if (lotto.numbers.includes(item)) {
          count++;
        }
      }

      if (count === 3) {
        this.threeLottoCorrect++;
      } else if (count === 4) {
        this.fourLottoCorrect++;
      } else if (count === 5) {
        if (lotto.numbers.includes(this.bonus)) {
          this.fivePlusOneLottoCorrect++;
        } else {
          this.fiveLottoCorrect++;
        }
      } else if (count === 6) {
        this.sixLottoCorrect++;
      }
    }

    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.threeLottoCorrect}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.fourLottoCorrect}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.fiveLottoCorrect}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fivePlusOneLottoCorrect}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.sixLottoCorrect}개`
    );
  }

  //수익률 계산 함수
  calProfitRate(
    price,
    threeLottoCorrect,
    fourLottoCorrect,
    fiveLottoCorrect,
    fivePlusOneLottoCorrect,
    sixLottoCorrect
  ) {
    const prizeResult =
      5000 * threeLottoCorrect +
      50000 * fourLottoCorrect +
      1500000 * fiveLottoCorrect +
      300000000 * fivePlusOneLottoCorrect +
      2000000000 * sixLottoCorrect;
    const ProfitRate = (prizeResult / price) * 100;
    MissionUtils.Console.print(`총 수익률은 ${ProfitRate}% 입니다.`);
  }
}

export default App;
