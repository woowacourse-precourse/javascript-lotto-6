import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, LOTTO } from '../pages/texts.js';

export default async function getNumber() {
    let money = await MissionUtils.Console.readLineAsync(LOTTO.buy);

    if (money % 1000 !== 0) throw new Error(ERROR.input_1000won);
    if (isNaN(money)) throw new Error(ERROR.numeric);
    if (money === '' || money === ' ') throw new Error(ERROR.numeric_null);

    return money;
}

getNumber();
