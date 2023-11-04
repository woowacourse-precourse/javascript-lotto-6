import {MissionUtils} from "@woowacourse/mission-utils";

const MY_LOTTO = (LOTTO_NUM) => {
    let my_lotto_arr = [];
    while (my_lotto_arr.length !== LOTTO_NUM) {
        my_lotto_arr.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return my_lotto_arr;
};
export default MY_LOTTO;