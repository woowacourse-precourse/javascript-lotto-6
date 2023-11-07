import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #ticketCount;
  #lottoTickets;
  #winningTicket;
  #bonusNumber

  constructor() {
    this.#ticketCount;
    this.#lottoTickets = [];
    this.#winningTicket = [];
    this.#bonusNumber = "";
  }

  async start() {
    await this.buyLotto();
    this.setLottoTickets(this.#lottoTickets, this.#ticketCount);
    this.sortLottoTickets(this.#lottoTickets);
    this.printLottoTickets(this.#lottoTickets, this.#ticketCount);
    this.#winningTicket = await this.inputWinningNumbers();
    this.#bonusNumber = this.inputBonusNumbers(this.#winningTicket);
  }

  setTicketCount(count) {
    this.#ticketCount = count;
  }

  async buyLotto() {
    const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');

    const tempPrice = Number(inputPrice);
    this.#validatePrice(tempPrice);
    const termTicketCount = tempPrice / 1000;
    this.setTicketCount(termTicketCount);
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
      Console.print(element.getSortNumbers());
    });
  }

  async inputWinningNumbers() {
    const inputNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = inputNumbers.split(',');
    const winningTicket = new Lotto(winningNumbers);
    this.#validateWinningNumbers(winningTicket);
    return winningTicket.getSortNumbers();
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

}

export default LottoGame;
