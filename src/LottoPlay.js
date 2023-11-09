import { MissionUtils } from "@woowacourse/mission-utils";

class LottoPlay{
    priceToAmount(amount) {
        const LOTTO_AMOUNT = amount/1000;
        return LOTTO_AMOUNT;
    }
    autoLottoGenerator(amount) {
        const PURCHASE_LOTTO_NUMBER = [];
        while(PURCHASE_LOTTO_NUMBER.length < amount) {
            const generatedNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
            const sortedNumber = generatedNumber.sort((a, b) => {
                return a-b
            });
            PURCHASE_LOTTO_NUMBER.push(sortedNumber);
        }
        return PURCHASE_LOTTO_NUMBER;
    }
    contingWinNumber(numbers, winNum) {
        const winResult = [];
        numbers.forEach(e => {
            let winCount = winNum.filter(x => e.includes(x));
            winResult.push(winCount.length);
        });
        return winResult;
    }
    countingBonusNumber(numbers, bonusNum) {
        const bonusResult = Array.from({length: numbers.length}, () => 0);
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i].includes(bonusNum) === true) bonusResult[i]+=1;
        }
        return bonusResult;
    }
    winningNumber(winresult, bonusresult) {
        const RESULT_COUNT = Array.from({length: 5}, () => 0);
        for(let i = 0; i < winresult.length; i++){
            if(winresult[i] === 3) RESULT_COUNT[0]+=1;
            else if(winresult[i] === 4) RESULT_COUNT[1]+=1;
            else if(winresult[i] === 5 && bonusresult[i] === 0) RESULT_COUNT[2]+=1;
            else if(winresult[i] === 5 && bonusresult[i] === 1) RESULT_COUNT[3]+=1;
            else if(winresult[i] === 6) RESULT_COUNT[4]+=1;
        }
        return RESULT_COUNT;
    }
    prizeMoney(result) {
        let WIN_MONEY = 0;
        const PRIZE_MONEY = [5000,50000,1500000, 30000000, 2000000000];
        for(let i =0; i < result.length; i++){
            WIN_MONEY += result[i]*PRIZE_MONEY[i];
        }
        return WIN_MONEY;
    }
    returnRatio(winmoeny, price) {
        const RETURN_RATIO = winmoeny*100/price;
        return RETURN_RATIO;
    }
}
export default LottoPlay