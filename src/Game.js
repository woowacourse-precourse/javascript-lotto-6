import { Random } from '@woowacourse/mission-utils';
import { WIN_INDEX, WIN } from './constant';


export function LottoMaker(quantity) {
    let lotteries = []; 
    Array.from({ length: quantity }, (_) => {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a - b);
        lotteries.push(lotto);
    })
    return lotteries;
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
