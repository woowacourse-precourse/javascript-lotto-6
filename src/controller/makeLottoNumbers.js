import { MissionUtils } from "@woowacourse/mission-utils";

import { MESSAGE } from '../data/message.js';

function makeLottoNumbers(amount) {
    const count = amount / 1000;
    MissionUtils.Console.print(`\n${count}${MESSAGE.PURCHASE_COUNT}`);
    let sortedLottoArray = [];
    for (let i = 0; i < count; i++) {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        const sortedNumbers = lottoNumbers.sort((a, b) => a - b);
        MissionUtils.Console.print([`${sortedNumbers}`]);
        sortedLottoArray.push(sortedNumbers);
    }
    return sortedLottoArray;
}

export default makeLottoNumbers;