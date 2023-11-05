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
        const bonusResult = [];
        numbers.forEach(e => {
            let bonusCount = e.find(x => x=bonusNum);
            bonusResult.push(bonusCount.length);
        });
        return bonusResult;
    }
    winningNumber(winResult, bonusResult) {
        const RESULT_COUNT = [];
        for(let i = 0; i < winResult.length; i++){
            if(winResult[i] === 3) RESULT_COUNT.push()
        }
    }
}
export default LottoPlay;