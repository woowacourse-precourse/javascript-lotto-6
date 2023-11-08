import { Random } from '@woowacourse/mission-utils';
import {LOTTO_NUM} from "../constants/message.js";

const RandomNum = {
    create() {
        return Random.pickUniqueNumbersInRange(
            LOTTO_NUM.MIN_NUMBER,
            LOTTO_NUM.MAX_NUMBER,
            LOTTO_NUM.LENGTH
        );
    },
};

export default RandomNum;