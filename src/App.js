import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //구입 금액 입력받기
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const totalCost = await MissionUtils.Console.readLineAsync("");

    //구입 금액 예외 처리 - 1) 숫자가 아닐 때
    if (isNaN(totalCost) === true) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }

    //구입 금액 예외 처리 - 2) 1000원 단위가 아닐 때
    if (Number(totalCost) % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위 금액을 입력해야 합니다.");
    }

    // 구매 개수 만큼 추첨 번호 생성 및 출력
    const boughtLottoCount = totalCost / 1000;
    const totalLottoNumList = [];
    MissionUtils.Console.print(`${boughtLottoCount}개를 구매했습니다.`);
    for (let i = 0; i < boughtLottoCount; i++) {
      const nowLottoNumList = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      MissionUtils.Console.print(nowLottoNumList);
      totalLottoNumList.push(nowLottoNumList);
    }

    // 당첨 번호 및 보너스 번호 입력 받기
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const winnigNum = await MissionUtils.Console.readLineAsync("");
    const winningNumList = winnigNum.split(",");

    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonusNum = await MissionUtils.Console.readLineAsync("");
  }
}

export default App;
