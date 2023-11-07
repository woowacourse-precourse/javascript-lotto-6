import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottoList = undefined;
    this.bonusNumber;
    this.winDetail;
  }
  async play() {
    this.setLottoList();
  }
  async buyLotto() {
    MissionUtils.Console.print(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );
    const money = await MissionUtils.Console.readLineAsync(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );

    const LOTTO_PRICE = 1000;
    const lottoTiket = money / LOTTO_PRICE;
    MissionUtils.Console.print(`${lottoTiket}개를 구매했습니다.`);
    return lottoTiket;
  }
  async setLottoList() {
    const lottoTiket = await this.buyLotto();

    this.lottoList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      lottoTiket
    ).sort(function (a, b) {
      return a - b;
    });

    return;
  }
  inputWinNumber() {}
  inputBonusNumber() {}
  drawLottoList() {}
  printLottoList() {}
  setWinDetail() {}
  printResult() {}
  // reset(){}
}

export default App;
