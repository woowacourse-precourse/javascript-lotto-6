import {MissionUtils} from "@woowacourse/mission-utils";
import Constants from "../constants/Constants.js";

class MyLottos {
    #MY_LOTTO;
    #COIN;
    #OUTPUT_STRING;
    constructor(COIN) {
        this.#MY_LOTTO = this.makeLottoArray(COIN);
        this.#COIN = COIN;
        this.#OUTPUT_STRING = `\n${COIN}개를 구매했습니다.`;
        this.makeOutputString();
    }

    makeLottoArray(LOTTO_NUM) {
        let my_lotto_arr = [];
        while (my_lotto_arr.length !== LOTTO_NUM) {
            my_lotto_arr.push(MissionUtils.Random.pickUniqueNumbersInRange(Constants.LOTTO_START, Constants.LOTTO_END, Constants.LOTTO_LENGTH).sort((a, b) => a - b));
        }
        return my_lotto_arr;
    };

    makeOutputString() {
        this.#MY_LOTTO.forEach(v => {
            this.#OUTPUT_STRING += `\n[${v.join(', ')}]`
        });
    }

    getMyLottos() {
        return this.#MY_LOTTO;
    }

    getOutputString() {
        return this.#OUTPUT_STRING;
    }
}

export default MyLottos;