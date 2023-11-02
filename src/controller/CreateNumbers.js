import { Console, Random } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../constants/gameMessage.js";
import NUMBERS from '../constants/numbers.js'

const createNumbers = (lottoAmount) => {
    Console.print(`${lottoAmount}${GAME_MESSAGE.bought}`);
    const numberOfLottos = [];
    for (let i = 0; i < lottoAmount; i++){
        const Numbers = Random.pickUniqueNumbersInRange(NUMBERS.start_number, NUMBERS.end_number, NUMBERS.piece).sort((a,b) => a - b);
        numberOfLottos.push(Numbers);
    }
    return numberOfLottos;
}

export default createNumbers;
