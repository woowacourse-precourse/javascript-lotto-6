import { MissionUtils } from '@woowacourse/mission-utils';
import { QUERY,MESSAGE,ERROR,LOTTO_ERROR_MSG,PURCHASE_ERROR_MSG } from './Constants';
const Validate = require('./Validate');

class View{
    outputPurchaseAmount(input){
        MissionUtils.Console.print(`${input.length}${MESSAGE.PURCHASE_NUM}`);
    }
}

module.exports = View;