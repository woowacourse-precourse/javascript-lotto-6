import { Random } from '@woowacourse/mission-utils';


const LottoMaker = {
    generate(quantity) {
        let lotteries = []; 
        Array.from({ length: quantity }, (_) => {
            const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
            lotteries.push(lotto);
        })
        return lotteries;
    }
};


export default LottoMaker;

