import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = [];
    this.prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      // 5+1: 30000000,
      6: 2000000000,
    };
  }

  //플레이
  async play() {
    await this.buyLottos();
  }

  //로또 구매 및 로또 장 수
  buyLottos() {
    const payment =
      MissionUtils.Console.readlineAsync("구입금액을 입력해주세요.");
    const numOfLottos = Math.floor(payment / 1000);

    MissionUtils.Console.print(`${numOfLottos} 장의 로또를 구매하였습니다.`);
  }
  //구매한 로또 수 만큼 로또 번호 생성
  generateLottoNumbers() {
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!lottoNumbers.includes(randomNumber)) {
        lottoNumbers.push(randomNumber);
      }
    }
    return lottoNumbers;
  }

  //pickedNumber

  //생성된 로또 번호와 구매한 로또 번호를 비교하여 결과 출력(6개 숫자, 보너스 숫자)
  compareNumbers() {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const picknum1 = [1, 2, 5, 7, 24, 35];
    let count = 0;
    lottoNumbers.forEach((element) => {
      if (picknum1.includes(element)) count++;
    });
    console.log("highligh");
    MissionUtils.Console.print(`${count}개 맞춤`);
  }

  // //상금 가져가기
  // // this.prizeMoney(count) {
  // count : prizeMoney.count //count수에 따른 상금
  // }
}

export default App;
