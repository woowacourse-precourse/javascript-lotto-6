import {Random} from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants/GameConstant.js';
import Lotto from '../Lotto.js';

class UserLotto{
    lottoNumbers = [];

    constructor(purchaseLottoCount){
        this.generateLottoNumbers(purchaseLottoCount);
    }
    
    generateLottoNumbers(purchaseLottoCount){
        for(let count = 0; count < purchaseLottoCount; count++){
            const lottoNumber = Random.pickUniqueNumbersInRange(CONSTANTS.MIN_VALUE,CONSTANTS.MAX_VALUE,CONSTANTS.LOTTO_NUMBER_LENGTH);           
            lottoNumber.sort((a, b) => a - b);
            this.lottoNumbers.push(new Lotto(lottoNumber));
        }
    }

    printLottoNumbers(){
        this.lottoNumbers.forEach(lottoNumber => {
            lottoNumber.printLottoNumber();
        })
    }

}
export default UserLotto;