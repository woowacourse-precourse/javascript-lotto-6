import { Random } from '@woowacourse/mission-utils';


function automaticSelector() {
    const selected = Random.pickUniqueNumbersInRange(1, 45, 6);
    return selected;
}

function issuLotto(quantity) {
    let lotteries = []; 
    Array.from({ length: quantity }, (_) => {
        const lotto = automaticSelector();
        lotteries.push(lotto);
    });
    return lotteries;
}


export default issuLotto;

