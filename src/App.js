class App {
  async play() {
    //구입 금액 입력받기
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const totalCost = await MissionUtils.Console.readLineAsync("");

    //구입 금액 예외 처리 - 1) 숫자가 아닐 때
    if (Number.isNaN(totalCost) === true) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }
  }
}

export default App;
