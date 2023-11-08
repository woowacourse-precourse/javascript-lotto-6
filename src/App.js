class App {
  async play() {}
  async play() {
    const payment = await this.getPayment();
    const lottoCount = parseInt(payment / this.LOTTO_UNIT);
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
}

export default App;
