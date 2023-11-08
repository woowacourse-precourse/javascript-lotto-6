import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const LOTTO_PURCHASE = 1000;
const LOTTO_MINNUMBER = 1;
const LOTTO_MAXNUMBER = 45;
const LOTTO_LENGTH = 6;

const FIRST = 1;
const SECOND = 2;
const THIRD = 3;
const FOURTH = 4;
const FIFTH = 5;

class App {
  #purchase;
  #Lottos;
  #winningNums;
  #bonusNum;
  #result = new Array(6).fill(0);
  #resultPrice;

  async play() {
    await this.#inputPurchase();
    this.#purchaseLotto();
    this.#pirntPurchaseLotto(this.#Lottos);

    await this.#inputWinningNums();
    await this.#inputBonusNum();

    this.#caculateWinningPrice();
    this.#printWinningResult();
  }

  async #inputPurchase() {
    try {
      this.#purchase = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      if (isNaN(this.#purchase)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (this.#purchase % LOTTO_PURCHASE != 0) {
        throw new Error("[ERROR] 1,000원 단위가 아닙니다.");
      }
    } catch (e) {
      Console.print(e.message);
      await this.#inputPurchase();
    }
  }

  #purchaseLotto() {
    const purchaseLottos = this.#purchase / LOTTO_PURCHASE;
    this.#Lottos = new Array(purchaseLottos);

    Console.print(`\n${purchaseLottos}개를 구매했습니다.`);

    for (let i = 0; i < purchaseLottos; i++) {
      const randomLotto = Random.pickUniqueNumbersInRange(
        LOTTO_MINNUMBER,
        LOTTO_MAXNUMBER,
        LOTTO_LENGTH
      );
      this.#Lottos[i] = new Lotto(randomLotto).lottoNumbers;
    }
  }

  #pirntPurchaseLotto(lotto) {
    lotto.forEach((element) => {
      Console.print(`[${element.join(", ")}]`);
    });
  }

  async #inputWinningNums() {
    const nums = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    ).then((result) => {
      const splitNums = result.split(",");
      this.#winningNums = new Lotto(splitNums).lottoNumbers;
    });
  }

  async #inputBonusNum() {
    this.#bonusNum = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    if (this.#bonusNum > LOTTO_MAXNUMBER || this.#bonusNum < LOTTO_MINNUMBER) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    this.#winningNums.forEach((element) => {
      if (element == this.#bonusNum) {
        throw new Error("[ERROR] 당첨 번호와 중복됬습니다.");
      }
    });
  }

  #runWinningResult(lotto) {
    const winningResult = lotto.filter((element) =>
      this.#winningNums.includes(element)
    );

    const inBonus = lotto.includes(Number(this.#bonusNum));

    if (winningResult.length == 6) {
      this.#result[FIRST]++;
    } else if (winningResult.length == 5 && inBonus) {
      this.#result[SECOND]++;
    } else if (winningResult.length == 5 && !inBonus) {
      this.#result[THIRD]++;
    } else if (winningResult.length == 4) {
      this.#result[FOURTH]++;
    } else if (winningResult.length == 3) {
      this.#result[FIFTH]++;
    }
  }

  #caculateWinningPrice() {
    this.#Lottos.forEach((element) => {
      this.#runWinningResult(element);
    });
    this.#resultPrice =
      this.#result[FIRST] * 2000000000 +
      this.#result[SECOND] * 30000000 +
      this.#result[THIRD] * 1500000 +
      this.#result[FOURTH] * 50000 +
      this.#result[FIFTH] * 5000;
  }

  #printWinningResult() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.#result[FIFTH]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#result[FOURTH]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#result[THIRD]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result[SECOND]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#result[FIRST]}개`);
    Console.print(
      `총 수익률은 ${parseFloat(
        ((this.#resultPrice / this.#purchase) * 100).toFixed(2)
      )}%입니다.`
    );
  }
}

export default App;
