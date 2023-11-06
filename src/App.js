import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #orderPrice;
  #orderQuantity;
  #lottoOrder;
  #winningNumbers;
  #bonusNumber;
  #lottoStat;
  #prizeMoney;
  #rateOfEarn;

  constructor() {
    this.#lottoOrder = [];
    this.#winningNumbers = [];
    this.#lottoStat = [0, 0, 0, 0, 0, 0];
  }

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

  lottoNumbersToString = (lottoNumbers) => {
    const string = `[${lottoNumbers[0]}, ${lottoNumbers[1]}, ${lottoNumbers[2]}, ${lottoNumbers[3]}, ${lottoNumbers[4]}, ${lottoNumbers[5]}]`;

    return string;
  }

  printLottoOrder = () => {
    MissionUtils.Console.print(`\n${this.#orderQuantity}개를 구매했습니다.`);

    this.#lottoOrder.forEach((lottoNumbers) => {
      MissionUtils.Console.print(this.lottoNumbersToString(lottoNumbers));
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

  setWinningNumbers = (winningNumbers) => {
    let count = 0;
    while(count <= 45) {
      this.#winningNumbers.push(false);
      count++;
    }

    winningNumbers.forEach((winningNumber) => {
      this.#winningNumbers[winningNumber] = true;
    })
  }

  checkBonusNumber = (bonusNumber) => {
    if(!Number.isInteger(bonusNumber)) throw new Error('[ERROR] : bonus number must be integer.');

    if(bonusNumber < 1 || bonusNumber > 45) throw new Error('[ERROR] : bonus number must be in range 1~45');

    this.#winningNumbers.forEach((winningNumber) => {
      if(winningNumber == bonusNumber) throw new Error('[ERROR] : bonus number can not be duplicated with winning numbers.')
    })
  }

  calculateLottoRanking = (matchCount, bonusCount) => {
    if(matchCount == 3) return 5;
    if(matchCount == 4) return 4;
    if(matchCount == 5 && bonusCount == 1) return 2;
    if(matchCount == 5) return 3;
    if(matchCount == 6) return 1;

    return 0;
  }

  getLottoRanking = (lottoNumbers) => {
    let matchCount = 0;
    let bonusCount = 0;

    lottoNumbers.forEach((lottoNumber) => {
      if(this.#winningNumbers[lottoNumber]) matchCount++;
      if(lottoNumber == this.#bonusNumber) bonusCount++;
    })

    return this.calculateLottoRanking(matchCount, bonusCount);
  }

  getLottoStat = () => {
    this.#lottoOrder.forEach((lottoNumbers) => {
      const rank = this.getLottoRanking(lottoNumbers);

      this.#lottoStat[rank]++;
    })
  }

  setPrizeMoney = () => {
    let prizeMoney = 0;

    prizeMoney += 5000 * this.#lottoStat[5];
    prizeMoney += 50000 * this.#lottoStat[4];
    prizeMoney += 1500000 * this.#lottoStat[3];
    prizeMoney += 30000000 * this.#lottoStat[2];
    prizeMoney += 2000000000 * this.#lottoStat[1];

    this.#prizeMoney = prizeMoney;
  }

  getRateOfEarn = () => {
    const rateOfEarn = this.#prizeMoney / this.#orderPrice;

    this.#rateOfEarn = rateOfEarn.toFixed(1);
  }

  setLottoOrder = () => {
    let count = 0;

    while(count < this.#orderQuantity) {
      const lottoNumbers = this.generateLottoNumbers();
        
      this.#lottoOrder.push(lottoNumbers);

      count++;
    }
  }

  async play() {
    try {
      MissionUtils.Console.print('구입금액을 입력해 주세요.');

      const userInput = await this.getUserInput();
      const userInputPrice = this.stringToNumber(userInput);

      this.checkIsValidPrice(userInputPrice);
      this.setOrderPrice(userInputPrice);
      this.setOrderQuantity(userInputPrice);
      this.setLottoOrder();
      this.printLottoOrder();

      MissionUtils.Console.print('당첨 번호를 입려해 주세요.');

      const userInputWinningNumbers = await this.getUserInput();
      const parsedWinnigNumbers = this.parseWinningNumbers(userInputWinningNumbers);

      this.checkWinngNumbers(parsedWinnigNumbers);
      this.setWinningNumbers(parsedWinnigNumbers);

      MissionUtils.Console.print('보너스 번호를 입력해 주세요.');

      const userInputBonusNumber = await this.getUserInput();
      const bonusNumber = this.stringToNumber(userInputBonusNumber);

      this.checkBonusNumber(bonusNumber);
      
      this.getLottoStat();
      this.setPrizeMoney();
      this.getRateOfEarn();

      console.log(this.#rateOfEarn);

    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
