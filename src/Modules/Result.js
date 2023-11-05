import { WIN, WIN_INDEX } from '../constants/values';
import { issuLotto } from './LotteryIssuance';

function integrateWinLottery(winningNumbers, bonusNumber) { //당첨 결과 내역 종합
    let lotteries = issuLotto(quantity);
    let winningDetails = Array(WIN.ARRAY).fill(0); //1등 ~ 5등 
    lotteries.forEach((lotto) => {
        let result = compareNumbers(lotto, winningNumbers, bonusNumber);
        result < WIN.ARRAY ? winningDetails[result] += 1 : null;
    })
    return winningDetails;
}

function compareNumbers(lotto, winningNumbers, bonusNumber) { //발행된 로또 번호 이차원 배열과 당첨 번호 배열 비교하여 등수 결정
    let cnt = lotto.filter((number) => winningNumbers.includes(number)).length;
    let rate = (cnt === WIN.SIX) ? WIN_INDEX.SIX 
        : (cnt === WIN.FIVE) ? determineSecondThird(lotto, bonusNumber) 
        : WIN.SIX - cnt + WIN.IDX;
    return rate;
}

function determineSecondThird(lotto, bonusNumber) { //2등 3등 결정
    let grade;
    lotto.includes(bonusNumber) ? grade = WIN_INDEX.FIVE_BONUS : grade = WIN_INDEX.FIVE;
    return grade;
}


export default integrateWinLottery;
