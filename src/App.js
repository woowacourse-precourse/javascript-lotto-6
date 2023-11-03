import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const purchaseAmount = await MissionUtils.Console.readLineAsync();
    this.purchaseAmountValidation(purchaseAmount);

    const PurchaseQuantity = purchaseAmount / 1000;
    MissionUtils.Console.print(`${PurchaseQuantity}개를 구매했습니다.`);

  }

  // 로또 구입 금액 유효성 검사
  purchaseAmountValidation(purchaseAmount) {
    if(purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000원 단위로 입력해주세요.");
    }
  }

  // 로또 번호 생성
  generateLottoNumbers(PurchaseQuantity) { 
    return Array.from({ length : PurchaseQuantity }, () => {
      return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    })
  }
}

export default App;
