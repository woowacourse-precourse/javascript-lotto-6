import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../pages/texts';

export default async function getNumber() {
    let money = await MissionUtils.Console.readLineAsync(LOTTO.buy);

    return money;
}
