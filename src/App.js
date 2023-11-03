import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.purchasePrice = 0;
    this.purchaseCount = 0;
    this.randomLottoNumber = [];
  }
  async play() {
    this.purchasePrice = await this.inputPurchasePrice();
    this.isValidInputPrice = this.isValidInputPrice();
    this.printPriceError(this.isValidInputPrice);
    this.purchaseCount = this.calculatePurchaseCount();
    this.printPurchaseCount();

    while (this.purchaseCount > 0) {
      this.createLottoNumber();
      this.purchaseCount -= 1;
    }

    this.printRandomNumArr();
    this.inputmyLottoNum = await this.inputMyLottoNumber();
    this.convertStrToArr = this.convertToArr(this.inputmyLottoNum);
  }
  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }

  isValidInputPrice() {
    return this.purchasePrice % 1000 === 0;
  }
  printPriceError(isValid) {
    if (!isValid) {
      throw new Error("[ERROR] 1,000원 단위의 금액을 입력해 주세요.");
    }
  }

  calculatePurchaseCount() {
    return this.purchasePrice / 1000;
  }

  printPurchaseCount() {
    Console.print(`${this.purchaseCount}개를 구매했습니다.`);
  }
  createLottoNumber() {
    this.randomLottoNumber.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  printRandomNumArr() {
    this.randomLottoNumber.forEach((_, index) => {
      Console.print(this.randomLottoNumber[index]);
    });
  }
  async inputMyLottoNumber() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input;
  }
  convertToArr(myInputNum) {
    return myInputNum.split(",").map((element) => parseInt(element));
  }
}

export default App;
