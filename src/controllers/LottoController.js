import { Random, Console } from "@woowacourse/mission-utils";
import { inputPriceValidator } from '../validate/inputPriceValidator'
import { inputNumbersValidator } from '../validate/inputNumbersValidator'
import { inputBonusValidator } from '../validate/inputBonusValidator'
import { CONSOLE_MESSAGE } from '../constans/consoleMessages'

class LottoController {
    async start() {
        const lottoPrice = await this.lottoPrice();
        const lottoTickets = this.lottoTickets(lottoPrice);
        const lottoMainNumbers = await this.lottoMainNumbers();
        const lottoBonusNumber = await this.lottoBonusNumber(lottoMainNumbers);
        const calculationResult = this.calculationResult(lottoTickets, lottoMainNumbers, lottoBonusNumber);
        this.printResult(lottoPrice, lottoTickets, calculationResult);
    }

    async lottoPrice() {
        const priceInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoPrice);
        inputPriceValidator(priceInput);
        return priceInput;
    }

    lottoTickets(lottoPrice) {
        const unitLottoNumbers = ~~(lottoPrice / 1000);
        this.lottoTotalMessage(unitLottoNumbers);
        const lottoTickets = [];
        for (let i = 0; i < unitLottoNumbers; i++) {
            const randomLottoNumbers = this.randomNumbers();
            const lottoNumbers = randomLottoNumbers.sort((a, b) => a - b);
            lottoTickets.push(lottoNumbers);
            Console.print(`[${lottoNumbers.join(', ')}]`);
        }
        return lottoTickets;
    }

    lottoTotalMessage(unitLottoNumbers) {
        Console.print(`${unitLottoNumbers}개를 구매했습니다.`);
    }

    randomNumbers() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    async lottoMainNumbers() {
        const lottoMainNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoMainNumber);
        const lottoNumbers = lottoMainNumberInput.split(',').map(Number);
        inputNumbersValidator(lottoMainNumberInput);
        return lottoNumbers;
    }

    async lottoBonusNumber(lottoMainNumbers) {
        const lottoBonusNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoBonusNumber);
        const bonusNumber = parseInt(lottoBonusNumberInput);
        inputBonusValidator(lottoMainNumbers, lottoBonusNumberInput);
        return bonusNumber;
    }

    // inputBonusValidator(lottoMainNumbers, bonusNumber) {
    //     const rangeError = bonusNumber < 1 || bonusNumber > 45;
    //     const overlapError = lottoMainNumbers.includes(bonusNumber);
    //     return (rangeError && overlapError);
    // }

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
