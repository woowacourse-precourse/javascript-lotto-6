class App {
  async play() {}

  async #getMoney() {
    const input = Console.readLineAsync("구입금액을 입력해 주세요.");
    const money = Number(input);
    if (Number.isNaN(money)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("1000원 단위로 입력해 주세요.");
    }
    return money;
  }
}

export default App;
