import { Console } from '@woowacourse/mission-utils';
import { OUTPUT, RESULT_ARRAY } from '../constants/messages';
import { issuLotto } from '../LotteryIssuance';
import { calculateReturns } from '../Result';


function printPurchaseAmount(quantity) {
    Console.print(OUTPUT.PURCHASE(quantity));
}

function printLotteries(quantity) {
    let lotteries = issuLotto(quantity);
    lotteries.forEach((lotto) => {
        Console.print(lotto);
        Console.print(OUTPUT.LINE);
    })
}

function printLottoCount(winningDetails) {
    Console.print(OUTPUT.RESULT_TITLE);
    RESULT_ARRAY.forEach((v, idx) => {
        Console.print(RESULT_ARRAY + `${winningDetails[idx]}개`);
    })
}

function printLottoReturns(purchaseAmount, winningNumbers, bonusNumber) {
    let returns = calculateReturns(purchaseAmount, winningNumbers, bonusNumber);
    Console.print(OUTPUT.RETURN(returns));
}

export {printPurchaseAmount, printLotteries, printLottoCount, printLottoReturns};