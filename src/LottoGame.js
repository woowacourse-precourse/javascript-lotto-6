import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Input from "./UI/Input.js";
import Output from "./UI/Output.js";

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

    this.input = new Input();
    this.output = new Output();
  }

  async start() {
    this.#purchaseAmount = await this.buyLotto(); //입력
    this.#ticketCount = this.#purchaseAmount / 1000;
    this.setLottoTickets(this.#lottoTickets, this.#ticketCount);  //이름 generateLottoTickets로 바꾸기
    this.#lottoTickets = this.sortLottoTickets(this.#lottoTickets);
    this.output.boughtTickets(this.#lottoTickets, this.#ticketCount);
    const inputWinningTicket = await this.inputWinningNumbers();
    this.#winningTicket = inputWinningTicket.map(number => Number(number));
    this.#bonusNumber = await this.inputBonusNumbers(this.#winningTicket);

    this.#winningResult = this.checkLottoResult(this.#lottoTickets, this.#winningTicket, this.#bonusNumber); 
    this.output.winningResults(this.#winningResult);

    this.#profitRate = this.calculateProfitRate(this.#winningResult, this.#purchaseAmount);
    this.output.profitRate(this.#profitRate);
  }

  async buyLotto() {
    while (true) {
      try {
        const inputPrice = await this.input.price();

        const tempPrice = Number(inputPrice);
        this.#validatePrice(tempPrice);
        return tempPrice;
      } catch (error) {
        Console.print(error.message);
      }
    }
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
    let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

    const lottoTicket = new Lotto(lotto);
    return lottoTicket;
  }

  setLottoTickets(lottoTickets, count) {
    while (lottoTickets.length < count) {
      const lottoNumbers = this.generateLottoNumbers();
      lottoTickets.push(lottoNumbers);
    }
  }

  sortLottoTickets(lottoTickets) {
    const sortedLottoTickets = [];
    [...lottoTickets].forEach(lottoTicket => {
      sortedLottoTickets.push(lottoTicket.getSortNumbers());
    });
    return sortedLottoTickets;
  }

  async inputWinningNumbers() {
    while (true) {
      try {
        const inputNumbers = await this.input.winningNumbers();
        const winningNumbers = inputNumbers.split(',');
        const winningTicket = new Lotto(winningNumbers);
        const sortedWinningTicket = winningTicket.getSortNumbers();
        return sortedWinningTicket;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonusNumbers(winningNumbers) {
    while (true) {
      try {
        const inputNumbers = await this.input.bonusNumber();
        this.#validateBonusNumbers(inputNumbers, winningNumbers);
        return inputNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
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
    if (winningNumbers.includes(number)) {
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
    } else if (matchingCount === 5) {
      result[1 + bonus] += 1
    } else if (matchingCount === 4) {
      result[3] += 1;
    } else if (matchingCount === 3) {
      result[4] += 1;
    }
    return result;
  }

  checkBonusResult(bonus, lottoTicket) {
    const bonusNumber = Number(bonus);
    return lottoTicket.includes(bonusNumber);
  }

  calculateProfitRate(winningResult, purchaseAmount) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000, 0];

    const totalWinnings = winningResult.reduce((sum, count, index) => sum + prizeMoney[index] * count, 0);

    const profitRate = ((totalWinnings / purchaseAmount) * 100).toFixed(1);

    return profitRate;
  }
}

export default LottoGame;