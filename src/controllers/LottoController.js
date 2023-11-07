import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'
import { inputNumbersValidator } from '../validate/inputNumbersValidator.js'
import { inputBonusValidator } from '../validate/inputBonusValidator.js'
import { randomNumbers } from '../utils/randomNumbers.js'
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
        const lottoPriceInput = await this.#inputView.lottoPriceInput();
        const lottoTickets = this.lottoTickets(lottoPriceInput);
        const lottoMainNumbers = await this.lottoMainNumbers();
        const lottoBonusNumber = await this.lottoBonusNumber(lottoMainNumbers);
        const calculationResult = this.calculationResult(lottoTickets, lottoMainNumbers, lottoBonusNumber);
        this.printResult(lottoPriceInput, lottoTickets, calculationResult);
    }

    lottoTickets(lottoPriceInput) {
        const unitLottoNumbers = ~~(lottoPriceInput / 1000);
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

    async lottoMainNumbers() {
        const lottoNumbers = await this.#inputView.lottoMainNumberInput();
        inputNumbersValidator(lottoNumbers);
        return lottoNumbers;
    }

    async lottoBonusNumber(lottoMainNumbers) {
      const bonusNumber = await this.#inputView.lottoBonusNumberInput();
      inputBonusValidator(lottoMainNumbers, bonusNumber);
      return bonusNumber;
    }

    calculationResult(lottoTickets, lottoMainNumbers, bonusNumber) {
        const results = [
            { match: '3개 일치', price: 5000, count: 0 },
            { match: '4개 일치', price: 50000, count: 0 },
            { match: '5개 일치', price: 1500000, count: 0 },
            { match: '5개 일치, 보너스 볼 일치', price: 30000000, count: 0 },
            { match: '6개 일치', price: 2000000000, count: 0 },
        ];
        lottoTickets.forEach(ticket => {
            const matchingNumbers = ticket.filter(number => lottoMainNumbers.includes(number));
            const matchingCount = matchingNumbers.length;
            if (matchingCount === 5) {
                const hasBonusNumber = ticket.includes(bonusNumber);
                if (hasBonusNumber) {
                    results[3].count++;
                }
            } else if (matchingCount >= 3) {
                if (matchingCount === 5) {
                    results[2].count++;
                } else if (matchingCount === 4) {
                    results[1].count++;
                } else if (matchingCount === 3) {
                    results[0].count++;
                }
            }
        });
        return results;
    }

    printResult(lottoPriceInput, lottoTickets, calculationResult) {
        Console.print(CONSOLE_MESSAGE.inputPrintResult);
        calculationResult.forEach((result) => {
            Console.print(`${result.match} (${result.price.toLocaleString()}원) - ${result.count}개`);
        });
        const resultPrice = calculationResult.reduce((total, result) => {
            return total + result.price * result.count;
        }, 0);
        const totalPercentage = (100 + ((resultPrice - lottoPriceInput) / lottoPriceInput) * 100).toFixed(1);
        Console.print(`총 수익률은 ${totalPercentage}%입니다.`);
    }
}

export default LottoController;
