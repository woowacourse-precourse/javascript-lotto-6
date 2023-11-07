import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from '../comm/Message.js';
import LottoValidate from "../validate/LottoValidate.js";

class UserView{

    constructor(){
        this.lottoValidate = new LottoValidate();
    }

    async userInputPurchaseAmount(){
        try{
            const AMOUNT = await Console.readLineAsync(MESSAGE.MSG_PURCHASE_AMOUNT);
            console.log(MESSAGE.MSG_PURCHASE_AMOUNT);
            console.log(AMOUNT);
            this.lottoValidate.inputPurchaseAmountValidate(AMOUNT)
            this.userOutputLottoCount(AMOUNT);
            return AMOUNT;
        }catch(error){
            Console.print(error.message);
            await this.userInputPurchaseAmount();
        }
    }

    async userInputWinningNumbers(){
        return await Console.readLineAsync(MESSAGE.MSG_WINNING_NUMBERS);
    }

    async userInputBonusNumber(){
        return await Console.readLineAsync(MESSAGE.MSG_BONUS_NUMBER);
    }

    userOutputLottoCount(purchaseAmount){
        Console.print(Number(purchaseAmount)/1000+MESSAGE.MSG_LOTTO_COUNT);
    }

    userOutputPurchaseLottoNumber(purchaseLottoNumbers){
        purchaseLottoNumbers.forEach((purchaseLottoNumber) => {
            Console.print('['+purchaseLottoNumber.join(', ')+']');
        }); 
    }

    userOutputStatistics(){
        Console.print(MESSAGE.MSG_LOTTO_STATISTIC);
    }

    userOutputLottoResult(output){
        Console.print(output);
    }

    userOutputLottoYield(lottoYield){
        Console.print('총 수익률은 '+lottoYield+'%입니다.');
    }

}

export default UserView