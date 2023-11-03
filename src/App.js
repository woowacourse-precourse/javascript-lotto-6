class App {
class purchaseLotto {
  #amountOfLotto;
  constructor() {
    this.credit = 0;
    this.#amountOfLotto = 0;
  }
  async getCredit() {
    const input = Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.credit = input;
    return this.credit;
  }

  getAmountOfLotto() {
    this.#amountOfLotto = (this.credit / 1000).toFixed(2);
    console.log(this.#amountOfLotto);
    return this.#amountOfLotto;
  }

  printAmountOfLotto() {
    Console.print(`총 ${this.#amountOfLotto}개를 구매했습니다.`);
  }
}

export default App;
