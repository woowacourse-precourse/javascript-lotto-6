import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #winningNumbers = [];

  constructor() {
    let count = 0;
    while(count <= 45) {
      this.#winningNumbers.push(false);
      count++;
    }
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

    if(isNaN(number)) throw new Error("[ERROR] : input is not a number.");

    return number;
  }

  checkIsValidPrice = (userInputNum) => {
    if(!Number.isInteger(userInputNum)) throw new Error('[ERROR] : input is not a integer');
    if(userInputNum <= 0) throw new Error('[ERROR] : pirce must greater than 0');
    if(userInputNum % 1000 != 0) throw new Error('[ERROR] : cannot divide price by 1,000');
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

  printLottoOrder = (lottoOrder) => {
    MissionUtils.Console.print(`\n${lottoOrder.length}개를 구매했습니다.`);

    lottoOrder.forEach((lottoNumbers) => {
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

  checkDuplicate = (winningNumbers) => {
    const duplicate = winningNumbers.filter((winningNumber, index) => {
      winningNumbers.indexOf(winningNumber) != index;
    })

    if(isNaN(duplicate)) throw new Error('[ERROR] : can not have duplicate number in winning numbers.');
  }

  checkWinngNumbers = (parsedWinnigNumbers) => {
    if(parsedWinnigNumbers.length != 6) throw new Error('[ERROR] : the length of winning numbers is not 6.');

    parsedWinnigNumbers.forEach((winningNumber) => {
      if(!Number.isInteger(winningNumber)) throw new Error('[ERROR] : winning number must be integer.');

      if(winningNumber < 1 || winningNumber > 45) throw new Error('[ERROR] : winning number must be in range 1~45');
    })

    this.checkDuplicate(parsedWinnigNumbers);
  }

  setWinningNumbers = (winningNumbers) => {
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

  getLottoRanking = (lottoNumbers, bonusNumber) => {
    let matchCount = 0;
    let bonusCount = 0;

    lottoNumbers.forEach((lottoNumber) => {
      if(this.#winningNumbers[lottoNumber]) matchCount++;
      if(lottoNumber == bonusNumber) bonusCount++;
    })

    return this.calculateLottoRanking(matchCount, bonusCount);
  }

  getLottoStat = (lottoOrder, bonusNumber) => {
    const lottoStats = [0, 0, 0, 0, 0, 0]
    lottoOrder.forEach((lottoNumbers) => {
      const rank = this.getLottoRanking(lottoNumbers, bonusNumber);

      lottoStats[rank]++;
    })

    return lottoStats;
  }

  printLottoStat = (lottoStat, rateOfEarn) => {
    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${lottoStat[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${lottoStat[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${lottoStat[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoStat[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${lottoStat[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${rateOfEarn * 100}%입니다.`);
  }

  getPrizeMoney = (lottoStat) => {
    let prizeMoney = 0;

    prizeMoney += 5000 * lottoStat[5];
    prizeMoney += 50000 * lottoStat[4];
    prizeMoney += 1500000 * lottoStat[3];
    prizeMoney += 30000000 * lottoStat[2];
    prizeMoney += 2000000000 * lottoStat[1];

    return prizeMoney;
  }

  getRateOfEarn = (prizeMoney, orderPrice) => {
    const rateOfEarn = prizeMoney / orderPrice;

    return rateOfEarn.toFixed(3);
  }

  generateLottoOrder = (orderQuantity) => {
    let count = 0;
    let lottoOrder = [];

    while(count < orderQuantity) {
      const lottoNumbers = this.generateLottoNumbers();
        
      lottoOrder.push(lottoNumbers);

      count++;
    }

    return lottoOrder;
  }

  getUserInputPrice = async () => {
    let userInputPrice;

    try{
      MissionUtils.Console.print('\n구입금액을 입력해 주세요.');

      const userInput = await this.getUserInput();
      userInputPrice = this.stringToNumber(userInput);

      this.checkIsValidPrice(userInputPrice);
    } catch(err) {
      MissionUtils.Console.print(err.message);

      userInputPrice = await this.getUserInputPrice();
    }

    return userInputPrice;
  }

  getUserInputWinningNumbers = async () => {
    let parsedWinnigNumbers;

    try {
      MissionUtils.Console.print('\n당첨 번호를 입려해 주세요.');

      const userInputWinningNumbers = await this.getUserInput();
      parsedWinnigNumbers = this.parseWinningNumbers(userInputWinningNumbers);

      this.checkWinngNumbers(parsedWinnigNumbers);
    } catch(err) {
      MissionUtils.Console.print(err.message);
      await this.getUserInputWinningNumbers();
    }

    return parsedWinnigNumbers;
  }

  getUserInputBonusNumber = async () => {
    let bonusNumber;

    try {
      MissionUtils.Console.print('\n보너스 번호를 입력해 주세요.');
  
      const userInputBonusNumber = await this.getUserInput();
      bonusNumber = this.stringToNumber(userInputBonusNumber);
      this.checkBonusNumber(bonusNumber);
    } catch(err) {
      MissionUtils.Console.print(err.message);
      bonusNumber = this.getUserInputBonusNumber();
    }

    return bonusNumber;
  }

  async play() {
    const orderPrice = await this.getUserInputPrice();
    const orderQuantity = orderPrice / 1000;
    const lottoOrder = this.generateLottoOrder(orderQuantity);

    this.printLottoOrder(lottoOrder);

    const winningNumbers = await this.getUserInputWinningNumbers();

    this.setWinningNumbers(winningNumbers);

    const bonusNumber = await this.getUserInputBonusNumber();
    const lottoStat = this.getLottoStat(lottoOrder, bonusNumber);
    const prizeMoney = this.getPrizeMoney(lottoStat);
    const rateOfEarn = this.getRateOfEarn(prizeMoney, orderPrice);

    this.printLottoStat(lottoStat, rateOfEarn);
  }
}

export default App;
