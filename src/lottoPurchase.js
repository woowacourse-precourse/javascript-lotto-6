import { Console } from '@woowacourse/mission-utils';

export async function getPurchaseAmount() {
    try {
        const input = await Console.readLineAsync('구입금액을 입력해주세요: ');
        const purchaseAmount = parseInt(input, 10);

        if (isNaN(purchaseAmount) || purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
            throw new Error('[ERROR] 올바른 금액을 입력하세요.');
        }

        return purchaseAmount;
    } catch (error) {
        throw error;
    }
}

export function calculateLottoCount(purchaseAmount) {
    if (typeof purchaseAmount !== 'number') {
        throw new Error('[ERROR] 구입 금액이 올바르지 않습니다.');
    }

    return Math.floor(purchaseAmount / 1000);
}
