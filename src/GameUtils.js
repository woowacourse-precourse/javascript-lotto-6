import { Random } from "@woowacourse/mission-utils";

class GameUtils {

    static getUniqueNumbersInRange(min, max, count) {
        return Random.pickUniqueNumbersInRange(min, max, count);
    }
}

export default GameUtils;