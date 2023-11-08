import {Console} from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/Message';

const LottoView = {
    getLottoPurchasePrice(){
        return Console.readLineAsync(PROMPT.PURCHASE_MONEY);
    }


}
export default LottoView;