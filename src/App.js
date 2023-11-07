import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.lottoList = undefined;
    this.bonusNumber;
    this.winDetail = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };
  }
  async play() {
    await this.setLottoList();
    await this.inputWinNumber();
    await this.inputBonusNumber();
    this.printLottoList();
  }
  async buyLotto() {
    MissionUtils.Console.print(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );
    const money = await MissionUtils.Console.readLineAsync(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );
    // 유효성 검사 필요, money
    const LOTTO_PRICE = 1000;
    const lottoTiket = money / LOTTO_PRICE;
    MissionUtils.Console.print(`${lottoTiket}개를 구매했습니다.`);
    return lottoTiket;
  }
  async setLottoList() {
    this.lottoList = [];
    const lottoTiket = await this.buyLotto();
    const DRAW_COUNT = 6;
    for (let i = 0; i !== lottoTiket; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        DRAW_COUNT
      ).sort(function (a, b) {
        return a - b;
      });
      this.lottoList.push(lotto);
    }
    return;
  }
  async inputWinNumber() {
    MissionUtils.Console.print(
      "당첨 번호를 입력해주세요. \n 번호는 6개가 필요하며 쉼표(,)로 구분해서 한꺼번에 입력해주세요. \n 번호의 범위는 1에서 45까지이며 중복되어선 안됩니다."
    );
    let winNumber = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해주세요. \n 번호는 6개가 필요하며 쉼표(,)로 구분해서 한꺼번에 입력해주세요. \n 번호의 범위는 1에서 45까지이며 중복되어선 안됩니다."
    );

    const changeWinNumber = (element) => Number(element.trim());
    winNumber = winNumber.split(",").map(changeWinNumber);
    // 유효성 검사 필요, winNumber
    const lotto = new Lotto(winNumber);
    console.log(winNumber, lotto.getNumber());
  }
  async inputBonusNumber() {
    MissionUtils.Console.print(
      "보너스 번호를 입력해주세요. \n 번호의 범위는 1에서 45까지이며 당첨번호와 중복되어선 안됩니다."
    );
    let bonusNumber = Number(
      await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해주세요. \n 번호의 범위는 1에서 45까지이며 당첨번호와 중복되어선 안됩니다."
      )
    );
    console.log(bonusNumber);
  }
  validateBonusNumber() {}
  printLottoList() {
    console.log("printLottoList");
    console.log(this.lottoList);
    this.lottoList.forEach((element, index) => {
      MissionUtils.Console.print(
        index == 0
          ? `[${element.join().trim()}]`
          : `\n [${element.join().trim()}]`
      );
    });
  }
  setWinDetail() {}
  printResult() {
    const message = this.winDetail;
    MissionUtils.Console.print(`당첨 통계 \n --- \n `);
  }
  // reset(){}
}

export default App;
