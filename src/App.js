import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #orderPrice;
  #orderQuantity;
  #lottoOrder = [];

  getUserInput = async () => {
    let userInput = '';

    await MissionUtils.Console.readLineAsync('')
      .then((input) => {
        userInput = input;
      })
      .catch((err) => {
        throw new Error('[ERROR] : fail to get user input by console.');
      })

    return userInput;
  }

  stringToNumber = (userInput) => {
    const number = Number(userInput);

    if(isNaN(number)) throw new Error('[ERROR] : input is not a number.');

    return number;
  }

  checkIsValidPrice = (userInputNum) => {
    if(!Number.isInteger(userInputNum)) throw new Error('[ERROR] : input is not a integer');
    if(userInputNum <= 0) throw new Error('[ERROR] : pirce must greater than 0');
    if(userInputNum % 1000 != 0) throw new Error('[ERROR] : cannot divide price by 1,000');
  }

  setOrderPrice = (userInputPrice) => {
    this.#orderPrice = userInputPrice;
  }

  setOrderQuantity = (userInputPrice) => {
    this.#orderQuantity = userInputPrice/1000;
  }

  generateLottoNumbers = () => {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNumbers = lottoNumbers.sort((o1, o2) => o1 - o2);

    return sortedLottoNumbers;
  }

  printLottoOrder = () => {
    MissionUtils.Console.print(`\n${this.#orderQuantity}개를 구매했습니다.`);

    this.#lottoOrder.forEach((lottoNumbers) => {
      MissionUtils.Console.print(lottoNumbers);
    })
  }

  splitStringByComma = (userInputWinningNumbers) => {
    const stringPieces = userInputWinningNumbers.split(',');

    return stringPieces;
  }

  parseWinningNumbers = (WinningNumbers) => {
    const parsedString = WinningNumbers.split(',');

    const parsedWinnigNumbers = parsedString.map((string) => {
      return this.stringToNumber(string);
    })

    return parsedWinnigNumbers;
  }

  checkWinngNumbers = (parsedWinnigNumbers) => {
    if(parsedWinnigNumbers.length != 6) throw new Error('[ERROR] : the length of winning numbers is not 6.');

    parsedWinnigNumbers.forEach((winningNumber) => {
      if(!Number.isInteger(winningNumber)) throw new Error('[ERROR] : winning number must be integer.');

      if(winningNumber < 1 || winningNumber > 45) throw new Error('[ERROR] : winning number must be in range 1~45');
    })
  }




  async play() {
    try {
      MissionUtils.Console.print('구입금액을 입력해 주세요.');

      const userInput = await this.getUserInput();

      const userInputPrice = this.stringToNumber(userInput);

      this.checkIsValidPrice(userInputPrice);

      this.setOrderPrice(userInputPrice);
      this.setOrderQuantity(userInputPrice);

      for(let i = 0; i < this.#orderQuantity; i++) {
        const lottoNumbers = this.generateLottoNumbers();
        
        this.#lottoOrder.push(lottoNumbers);
      }

      this.printLottoOrder();

      MissionUtils.Console.print('당첨 번호를 입려해 주세요.');

      const winningNumbers = await this.getUserInput();

      const parsedWinnigNumbers = this.parseWinningNumbers(winningNumbers)

      this.checkWinngNumbers(parsedWinnigNumbers);

      MissionUtils.Console.print('보너스 번호를 입력해 주세요.');

      const bonusNumber = await this.getUserInput();

    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
