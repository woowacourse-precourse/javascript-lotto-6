import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR, AMOUNT, INPUT, CALCULATE, REWARD_ARRAY, WIN_INDEX, WIN, OUTPUT, RESULT_ARRAY } from './constant';
import Lotto from './Lotto';
import Bonus from './Bonus';

/**
 * @param {number} amount
 */
export function validatePurchaseAmount(amount) {
    if (isNaN(amount)) throw new Error(ERROR.PURCHASE);
    if (amount % AMOUNT.UNIT !== 0) throw new Error(ERROR.PURCHASE);
}

export async function getPurchaseAmount() { //구매 금액 입력
    while(true) {
        try {
            const amount = Number(await Console.readLineAsync(`${INPUT.MONEY}\n`));
            validatePurchaseAmount(amount);
            return amount;
        }
        catch(error) {
            Console.print(error.message);
        }

    }
}
//사용자 값 입력받기 input 
export async function getWinningNumbers() {
    /** @type {string} */
    const number = await Console.readLineAsync(`${INPUT.LOTTO}\n`);
    Console.print('');
    return number.split(',').map(Number);
}

export async function getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(`${INPUT.BONUS}\n`);
    Console.print('');
    return Number(bonusNumber);
}

export async function validateLottoNumbers() {
    let winningNumbers;
    while (true) {
        try {
            const numbers = await getWinningNumbers();
            winningNumbers = new Lotto(numbers);
            break;
        }
        catch(error) {
            Console.print(error.message);
        }
    }
    while (true) {
        try {
            const bonusNumber = await getBonusNumber();
            const bonus = new Bonus(winningNumbers, bonusNumber);
            return bonus;
        }
        catch(error) {
            Console.print(error.message);
        }
    }

}

export function LottoMaker(quantity) {
    let lotteries = []; 
    Array.from({ length: quantity }, (_) => {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a - b);
        lotteries.push(lotto);
    })
    return lotteries;
}


/**
 * @param {lotteries[]} lotteries
 */
export function printLotteries(quantity, lotteries) { //발행된 로또 출력 문제 
    Console.print(`${quantity}개를 구매했습니다.`);
    lotteries.forEach((lotto) => {
        Console.print(`[${lotto.join(', ')}]`);
    })
}


export function printLottoReturns(quantity, winningNumbers, bonusNumber, lotteries) { //수익률 출력
    let returns = calculateReturns(quantity, winningNumbers, bonusNumber, lotteries);
    Console.print(OUTPUT.RETURN(returns));
}

export function calculateReturns(quantity, winningNumbers, bonusNumber, lotteries) { //수익률 계산
    let total = gettotalAmount(winningNumbers, bonusNumber, lotteries);
    let returns = (total / (quantity * 1000) * CALCULATE.PERCENTAGE).toFixed(CALCULATE.DECIMAL);
    return returns;
}

export function gettotalAmount(winningNumbers, bonusNumber, lotteries) { //총 당첨된 금액 계산
    let winningDetails = integrateWinLottery(winningNumbers, bonusNumber, lotteries);
    let total = 0;
    winningDetails.forEach((amount, idx) => {
      total += amount * REWARD_ARRAY[idx];
    })
    return total;
}

export function integrateWinLottery(winningNumbers, bonusNumber, lotteries) { //당첨 결과 내역 종합
    let winningDetails = Array(WIN.ARRAY).fill(0); //1등 ~ 5등 
    lotteries.forEach((lotto) => {
        let result = compareNumbers(lotto, winningNumbers, bonusNumber);
        result < WIN.ARRAY ? winningDetails[result] += 1 : null;
    })
    return winningDetails.reverse();
}

export function compareNumbers(lotto, winningNumbers, bonusNumber) { //발행된 로또 번호 이차원 배열과 당첨 번호 배열 비교하여 등수 결정
    let cnt = lotto.filter((number) => winningNumbers.includes(number)).length;
    let rate = (cnt === WIN.SIX) ? WIN_INDEX.SIX 
        : (cnt === WIN.FIVE) ? determineSecondThird(lotto, bonusNumber) 
        : WIN.SIX - cnt + WIN.IDX;
    return rate;
}

export function determineSecondThird(lotto, bonusNumber) { //2등 3등 결정
    let grade;
    lotto.includes(bonusNumber) ? grade = WIN_INDEX.FIVE_BONUS : grade = WIN_INDEX.FIVE;
    return grade;
}


export function printLottoCount(winningNumbers, bonusNumber, lotteries) { //최종 통계 출력
    const winningDetails = integrateWinLottery(winningNumbers, bonusNumber, lotteries);
    Console.print(OUTPUT.RESULT_TITLE);
    RESULT_ARRAY.forEach((v, idx) => {
        Console.print(v + `${winningDetails[idx]}개`);
    })
}
