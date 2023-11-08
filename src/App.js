import { generateLottoTicket, Lotto } from './Lotto';

class App {
  constructor() {
    this.lottoTickets = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  async buyLotto() {
    const purchaseAmount = await this.getInput('구입금액을 입력해 주세요.');
    const numTickets = Math.floor(purchaseAmount / 1000);
    if (numTickets <= 0) {
      console.error('[ERROR] 로또를 구입하기 위한 금액이 부족합니다.');
      return;
    }

    this.lottoTickets = Array.from({ length: numTickets }, () => generateLottoTicket());

    this.printLottoNumbers();
  }

  async inputWinningNumbers() {
    this.winningNumbers = (await this.getInput('당첨 번호를 입력해 주세요. (1~45까지의 숫자 중 6개를 입력하세요)'))
      .split(',')
      .map(Number);
    this.bonusNumber = Number(await this.getInput('보너스 번호를 입력해 주세요. (1~45까지의 숫자 중 하나를 입력하세요)'));

    this.checkWinning();
  }

  validateWinningNumbers(numbers) {
    return numbers.length === 6 && numbers.every(number => 1 <= number && number <= 45);
  }

  checkWinning() {
    if (!this.validateWinningNumbers(this.winningNumbers)) {
      console.error('[ERROR] 로또 번호는 6개여야 하며, 1부터 45 사이의 숫자여야 합니다.');
      return;
    }

    // 여기에 로또 당첨 여부와 수익률을 계산하는 코드를 작성하세요.
  }

  printLottoNumbers() {
    this.lottoTickets.forEach((lotto, index) => {
      console.log(`[${index + 1}] ${lotto.getNumbers()}`);
    });
  }

  async getInput(prompt) {
    const input = await prompt('⚡️ ' + prompt);
    if (input === null || input.trim() === '') {
      console.error('[ERROR] 입력값이 없습니다.');
      return await this.getInput(prompt);
    }
    return input;
  }

  async play() {
    await this.buyLotto();
    await this.inputWinningNumbers();
  }
}

export default App;

