import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {
    await this.startLotto();
  }

  /** 입력 받기 */
  async startLotto() {
    try {
      const purchase = await this.getPurchase();
      const lottoTickets = this.getLottoTicket(purchase);
      const lottoNumber = await this.getLottoNumber();
      const bonusNumber = await this.getBonusNumber();

      const result = this.getResult(lottoTickets, lottoNumber, bonusNumber);
    } catch (error) {

    }
  }

  /** 구입 금액 입력 */
  async getPurchase() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");

    try {
      purchaseValidation(input);
    } catch (error) {

    }
  }

  /** 구입 금액 입력값 검증 */
  purchaseValidation(input) {
    if (isNaN(input) || input <= 0 || input % 1000 !== 0) {
      throw new Error;
    }
  }

  /** 로또 생성 */
  getLottoTicket(purchase) {
    const amountTickets = purchase/1000;
    MissionUtils.Console.print(`${amountTickets}개를 구매했습니다.`)

    const lottoTickets = [];
    for (let i = 0; i < amountTickets; i++) {
      const lottoTicket = this.generateLotto();
      lottoTickets.push(lottoTicket);
    }
    return lottoTickets;
  }

  /** 랜덤 넘버 생성 */
  getRandomNumber() {
    const randomNumbers = [];
    // 6개의 랜덤 넘버 생성
    while (randomNumbers.length < 6) {
      const randomNumber = MissionUtils.Random.pickUniqueNumberInRange(1, 45);
      // 겹치지 않도록 검증
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  /** Lotto 클래스로 티켓 생성 */
  generateLotto() {
    const lottoTicket = this.getRandomNumber();
    return new Lotto(lottoTicket);
  }

  /** 당첨 번호 받기 */
  async getLottoNumber() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const lottoNumbers = input.split(",").map(Number);

    // 겹치지 않도록 검증

    return lottoNumbers;
  }

  /** 보너스 번호 받기 */
  async getBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const bonusNumber = parseInt(input);

    // 당첨 번호와 겹치지 않도록 검증

    return bonusNumber;
  }

  /** 결과 출력 */
  getResult(lottoTickets, lottoNumber, bonusNumber) {

  }
}

export default App;
