import { Console } from "@woowacourse/mission-utils";
import LottoValidate from "./LottoValidate.js";
import GenerateLottoNumbers from "./GenerateLottoNumbers.js";
import Lotto from "../Lotto.js";
import IsResult from "./IsResult.js";
import { LOTTO_MESSAGE } from "./constant.js";

class LottoMain {
  userLotto = []

  constructor() {
    this.lottoValidate = new LottoValidate();
  }

  async start() {
    const userCost = await Console.readLineAsync( LOTTO_MESSAGE.BUY_LOTTO );
    const money = parseInt(userCost);
    this.money = money;
    try {
      this.lottoValidate.userCostValidate(money)
      this.lottoBuy(money);
    }
    catch(e) {
      Console.print(e.message)
      return this.start()
    }
  }

  lottoBuy(money) {
    this.generateLotto = new GenerateLottoNumbers();
    const [lottoCount, lottoArr] = this.generateLotto.lottoNumberInfo(money);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    this.userLotto = lottoArr;
    this.lottoWin();
  }

  async lottoWin() {
    const winningNumber = await Console.readLineAsync(
      LOTTO_MESSAGE.WINNING_NUMBERS
    );

    const numbers = winningNumber.split(",").map((number) => {
      return parseInt(number);
    });

    try {
      new Lotto(numbers);
      this.winningNumber = numbers;
      this.lottoBonus();
    }
    catch(e) {
      Console.print(e.message)
      return this.lottoWin()
    }
  }

  async lottoBonus() {
    const number = await Console.readLineAsync(
      LOTTO_MESSAGE.BONUS_NUMBERS
    );
    const bonusNumber = parseInt(number);

    try {
      this.lottoValidate.bonusValidate(bonusNumber, this.winningNumber);
      this.isResult = new IsResult(this.userLotto,this.winningNumber, bonusNumber, this.money);
      this.isResult.resultTitle()
    } catch(e) {
      Console.print(e.message)
      return this.lottoBonus();
    }
  }
}

export default LottoMain;
