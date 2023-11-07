import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let income = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    this.getIncomeError(income);
  }

  //함수: 로또구입금액을 입력받고, 1000단위가 아닐 경우 예외처리
  async getIncomeError(income) {
    let income_num = Number(income);
    if (isNaN(income_num))
      throw new Error("[ERROR] 구입 금액은 숫자를 입력해주세요");
    if (income_num % 1000 != 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  }
}

export default App;
