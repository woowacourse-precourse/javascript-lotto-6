import { Random } from "@woowacourse/mission-utils";
import IOUtils from "./IOUtils.js";

class GameUtils {

    static getUniqueNumbersInRange(min, max, count) {
        return Random.pickUniqueNumbersInRange(min, max, count);
    }

    static async asyncRetryUntilValidInput(func) {
        try{
            return await func();
        } catch(error) {
            IOUtils.output(error.message);
            return await this.asyncRetryUntilValidInput(func);
        }
    }
}

export default GameUtils;