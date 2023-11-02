import Lotto from "./Lotto.js";

class App {
  #winningNumbers;
  #bonusNumber;
  #lottos = [];

  async play() {
    try {
      const purchaseAmount = await this.#inputPurchaseAmount();
      this.#generateLottos(purchaseAmount);
      this.#inputWinningNumbers();
      this.#inputBonusNumber();
      this.#calculateResults();
      this.#printResults();
    } catch (error) {
      console.error(error.message);
      this.play(); // 잘못된 입력 시 재시도
    }
  }

  async #inputPurchaseAmount() {
    // 여기에 사용자 입력을 받기
    // 입력받은 금액을 검증하기
  }

  #generateLottos(purchaseAmount) {
    const numberOfLottos = Math.floor(purchaseAmount / 1000);
    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = this.#generateRandomNumbers();
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return [...numbers];
  }

  // 당첨 번호, 보너스 번호 입력과 결과 계산 후 출력하기
}

export default App;
