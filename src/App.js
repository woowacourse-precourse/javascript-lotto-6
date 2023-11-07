import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #winMent = [
    "",
    "6개 일치 (2,000,000,000원) - ",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    "5개 일치 (1,500,000원) - ",
    "4개 일치 (50,000원) - ",
    "3개 일치 (5,000원) - ",
  ];
  #winMoney = [0, 2000000000, 30000000, 1500000, 50000, 5000, 0];

  async #getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  #changeMoneyToLottoCnt(money) {
    const lottoCnt = ~~(+money / 1000);
    MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
    return lottoCnt;
  }

  async #getUserMoney() {
    const input = await this.#getInput("구입금액을 입력해 주세요.");
    if (+input % 1000 !== 0)
      throw new error("[ERROR] 돈은 천원 단위로 입력해주세요");
    return this.#changeMoneyToLottoCnt(input);
  }

  async #getWinningNumber() {
    const input = await this.#getInput("당첨 번호를 입력해 주세요.");
    const winningNumbers = input.split(",").map((v) => +v);
    const validateNumbers = winningNumbers.every((num) => 0 < num && num <= 45);
    if (!validateNumbers || winningNumbers.length !== 6)
      throw new error("[ERROR] 로또 형식에 부합하지 않습니다.");
    return winningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
    const input = await this.#getInput("보너스 번호를 입력해 주세요.");
    const bonusNum = +input;
    if (!/^[0-9]+$/.test(input))
      throw new error("[ERROR] 숫자를 입력해 주세요");
    if (bonusNum < 1 || 45 < bonusNum)
      throw new error("[ERROR] 1~45 사이 수를 입력하세요");
    if (winningNumbers.includes(bonusNum))
      throw new error("[ERROR] 보너스 번호는 로또번호와 달라야 합니다.");
    return bonusNum;
  }

  #makeLottoAry(lottoCnt) {
    const ary = [...Array(lottoCnt)].map((_) => {
      const lotto = new Lotto();
      lotto.printLottoNum();
      return lotto;
    });
    return ary;
  }

  #printLottoResult(winInfoAry) {
    for (let i = 5; i > 0; i--) {
      MissionUtils.Console.print(`${this.#winMent[i]}${winInfoAry[i]}개`);
    }
  }

  #printRateOfReturn(winInfoAry, lottoCnt) {
    const money = lottoCnt * 1000;
    const amount = winInfoAry.reduce(
      (a, c, idx) => a + c * this.#winMoney[idx],
      0
    );
    const winAmount = Math.round((amount / money) * 100, 2);
    MissionUtils.Console.print(`총 수익률은 ${winAmount}% 입니다.`);
  }

  async play() {
    const lottoCnt = await this.#getUserMoney();
    const lottoAry = this.#makeLottoAry(lottoCnt);

    const winningNumbers = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    //각 인덱스에 결과 저장
    const winInfoAry = [0, 0, 0, 0, 0, 0, 0];
    lottoAry.forEach((lotto) => {
      const rank = lotto.checkLottoLank(winningNumbers, bonusNumber);
      winInfoAry[rank]++;
    });

    this.#printLottoResult(winInfoAry);
    this.#printRateOfReturn(winInfoAry, lottoCnt);
  }
}

export default App;
