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
  benefit;

  async play() {
    await this.gameStart();
    await this.gameProgress();
    this.gameOver();
  }

  async gameStart() {
    await this.getLottoPrice();
    this.checkLottos();
    this.printLottos();
  }

  async gameProgress() {
    await this.getLottoNumber();
    await this.getLottoBounce();
    this.checkLottoRank();
    this.printLottoRank();
  }

  gameOver() {
    this.checkLottoBenfit();
    this.printLottoBenfit();
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

  checkLottos() {
    const lottoPrice = this.lottos.getLottoPrice();

    for (let i = 0; i < lottoPrice / 1000; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      lotto = lotto.sort((a, b) => a - b);

      this.lottos.setLottos(lotto);
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

  checkLottoBenfit() {
    const ranks = this.rank;
    const prices = [0, 0, 0, 5000, 50000, 1500000, 2000000000, 30000000];
    const lottoPostPrice = this.lottos.getLottoPrice();
    let lottoGetPrice = 0;

    ranks.forEach((rank, index) => {
      lottoGetPrice += prices[index] * rank;
    });

    this.benefit = ((lottoGetPrice / lottoPostPrice) * 100).toFixed(1);
  }

  printLottoBenfit() {
    const totalBenfit = this.benefit;

    Console.print(RESULT_MESSAGE.benefit(totalBenfit));
  }

  printLottoRank() {
    const rank = this.rank;

    Console.print(RESULT_MESSAGE.rank(rank));
  }

  printLottos() {
    const lottos = this.lottos.getLottos();
    const lottoPrice = this.lottos.getLottoPrice();

    Console.print(RESULT_MESSAGE.count(lottoPrice / 1000));

    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].join(", ")}]`);
    }
  }
}

export default App;
