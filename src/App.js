import { Console, Random } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/inputMessage.js";
import { RESULT_MESSAGE } from "./constants/resultMessage.js";
import Lottos from "./Lottos.js";
import Lotto from "./Lotto.js";
import Bounce from "./Bounce.js";

class App {
  lottos;
  lotto;
  bounce;
  rank;

  async play() {
    await this.gameStart();
    await this.gameProgress();
  }

  async gameStart() {
    await this.getLottoPrice();
    this.printLottos();
  }

  async gameProgress() {
    await this.getLottoNumber();
    await this.getLottoBounce();
    this.checkLottoRank();
    this.printLottoRank();
  }

  async getLottoPrice() {
    const lottoPriceInput = await Console.readLineAsync(INPUT_MESSAGE.price);

    try {
      this.lottos = new Lottos(lottoPriceInput);
    } catch (error) {
      Console.print(error.message);
      await this.getLottoPrice();
    }
  }

  async getLottoNumber() {
    const lottoNumberInput = await Console.readLineAsync(INPUT_MESSAGE.numbers);

    try {
      this.lotto = new Lotto(lottoNumberInput.split(","));
    } catch (error) {
      Console.print(error.message);
      await this.getLottoNumber();
    }
  }

  async getLottoBounce() {
    const bounceInput = await Console.readLineAsync(INPUT_MESSAGE.bounceNumber);

    try {
      this.bounce = new Bounce(bounceInput);
    } catch (error) {
      Console.print(error.message);
      await this.getLottoBounce();
    }
  }

  checkLottoRank() {
    const lottos = this.lottos.getLottos();
    const result = [0, 0, 0, 0, 0, 0, 0, 0];

    lottos.forEach((lotto) => {
      const lottoCount = this.checkLottoCount(lotto);
      const bounceCount = this.checkBounceCount(lotto, lottoCount);

      if (bounceCount) result[7] += 1;

      if (!bounceCount) result[lottoCount] += 1;
    });

    this.rank = result;
  }

  checkLottoCount(target) {
    let lottoCount = 0;
    const lotto = this.lotto.getLotto();

    lotto.forEach((element) => {
      if (target.includes(element)) lottoCount += 1;
    });

    return lottoCount;
  }

  checkBounceCount(target, lottoCount) {
    let bouncCount = false;
    const bounce = this.bounce.getBounce();

    if (lottoCount === 5 && target.includes(bounce)) {
      bouncCount = true;
    }

    return bouncCount;
  }

  printLottoRank() {
    const rank = this.rank;

    Console.print(RESULT_MESSAGE.rank(rank));
  }

  printLottos() {
    const lottoPrice = this.lottos.getLottoPrice();

    Console.print(RESULT_MESSAGE.count(lottoPrice / 1000));

    for (let i = 0; i < lottoPrice / 1000; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      lotto = lotto.sort((a, b) => a - b);

      Console.print(`[${lotto.join(", ")}]`);

      this.lottos.setLottos(lotto);
    }
  }
}

export default App;
