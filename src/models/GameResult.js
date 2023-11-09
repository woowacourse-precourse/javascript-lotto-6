import { CONSTANTS } from "../constants/GameConstant.js";
import { WINNING_PRICE } from "../constants/Winning.js";
import LottoView from "../views/LottoView.js";

class GameResult{
    userLotto;
    userWinningLotto;
    result = [];

    result_prize = {
        FIFTH : 0,
        FOURTH : 0,
        THIRD : 0,
        SECOND : 0,
        FIRST : 0,
    }
    result_money = 0;
    user_input_money;

    constructor(userLotto, userWinningLotto){
        this.userLotto = userLotto;
        this.userWinningLotto = userWinningLotto;
    }   

    getMatchingResult(){
        const userWinningLottoNumber = this.userWinningLotto.getLottoNumber();
        const userBonusNumber = this.userWinningLotto.getBonusNumber();

        this.userLotto.getLottoNumbers().forEach(lottoNumber =>{
            const matchNumberCount = lottoNumber.getLottoNumber().filter(number => userWinningLottoNumber.includes(number)).length;
            const isBonusNumberMatch = lottoNumber.getLottoNumber().includes(userBonusNumber); 
            this.result.push({matchNumberCount, isBonusNumberMatch})
        })

        return this.result;
    }

    calculateEachPrize(){
        const matchingResult = this.result;
        matchingResult.forEach(matching => {
            if(matching.matchNumberCount === 6)
                this.result_prize.FIRST++;
            else if(matching.matchNumberCount === 5 && matching.isBonusNumberMatch)
                this.result_prize.SECOND++;
            else if(matching.matchNumberCount === 5)
                this.result_prize.THIRD++;
            else if(matching.matchNumberCount === 4)
                this.result_prize.FOURTH++;
            else if(matching.matchNumberCount === 3)
                this.result_prize.FIFTH++;
        })
    }

    calculateLottoResultMoney(){
        this.result_money = this.result_prize.FIRST * WINNING_PRICE.FIRST
        + this.result_prize.SECOND * WINNING_PRICE.SECOND
        + this.result_prize.THIRD * WINNING_PRICE.THIRD
        + this.result_prize.FOURTH * WINNING_PRICE.FOURTH
        + this.result_prize.FIFTH * WINNING_PRICE.FIFTH;
    }

    getLottoPurchaseMoneyAmount(){
        this.user_input_money = this.userLotto.getLottoNumbers().length * CONSTANTS.PURCHASE_UNIT_PRICE;
    }

    printGame(){
        this.getMatchingResult();
        this.calculateEachPrize();
        this.calculateLottoResultMoney();
        this.getLottoPurchaseMoneyAmount();
        LottoView.printLottoGameResult(this.result_prize, this.result_money, this.user_input_money);
        
    }
}
export default GameResult;