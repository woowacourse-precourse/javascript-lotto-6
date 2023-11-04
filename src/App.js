import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() { }
  
  async purchasePrice() {
    const priceInput = await Console.readLineAsync('구입금액을 입력해 주세요. \n');
    if (this.priceValidity(priceInput)) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    };
    return priceInput;
  };
  
  priceValidity(priceInput) {
    return priceInput % 1000 !== 0;
  }
}

export default App;
