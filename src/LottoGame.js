import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #purchaseAmount
  #ticketCount;
  #lottoTickets;
  #winningTicket;
  #bonusNumber
  #winningResult;
  #profitRate;

  constructor() {
    this.#purchaseAmount = 0;
    this.#ticketCount = 0;
    this.#lottoTickets = [];
    this.#winningTicket = [];
    this.#bonusNumber = "";
    this.#winningResult = [];
    this.#profitRate = 0.0;
  }

  async start() {
    this.#purchaseAmount = await this.buyLotto();
    this.#ticketCount = this.#purchaseAmount / 1000;
    this.setLottoTickets(this.#lottoTickets, this.#ticketCount);
    this.#lottoTickets = this.sortLottoTickets(this.#lottoTickets);
    this.printLottoTickets(this.#lottoTickets, this.#ticketCount);
    const inputWinningTicket = await this.inputWinningNumbers();
    this.#winningTicket = inputWinningTicket.map(number => Number(number));
    this.#bonusNumber = await this.inputBonusNumbers(this.#winningTicket);

    this.#winningResult = this.checkLottoResult(this.#lottoTickets, this.#winningTicket, this.#bonusNumber);
    this.printWinningResults(this.#winningResult);

    this.#profitRate = this.calculateProfitRate(this.#winningResult, this.#purchaseAmount);
    this.printProfitRate(this.#profitRate);
  }

  setTicketCount(count) {
    this.#ticketCount = count;
  }

  async buyLotto() {
    const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');

    const tempPrice = Number(inputPrice);
    this.#validatePrice(tempPrice);
    return tempPrice;
  }

  #validatePrice(price) {
    if (price <= 0) {
      throw new Error("[ERROR] 구입 가능한 금액이 입력되지 않았습니다.")
    }
    if (isNaN(price)) {
      throw new Error("[ERROR] 구입 금액이 숫자가 아닙니다.")
    }
    if (!Number.isInteger(price)) {
      throw new Error("[ERROR] 구입 금액이 정수가 아닙니다.")
    }
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 금액이 1,000원으로 나누어 떨어지지 않습니다.")
    }
  }


  generateLottoNumbers() {
    let lotto = [];
    while (lotto.length < 6) {
      let number = Random.pickNumberInRange(1, 45);
      if (!lotto.includes(number)) {
        lotto.push(number);
      }
    }
    const lottoTicket = new Lotto(lotto);
    return lottoTicket;
  }

  setLottoTickets(lottoTickets, count) {
    while (lottoTickets.length < count) {
      const lottoNumbers = this.generateLottoNumbers();
      lottoTickets.push(lottoNumbers);
    }
  }

  sortLottoTickets(lottoTickets, count) {
    const sortedLottoTickets = [];
    [...lottoTickets].forEach(lottoTicket => {
      sortedLottoTickets.push(lottoTicket.getSortNumbers());
    });
    return sortedLottoTickets;
  }

  printLottoTickets(lottoTickets, count) {
    Console.print(`\n${count}개를 구매했습니다.`)
    lottoTickets.forEach(element => {
      Console.print(element);
    });
  }

  async inputWinningNumbers() {
    const inputNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = inputNumbers.split(',');;
    const winningTicket = new Lotto(winningNumbers);
    const sortedWinningTicket = winningTicket.getSortNumbers();
    this.#validateWinningNumbers(sortedWinningTicket);
    return sortedWinningTicket;
  }

  #validateWinningNumbers(numbers) {
    const termNumbers = [];
    numbers.forEach(number => {
      number = Number(number);
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자가 아닌 입력이 있습니다.")
      }
      if (!Number.isInteger(number)) {
        throw new Error("[ERROR] 정수가 아닌 입력이 있습니다.")
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1부터 45 사이의 숫자가 아닌 입력이 있습니다.")
      }
      if (termNumbers.includes(number)) {
        throw new Error("[ERROR] 중복된 숫자가 있습니다.")
      }

      termNumbers.push(number);
    });
  }

  async inputBonusNumbers(winningNumbers) {
    const inputNumbers = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    this.#validateBonusNumbers(inputNumbers, winningNumbers);
    return inputNumbers;
  }

  #validateBonusNumbers(number, winningNumbers) {
    number = Number(number);
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자가 아닌 입력입니다.")
    }
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수가 아닌 입력입니다.")
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1부터 45 사이의 숫자가 아닌 입력입니다.")
    }
    if (winningNumbers.includes(number.toString())) {
      throw new Error("[ERROR] 당첨 번호와 중복된 숫자가 있습니다.")
    }
  }

  checkLottoResult(lottoTickets, winningTicket, bonus) {
    let winningResult = [0, 0, 0, 0, 0];
    lottoTickets.forEach(lottoTicket => {
      const checkedBonus = this.checkBonusResult(bonus, lottoTicket);
      const matchedNumbers = lottoTicket.filter(number => winningTicket.includes(number))
      const matchingCount = matchedNumbers.length;
      winningResult = this.calculateWinningResults(winningResult, matchingCount, checkedBonus);
    })
    return winningResult;
  }

  calculateWinningResults(winningResult, matchingCount, checkedBonus) {
    let bonus = checkedBonus ? 0 : 1
    let result = [...winningResult];
    if (matchingCount === 6) {
      result[0] += 1;
    }
    if (matchingCount === 5) {
      result[1 + bonus] += 1
    }
    if (matchingCount === 4) {
      result[3] += 1;
    }
    if (matchingCount === 3) {
      result[4] += 1;
    }
    return result;
  }

  checkBonusResult(bonus, lottoTicket) {
    const bonusNumber = Number(bonus);
    return lottoTicket.includes(bonusNumber);
  }

  printWinningResults(winningResult) {
    const prizeMoney = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];
    const matchCountList = [3, 4, 5, 5, 6];
    const reversedWinningResult = [...winningResult].reverse();
    reversedWinningResult.forEach((result, index) => {
      let bonusText = '';
      if (index === 3) {
        bonusText = ' 보너스 볼 일치';
      }
      Console.print(`${matchCountList[index]}개 일치,${bonusText} (${prizeMoney[index]}원) -${result}개`)
    });
  }

  calculateProfitRate(winningResult, purchaseAmount) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000,  0];

    const totalWinnings = winningResult.reduce((sum, count, index) => sum + prizeMoney[index] * count, 0);
  
    const profit = totalWinnings - purchaseAmount;
    const profitRate = ((profit / purchaseAmount) * 100).toFixed(1);
    
    return profitRate;
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoGame;
