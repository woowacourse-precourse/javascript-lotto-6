import { randomNumbers } from '../utils/randomNumbers.js'
import { result } from '../model/result.js'
import InputView from '../view/InputView.js'
import OutputView from '../view/OutputView.js'

class LottoController {
  #inputView;
  #outputView;

  constructor() { 
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async start() {
    const lottoPrice = await this.#inputView.lottoPriceInput();
    const lottoTickets = this.lottoTickets(lottoPrice);
    const lottoMainNumbers = await this.#inputView.lottoMainNumberInput();
    const lottoBonusNumber = await this.#inputView.lottoBonusNumberInput(lottoMainNumbers);
    const calculationResult = this.calculationResult(lottoTickets, lottoMainNumbers, lottoBonusNumber);
    this.printResult(lottoPrice, lottoTickets, calculationResult, lottoBonusNumber);
  }

  lottoTickets(lottoPrice) {
    const unitLottoNumbers = ~~(lottoPrice / 1000);
    this.#outputView.lottoTotalOutput(unitLottoNumbers);
    const lottoTickets = [];
    for (let i = 0; i < unitLottoNumbers; i++) {
      const randomLottoNumbers = randomNumbers();
      const lottoNumbers = randomLottoNumbers.sort((a, b) => a - b);
      lottoTickets.push(lottoNumbers);
      this.#outputView.lottoNumbersOutput(lottoNumbers);
    }
    return lottoTickets;
  }

  calculationResult(lottoTickets, lottoMainNumbers, lottoBonusNumber) {
    lottoTickets.forEach(ticket => {
      const matchingNumbers = ticket.filter(number => lottoMainNumbers.includes(number));
      const matchingCount = matchingNumbers.length;
      const bonusNumber = ticket.includes(Number(lottoBonusNumber));
      if (matchingCount === 6) result[4].count++;
      else if (matchingCount === 5) result[bonusNumber ? 3 : 2].count++;
      else if (matchingCount === 4) result[1].count++;
      else if (matchingCount === 3) result[0].count++;
    });
    return result;
  }
    
  printResult(lottoPrice, lottoTickets, calculationResult) {
    this.#outputView.printMessageOutput();
    this.#outputView.resultsOutput(calculationResult);
    const resultPrice = calculationResult.reduce((total, result) => {
      return total + result.price * result.count;
    }, 0);
    const totalPercentage = (100 + ((resultPrice - lottoPrice) / lottoPrice) * 100).toFixed(1);
    this.#outputView.totalPercentageOutput(totalPercentage);
  }
}

export default LottoController;
