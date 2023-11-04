import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const lottoPrice = await this.totalPrice();
    const lottoTickets = this.totalLottoTickets(lottoPrice); 
    const winningNumbers = await this.winningNumber(); 
  }

  async totalPrice() {
    const priceInput = await Console.readLineAsync('구입금액을 입력해 주세요. \n');
    if (this.inputPriceValidity(priceInput)) {
      throw new Error("[ERROR] 구입 금액이 잘못된 형식입니다.");
    }
    return priceInput;
  }

  inputPriceValidity(priceInput) {
    const unitError = priceInput % 1000;
    return unitError !== 0;
  }

  totalLottoTickets(lottoPrice) {
    const unitLottoNumbers = ~~(lottoPrice / 1000);
    this.lottoTotalMessage(unitLottoNumbers);
    const lottoTickets = [];
    for (let i = 0; i < unitLottoNumbers; i++) {
      const randomLottoNumbers = this.randomNumbers();
      const lottoNumbers = randomLottoNumbers.sort((a, b) => a - b);
      lottoTickets.push(lottoNumbers);
      Console.print(lottoNumbers); 
    }
    return lottoTickets;
  }

  lottoTotalMessage(unitLottoNumbers) {
    Console.print(`\n${unitLottoNumbers}개를 구매했습니다.`);
  }

  randomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async winningNumber() {
    const winningNumberInput = await Console.readLineAsync('당첨 번호를 입력해 주세요. \n');
    const lottoNumbers = winningNumberInput.split(',').map(Number);
    if (!this.inputNumbersValidity(winningNumberInput)) {
      throw new Error("[ERROR] 당첨 번호가 잘못된 형식입니다.");
    }
    return lottoNumbers;
  }

  inputNumbersValidity(lottoNumbers) {
    const Numbers = lottoNumbers.split(',').map(Number);
    const uniqueNumbers = Array.from(new Set(Numbers));
    const lengthError = Numbers.length !== 6;
    const rangeError = Numbers.some(number => number < 1 || number > 45);
    const overlapError = uniqueNumbers.length !== 6
    return (!lengthError && !rangeError && !overlapError) 
  }
}

export default App;