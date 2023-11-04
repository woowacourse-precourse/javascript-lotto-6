import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #ticketCount;
  #lottoTickets;
  #winningNumbers;

  constructor() {
    this.#ticketCount;
    this.#lottoTickets = [];
    this.#winningNumbers = [];
  }

  async start() {
    await this.buyLotto();
    this.setLottoTickets(this.#lottoTickets, this.#ticketCount);
    this.printLottoTickets(this.#lottoTickets, this.#ticketCount);
    const numbers = await this.inputWinningNumbers();
    this.setWinningNumbers(numbers);
  }

  setTicketCount(count) {
    this.#ticketCount = count;
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  async buyLotto() {
    const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');

    const tempPrice = Number(inputPrice);
    this.#validateCost(tempPrice);
    const termTicketCount = tempPrice / 1000;
    this.setTicketCount(termTicketCount);
  }

  //validatePrice로 바꾸기
  #validateCost(price) {
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


  generateLottoNumbers(ticketCount) {
    const lotto = [];
    while (lotto.length < 6) {
      var number = Random.pickNumberInRange(1, 45);
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

  printLottoTickets(lottoTickets, count) {
    Console.print(`\n${count}개를 구매했습니다.`)
    lottoTickets.forEach(element => {
      Console.print(element.getNumbers());
    });
  }

  async inputWinningNumbers() {
    const inputNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = inputNumbers.split(',');
    this.#validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  #validateWinningNumbers(numbers) {
    const termNumbers = [];
    if(numbers.length != 6) {
      throw new Error("[ERROR] 입력된 숫자가 6개가 아닙니다.")
    }
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
}

export default LottoGame;
