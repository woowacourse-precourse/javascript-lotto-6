class App {
  LOTTO_UNIT = 1000;
  LOTTO_REWARD = [0, 2000000, 30000, 1500, 50, 5];
  LOTTO_RULES = [
    "",
    "6개 일치",
    "5개 일치, 보너스 볼 일치",
    "5개 일치",
    "4개 일치",
    "3개 일치",
  ];

  async play() {
    const payment = await this.getPayment();
    const lottoCount = parseInt(payment / this.LOTTO_UNIT);
    const lottoList = this.getPickedLottoList(lottoCount);

    this.printPickedLotto(lottoCount, lottoList);
  async getPayment() {
    try {
      const payment =
        await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.validatePayment(payment);
      return payment;
    } catch (e) {
      Console.print(e.message);
      return this.getPayment();
    }
  }

  validatePayment(payment) {
    if (!/^\d+$/g.test(payment)) {
      throw new Error("[ERROR] 구입 금액은 숫자로 입력하셔야 합니다.");
    } else if (payment <= 0) {
      throw new Error("[ERROR] 구입 금액은 0원 이상 입력하셔야 합니다.");
    } else if (payment % this.LOTTO_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  getPickedLottoList(lottoCount) {
    const pickedLottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const pickedLotto = new Lotto(
        Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, INPUT_LENGTH)
      );
      pickedLottoList.push(pickedLotto);
    }
    return pickedLottoList;
  }

  printPickedLotto(lottoCount, lottoList = []) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumber()?.join(", ")}]`)
    );
  }
}

export default App;
