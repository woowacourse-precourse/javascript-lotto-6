import { Random } from "@woowacourse/mission-utils";
import NUMBERS from '../constants/numbers.js'
const createNumbers = (money) => {
    const lottoAmount = money / 1000;
    const numberOfLottos = [];
    for (let i = 0; i < lottoAmount; i++){
        numberOfLottos.push(Random.pickUniqueNumbersInRange(NUMBERS.start_number, NUMBERS.end_number, NUMBERS.piece));
    }
    return numberOfLottos;
}

export default createNumbers;