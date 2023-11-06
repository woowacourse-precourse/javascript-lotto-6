import { Console } from '@woowacourse/mission-utils';
import { getPurchaseAmount, calculateLottoCount } from './lottoPurchase.js';

export async function howManyLotto() {
    try {
        const purchaseAmount = await getPurchaseAmount();
        const lottoCount = calculateLottoCount(purchaseAmount);
        Console.print(`${lottoCount}개를 구매했습니다.`);
    } catch (error) {
        Console.print(error.message);
    }
}

howManyLotto();
