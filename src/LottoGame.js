import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Input from "./UI/Input.js";
import Output from "./UI/Output.js";

const MIN_VALUE = 1;
const MAX_VALUE = 45;
const LOTTO_NUMBER_COUNT = 6;
const TICKET_PRICE = 1000;
const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;
const NO_PRIZE = 0;

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
    this.#purchaseAmount = await this.buyLotto();
    this.#ticketCount = this.#purchaseAmount / TICKET_PRICE;
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
        let tempPrice = LottoGame.validatePrice(inputPrice);
        return Number(tempPrice);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static validatePrice(price) {
    price = Number(price);
    if (price <= 0) {
      throw new Error("[ERROR] 구입 가능한 금액이 입력되지 않았습니다.")
    }
    if (isNaN(price)) {
      throw new Error("[ERROR] 구입 금액이 숫자가 아닙니다.")
    }
    if (!Number.isInteger(price)) {
      throw new Error("[ERROR] 구입 금액이 정수가 아닙니다.")
    }
    if (price % TICKET_PRICE !== 0) {
      throw new Error("[ERROR] 금액이 1,000원으로 나누어 떨어지지 않습니다.")
    }
    return price;
  }


  generateLottoNumbers() {
    let lotto = Random.pickUniqueNumbersInRange(MIN_VALUE, MAX_VALUE, LOTTO_NUMBER_COUNT);

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
        let winningNumbers = inputNumbers.split(',');
        winningNumbers = winningNumbers.map(Number);
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
        LottoGame.validateBonusNumbers(inputNumbers, winningNumbers);
        return inputNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static validateBonusNumbers(number, winningNumbers) {
    number = Number(number);
    if (isNaN(number) || number.toString() === '') {
      throw new Error("[ERROR] 숫자가 아닌 입력입니다.")
    }
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수가 아닌 입력입니다.")
    }
    if (number < MIN_VALUE || number > MAX_VALUE) {
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
    if (matchingCount === LOTTO_NUMBER_COUNT) {
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
    const prizeMoney = [FIRST_PRIZE, SECOND_PRIZE, THIRD_PRIZE, FOURTH_PRIZE, FIFTH_PRIZE, NO_PRIZE];

    const totalWinnings = winningResult.reduce((sum, count, index) => sum + prizeMoney[index] * count, 0);

    const profitRate = ((totalWinnings / purchaseAmount) * 100).toFixed(1);

    return profitRate;
  }
}

export default LottoGame;