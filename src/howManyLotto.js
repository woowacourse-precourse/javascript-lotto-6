import { Console } from '@woowacourse/mission-utils';
import { getPurchaseAmount, calculateLottoCount } from './lottoPurchase.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export async function howManyLotto() {
    try {
        const purchaseAmount = await getPurchaseAmount();
        const lottoCount = calculateLottoCount(purchaseAmount);
        Console.print(`${lottoCount}개를 구매했습니다.`);

        for (let i = 0; i < lottoCount; i++) {
            const lottoNumbers = generateRandomLottoNumbers();
            Console.print(`[${lottoNumbers.join(', ')}]`);
        }
    } catch (error) {
        Console.print(error.message);
    }
}

function generateRandomLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers.sort((a, b) => a - b);
}

howManyLotto();
