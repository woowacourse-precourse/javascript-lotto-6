import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'
import { randomNumbers } from '../utils/randomNumbers.js'
import { lottosValues } from '../model/lottosValues.js'
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
    this.printResult(lottoPrice, lottoTickets, calculationResult);
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
            if (matchingCount === 5) {
                const hasBonusNumber = ticket.includes(lottoBonusNumber);
                if (hasBonusNumber) {
                    lottosValues[3].count++;
                }
            } else if (matchingCount >= 3) {
                if (matchingCount === 5) {
                    lottosValues[2].count++;
                } else if (matchingCount === 4) {
                    lottosValues[1].count++;
                } else if (matchingCount === 3) {
                    lottosValues[0].count++;
                }
            }
        });
        return lottosValues;
    }

    printResult(lottoPrice, lottoTickets, calculationResult) {
        Console.print(CONSOLE_MESSAGE.inputPrintResult);
        calculationResult.forEach((result) => {
            Console.print(`${result.match} (${result.price.toLocaleString()}원) - ${result.count}개`);
        });
        const resultPrice = calculationResult.reduce((total, result) => {
            return total + result.price * result.count;
        }, 0);
        const totalPercentage = (100 + ((resultPrice - lottoPrice) / lottoPrice) * 100).toFixed(1);
        Console.print(`총 수익률은 ${totalPercentage}%입니다.`);
    }
}

export default LottoController;
