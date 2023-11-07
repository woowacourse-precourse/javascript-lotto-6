import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #lottos = [];

  // TODO: 로또 구매 및 당첨 결과 출력
  async play() {
    try {
      const purchaseAmount = await this.#askPurchaseAmount();
      this.#lottos = this.#purchaseLottos(purchaseAmount);
      this.#printLottos(this.#lottos);

      const winningNumbers = await this.#askWinningNumbers();
      const bonusNumber = await this.#askBonusNumber();
      const results = this.#checkResults(winningNumbers, bonusNumber);
      const profitRate = this.#calculateProfitRate(purchaseAmount, results);

      this.#printResults(results);
      this.#printProfitRate(profitRate);
    } catch (error) {
      console.error("[ERROR]", error); // 두 번째 인수로 에러 객체를 전달
    }
  }
  // TODO: 구입 금액이 유효한지 검증
  async #askPurchaseAmount() {
    const amount = await MissionUtils.Console.readLine("구입금액을 입력해 주세요.");
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return parseInt(amount, 10);
  }
  // TODO: 구매한 로또 목록 생성
  #purchaseLottos(amount) {
    const lottoCount = amount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }
  
  // TODO: 구매한 로또 목록 출력
  #printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`));
  }

  // TODO: 당첨 번호가 유효한지 검증
  async #askWinningNumbers() {
    const input = await MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.");
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    return numbers;
  }

  // TODO: 보너스 번호가 당첨 번호에 포함되는지 검증
  async #askBonusNumber() {
    const input = await MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.");
    const bonusNumber = parseInt(input.trim(), 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호가 잘못되었습니다.");
    }
    return bonusNumber;
  }
}
export default App;