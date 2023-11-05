import { MissionUtils } from "@woowacourse/mission-utils";
import Exceptions from "./Lotto.js";

class PlayGame {
    constructor() {
        this.Exceptions = new Exceptions();
    }

    async getRandomNumber(ticketAmount) {
        let randomArray = new Array();
        for (let i = 0; i < ticketAmount; i++) {
            let printArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 7);
            this.arrayPrint(printArray);
            randomArray.push(printArray);
        }
        return randomArray;
    }

    arrayPrint(printArray) {
        let stringArray = JSON.stringify(printArray.slice(0, 6));
        MissionUtils.Console.print('[' + stringArray.slice(1, stringArray.length - 1).replace(/,/gi, ', ') + ']');
    }
}
export default PlayGame;