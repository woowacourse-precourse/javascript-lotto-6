class App {
  async play() {
    //구입 금액 입력받기
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const totalCost = await MissionUtils.Console.readLineAsync("");
  }
}

export default App;
