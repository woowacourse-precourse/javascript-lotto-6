import {MissionUtils} from "@woowacourse/mission-utils";

class MyLottos {
    #MY_LOTTO;
    #COIN

    constructor(COIN) {
        this.#MY_LOTTO = this.makeLottoArray(COIN);
        this.#COIN = COIN;
    }

    makeLottoArray(LOTTO_NUM) {
        let my_lotto_arr = [];
        while (my_lotto_arr.length !== LOTTO_NUM) {
            my_lotto_arr.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
        }
        return my_lotto_arr;
    };

    getMyLottos() {
        return this.#MY_LOTTO;
    }

    getCoin() {
        return this.#COIN;
    }
}

export default MyLottos;