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
  
  stringToNumber = (numberString) => {
    const number = Number(numberString);
  
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

  generateLottoOrder = (orderQuantity) => {
    let count = 0;
    let lottoOrder = [];

    while(count < orderQuantity) {
      const lotto = new Lotto(this.generateLottoNumbers());
        
      lottoOrder.push(lotto);

      count++;
    }

    return lottoOrder;
  }

  printLottoOrder = (lottoOrder) => {
    MissionUtils.Console.print(`\n${lottoOrder.length}개를 구매했습니다.`);

    lottoOrder.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toString());
    })
  }

  parseWinningNumbers = (userInputWinningNumbers) => {
    const parsedString = userInputWinningNumbers.split(',');

    const parsedWinnigNumbers = parsedString.map((string) => {
      return this.stringToNumber(string);
    })

    return parsedWinnigNumbers;
  }

  setWinningNumbers = (lotto) => {
    lotto.getNumbers().forEach((lottoNumber) => {
      this.#winningNumbers[lottoNumber] = true;
    })
  }

  checkBonusNumber = (bonusNumber, winningNumbers = this.#winningNumbers) => {
    if(!Number.isInteger(bonusNumber)) throw new Error('[ERROR] : bonus number must be integer.');

    if(bonusNumber < 1 || bonusNumber > 45) throw new Error('[ERROR] : bonus number must be in range 1~45');

    if(winningNumbers[bonusNumber]) throw new Error('[ERROR] : bonus number must be distinct with winning numbers.');
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
    const lottoStats = [0, 0, 0, 0, 0, 0];

    lottoOrder.forEach((lotto) => {
      const rank = this.getLottoRanking(lotto.getNumbers(), bonusNumber);

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

  getUserInputPrice = async () => {
    let userInputPrice;

    while(1) {
      try{
        MissionUtils.Console.print('\n구입금액을 입력해 주세요.');
  
        const userInput = await this.getUserInput();
        userInputPrice = this.stringToNumber(userInput);
  
        this.checkIsValidPrice(userInputPrice);
        break;
      } catch(err) {
        MissionUtils.Console.print(err.message);
      }
    }

    return userInputPrice;
  }

  getUserInputWinningNumbers = async () => {
    let lotto;

    while(1) {
      try {
        MissionUtils.Console.print('\n당첨 번호를 입력해 주세요.');
  
        const userInputWinningNumbers = await this.getUserInput();
        const parsedWinnigNumbers = this.parseWinningNumbers(userInputWinningNumbers);
        lotto = new Lotto(parsedWinnigNumbers);

        break;
      } catch(err) {
        MissionUtils.Console.print(err.message);
      }
    }

    return lotto;
  }

  getUserInputBonusNumber = async () => {
    let bonusNumber;

    while(1) {
      try {
        MissionUtils.Console.print('\n보너스 번호를 입력해 주세요.');
    
        const userInputBonusNumber = await this.getUserInput();
        bonusNumber = this.stringToNumber(userInputBonusNumber);

        this.checkBonusNumber(bonusNumber);
        break;
      } catch(err) {
        MissionUtils.Console.print(err.message);
      }
    }

    return bonusNumber;
  }

  async play() {
    const orderPrice = await this.getUserInputPrice();
    const orderQuantity = orderPrice / 1000;
    const userLottoOrder = this.generateLottoOrder(orderQuantity);

    this.printLottoOrder(userLottoOrder);

    const lotto = await this.getUserInputWinningNumbers();

    this.setWinningNumbers(lotto);

    const bonusNumber = await this.getUserInputBonusNumber();
    const lottoStat = this.getLottoStat(userLottoOrder, bonusNumber);
    const prizeMoney = this.getPrizeMoney(lottoStat);
    const rateOfEarn = this.getRateOfEarn(prizeMoney, orderPrice);

    this.printLottoStat(lottoStat, rateOfEarn);
  }
}

export default App;
