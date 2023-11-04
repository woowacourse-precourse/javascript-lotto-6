import { MissionUtils } from "@woowacourse/mission-utils";

class Lottogenerator{
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
}
export default Lottogenerator;