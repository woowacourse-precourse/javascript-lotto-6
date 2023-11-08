import { Random } from '@woowacourse/mission-utils';


const LottoMaker = {
    generate(quantity) {
        let lotteries = []; 
        Array.from({ length: quantity }, (_) => {
            const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a - b);
            lotteries.push(lotto);
        })
        return lotteries;
    }
};


export default LottoMaker;

