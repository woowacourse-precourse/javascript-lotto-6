import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchaseAmount = await this.purchasePrice();
  }

  async purchasePrice() {
    const priceInput = await Console.readLineAsync('구입금액을 입력해 주세요. \n');
    if (this.priceValidity(priceInput)) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }

    const numberOfLotto = ~~(priceInput / 1000);
    Console.print(`\n${numberOfLotto}개를 구매했습니다.`);

    for (let i = 0; i < numberOfLotto; i++) {
      const lottoNumbers = this.pickLottoNumbers();
      const randomLottoNumbers = lottoNumbers.sort((a, b) => a - b);
      Console.print(randomLottoNumbers);
    }
  }

  priceValidity(priceInput) {
    return priceInput % 1000 !== 0;
  }

  pickLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default App;
