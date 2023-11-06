import { Console } from "@woowacourse/mission-utils";
import LottoValidate from "./LottoValidate.js";
import GenerateLottoNumbers from "./GenerateLottoNumbers.js";
import Lotto from "../Lotto.js";

class LottoMain {
  userLotto;

  constructor() {
    this.lottoValidate = new LottoValidate();
  }

  async start() {
    const userCost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const money = parseInt(userCost);
    this.lottoValidate.userCostValidate(money);
    this.lottoBuy(money);
  }

  lottoBuy(money) {
    this.generateLotto = new GenerateLottoNumbers();
    const [lottoCount, lottoArr] = this.generateLotto.lottoNumberInfo(money);
    Console.print("");
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    Console.print("");
    this.userLotto = lottoArr;
    this.lottoWin();
  }

  async lottoWin() {
    const winningNumber = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    const numbers = winningNumber.split(",").map((number) => {
      this.lottoValidate.winnerValidate(number);
      return parseInt(number);
    });

    new Lotto(numbers);
    this.winningNumber = numbers;
    this.lottoBonus();
  }

  async lottoBonus() {
    Console.print("");
    const number = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = parseInt(number);

    this.lottoValidate.bonusValidate(bonusNumber, this.winningNumber);
  }
}

export default LottoMain;
